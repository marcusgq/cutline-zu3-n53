import pathlib
import re
import json

import cirq

CIRCUITS_DIR = pathlib.Path("../MeteorCircuit/circuit")
CONFIG_FILEPATH = pathlib.Path("in/gen_cirq.json")


GATE_MAP = {
    "x_1_2": cirq.X**0.5,
    "y_1_2": cirq.Y**0.5,
    "hz_1_2": cirq.PhasedXPowGate(phase_exponent=0.25, exponent=0.5),
    "fsimplus": cirq.FSimGate(theta=1.5707963267948966, phi=0.5235987755982988),
}


def grid_qubit(qid: int) -> cirq.GridQubit:
    div, rem = divmod(qid, 15)
    if rem < 8:
        row = div * 2
        col = rem * 2
    else:
        row = div * 2 + 1
        col = (rem - 8) * 2 + 1
    return cirq.GridQubit(row, col)


def parse_and_generate_cirq_circuit(circuit_data: str) -> cirq.Circuit:
    moments = []
    lines = circuit_data.split("\n")
    num_qubits = int(lines[0])
    for line in lines[1:]:
        splits = line.split(" ")
        if int(splits[0]) == len(moments):
            moments.append(cirq.Moment())
        if splits[1].startswith("fsimplus"):
            gate = "fsimplus"
            qubits = splits[6:]
        else:
            gate = splits[1]
            qubits = splits[2:]
        cirq_gate = GATE_MAP[gate]
        cirq_qubits = [grid_qubit(int(q)) for q in qubits]
        op = cirq_gate(*cirq_qubits)
        moments[-1] += op
    circuit = cirq.Circuit(moments)
    assert cirq.num_qubits(circuit) == num_qubits
    depth = (len(moments) - 1) // 2
    return circuit, num_qubits, depth


def main():
    with open(CONFIG_FILEPATH) as fid:
        rules = json.load(fid)
    if not rules:
        return
    patterns = [re.compile(p) for p in rules]
    for circuit in CIRCUITS_DIR.iterdir():
        if not circuit.is_file():
            continue
        circuit_name = circuit.name
        for pattern in patterns:
            if pattern.match(circuit_name):
                with open(circuit) as fid:
                    # load txt circuit
                    circuit_data = fid.read()
                # parse and generate cirq circuit
                cirq_circuit, n, d = parse_and_generate_cirq_circuit(circuit_data)
                # with open(circuit.parent / ("cirq_" + circuit.stem + ".qasm"), "w") as fid:
                #     fid.write(cirq.qasm(cirq_circuit))
                cirq.to_json(
                    cirq_circuit,
                    circuit.parent / f"circuit_n{n}_m{d}_s0_e0_pABCDCDAB.json",
                )


if __name__ == "__main__":
    main()
