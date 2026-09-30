def generate_random_number_from_blockhash(blockhash_file, output_file):
    
    with open(blockhash_file, 'r') as file:
        blockhash = file.read().strip()

    if blockhash.startswith('0x'):
        blockhash = blockhash[2:]

    blockhash_int = int(blockhash, 16)
    random_number = blockhash_int % 90000000 + 10000000 # Seed can't start with 0
    random_number_str = str(random_number).zfill(8)

    with open(output_file, 'w') as output:
        output.write(random_number_str)

    return random_number_str

blockhash_file = '/media/user/DATADISK/cutline-zu3-n53/250821-bh-53-20.txt'
output_file = '/media/user/DATADISK/cutline-zu3-n53/250821-seed-53-20.txt'
random_number = generate_random_number_from_blockhash(blockhash_file, output_file)
