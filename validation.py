import os
import zipfile

def validate_zip_structure(zip_path):
    if not zipfile.is_zipfile(zip_path):
        return False, "Upload failure, the uploaded file is not a valid zip file"

    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        filenames = zip_ref.namelist()

        # Validate presence of problems.yaml
        if 'problem.yaml' not in filenames:
            return False, "Upload failure,'problem.yaml' not found in zip file"

        # Validate data structure
        if 'data/' not in filenames:
            return False, "Upload failure, data folder not found"

        for sub_folder in ['sample/', 'secret/']:
            folder_path = 'data/' + sub_folder
            if folder_path not in filenames:
                return False, f"Upload failure, {sub_folder[:-1]} folder not found"

            files = [f.split('/')[-1] for f in filenames if f.startswith(folder_path) and not f.endswith('/')]  # Exclude directory entries
            base_names = set([os.path.splitext(f)[0] for f in files])

            for base in base_names:
                if base and (f"{base}.ans" not in files or f"{base}.in" not in files):
                    return False, f"Upload failure, matching .ans and .in files not found for {base} in {sub_folder[:-1]} directory"

        # Validate problem statement structure
        valid_problem, message_problem = check_problem_statement_structure(filenames)
        if not valid_problem:
            return valid_problem, message_problem
        
        valid_solution, message_solution = check_solutions_or_submission_structure(filenames)
        if not valid_solution:
            return valid_solution, message_solution
        
           # Validate output_validators structure
        valid_output_validators, message_output_validators = check_output_validators_structure(filenames)
        if not valid_output_validators:
            return valid_output_validators, message_output_validators

    return True, "Folder structure within the ZIP is valid"

def check_problem_statement_structure(filenames):
    problem_statement_path = 'problem_statement/'
    problem_pdf_path = 'problem.pdf'

    # Checking the existence of problem.en.tex or problem.pdf
    has_problem_tex = 'problem_statement/problem.en.tex' in filenames
    has_problem_pdf = problem_pdf_path in filenames

    if not (has_problem_tex or has_problem_pdf):
        return False, "Upload failure, either 'problem.en.tex' in 'problem_statement' folder or 'problem.pdf' must exist in zip file"

    # If the problem statement folder exists but doesn't contain problem.en.tex
    if problem_statement_path in filenames and not has_problem_tex:
        return False, "Upload failure, 'problem.en.tex' not found in 'problem_statement' folder."

    return True, ""

def check_solutions_or_submission_structure(filenames):
    solutions_path = 'solutions/'
    submission_path = 'submissions/'
    possible_folders = ['accepted/', 'wrong_answer/', 'time_limit_exceeded/']
    valid_extensions = ['.cpp', '.java', '.py', '.cc', '.kt', '.cs']

    if solutions_path not in filenames and submission_path not in filenames:
        return False, "Upload failure, Either 'solutions' or 'submissions' folder must exist in zip file"

    active_path = solutions_path if solutions_path in filenames else submission_path

    if active_path + 'accepted/' not in filenames:
        return False, "Upload failure, 'accepted' folder not found in zip file under the active directory (solutions or submissions)"

    for folder in possible_folders:
        folder_full_path = active_path + folder
        if folder_full_path in filenames:
            files_in_folder = [f for f in filenames if f.startswith(folder_full_path) and os.path.splitext(f)[-1] in valid_extensions]
            if not files_in_folder:
                return False, f"Upload failure, no valid solution files found in {folder[:-1]} folder under the active directory."

    return True, ""

def check_output_validators_structure(filenames):
    output_validators_path = 'output_validators/'
    valid_extensions = ['.cpp', '.h']

    if output_validators_path in filenames:
        files_in_folder = [f for f in filenames if f.startswith(output_validators_path) and os.path.splitext(f)[-1] in valid_extensions]
        
        if len(files_in_folder) != 2 or \
           not any(f.endswith('.cpp') for f in files_in_folder) or \
           not any(f.endswith('.h') for f in files_in_folder):
            return False, "Upload failure, output_validators folder should have exactly one .cpp and one .h file. Please check."

    return True, ""

zip_path = input("Enter the path to the data.zip: ")
isValid, message = validate_zip_structure(zip_path)

while not isValid:
    print(message)
    zip_path = input("Please input the path to the zip file again: ")
    isValid, message = validate_zip_structure(zip_path)

print("problem upload successfully!")