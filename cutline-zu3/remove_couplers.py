import pathlib
import re
import json

CIRCUITS_DIR = pathlib.Path("../MeteorCircuit/circuit")
RULES_FILEPATH = pathlib.Path("in/remove_couplers.json")

def main():
    with open(RULES_FILEPATH) as fid:
        rules = json.load(fid)
    if not rules:
        return
    patterns = []
    for rule in rules:
        pattern = rule["circuit_name_match_rule"]
        pattern_obj = re.compile(pattern)
        remove_edges = rule["remove_edges"]
        patterns.append((pattern_obj, remove_edges))
    for circuit in CIRCUITS_DIR.iterdir():
        if not circuit.is_file():
            continue
        circuit_name = circuit.name
        for pattern, remove_edges in patterns:
            if pattern.match(circuit_name):
                with open(circuit) as fid:
                    # load txt circuit
                    circuit_data = fid.read()
                for edge in remove_edges:
                    # match and remove all the lines that contain the edge at the end like the following
                    # 1 fsimplus(1.5563949346542358, -0.12545767426490784, -0.20261330902576447, 0.24298745393753052, -2.448136964904551) 13 20
                    circuit_data = re.sub(rf"\d+ fsimplus\(.*\) {edge[0]} {edge[1]}\n", "", circuit_data)
                    circuit_data = re.sub(rf"\d+ fsimplus\(.*\) {edge[1]} {edge[0]}\n", "", circuit_data)
                    # FSIM G36_44 0
                    circuit_data = re.sub(rf"FSIM G{edge[0]}_{edge[1]} \d+\n", "", circuit_data)
                    circuit_data = re.sub(rf"FSIM G{edge[1]}_{edge[0]} \d+\n", "", circuit_data)
                        
                with open(circuit, "w") as fid:
                    fid.write(circuit_data)

if __name__ == "__main__":
    main()