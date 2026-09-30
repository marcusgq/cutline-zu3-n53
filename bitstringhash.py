import hashlib
import os

file_path = "D:/qm-53q-250821/basis.txt"

hash_output_file_path = "D:/cutline-zu3-n53/bitstring-hash.txt"

with open(file_path, "rb") as f:
    file_hash = hashlib.sha256(f.read()).hexdigest()

prefixed_hash = "0x" + file_hash

with open(hash_output_file_path, "w") as output_file:
    output_file.write(prefixed_hash)
