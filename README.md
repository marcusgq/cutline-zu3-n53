cutline-zu3-n53

Reproduction materials for the 53-qubit random-circuit generation used in the experiment.

Two-qubit gate / fSimPlus parameters are not expected to be reproduced exactly. The goal is to reproduce the circuit structure generated from the block hash and verify that any remaining differences are limited to the fSimPlus parameters.

Reproduction
    1. If the measured bitstring file is available, run bitstringhash.py and verify that its SHA-256 hash matches bitstring-hash.txt.
    2. Create a .txt file containing the block hash.
    3. Run blockhash-seed.py to generate the seed from the block hash.
    4. In cutline-zu3/random.js, set const seedFilePath to the path of the generated seed file.
    5. Make sure the correct generateCircuit.json file is present in cutline-zu3/in.
    6. Run blockhash-circuit.sh to generate the circuit.
    7. In MeteorCircuit/circuit, locate the Sycamore circuit corresponding to the qubit number and circuit depth used. The relevant file should end with:
fullcircuit_Verification.txt
    8. Compare the reproduced circuit with the actual circuit.
    9. If the only mismatches are in the fSimPlus parameters, the circuit has been successfully reproduced.
