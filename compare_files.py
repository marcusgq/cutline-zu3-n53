def compare_files(file1_path, file2_path, output_path="comparison_report.txt"):
    with open(file1_path, 'r') as f1, open(file2_path, 'r') as f2:
        lines1 = f1.readlines()
        lines2 = f2.readlines()

    lines1 = [line.rstrip() for line in lines1]
    lines2 = [line.rstrip() for line in lines2]

    report_lines = []

    if lines1 == lines2:
        message = "The files are exactly the same."
        print(message)
        report_lines.append(message)
    else:
        report_lines.append("The files are different.\n")
        max_len = max(len(lines1), len(lines2))
        for i in range(max_len):
            line1 = lines1[i] if i < len(lines1) else "[MISSING]"
            line2 = lines2[i] if i < len(lines2) else "[MISSING]"
            if line1 != line2:
                report_lines.append(f"Line {i+1} differs:")
                report_lines.append(f"  File1: {line1}")
                report_lines.append(f"  File2: {line2}")
                report_lines.append("")

    with open(output_path, 'w') as out:
        out.write("\n".join(report_lines))

    print(f"\nComparison report written to: {output_path}")


if __name__ == "__main__":

    file1 = "250821-circuit-53-20.txt"
    # file1= "sycamore56_20_IJKL_fullcircuit_Verification.txt"
    file2 = "reproduced-250821-circuit-53-20.txt"
    # output_report = "test"
    output_report = "compare-250821-53-20-circuit.txt"

    compare_files(file1, file2, output_report)
