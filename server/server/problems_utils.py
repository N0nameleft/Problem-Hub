def create_domjudge_ini(problem, allow_submit=1, allow_judge=1, timelimit=2, special_run=1, special_compare=2, points=10, color="#FF5733"):
    ini_content = f"name = {problem.problem_name}\n"
    ini_content += f"allow_submit = {allow_submit}\n"
    ini_content += f"allow_judge = {allow_judge}\n"
    ini_content += f"timelimit = {timelimit}\n"
    ini_content += f"special_run = {special_run}\n"
    ini_content += f"special_compare = {special_compare}\n"
    ini_content += f"points = {points}\n"
    ini_content += f"color = {color}\n"

    return ini_content

def save_domjudge_ini_to_file(problem, ini_content):
    # Determine the file path where you want to save the INI file
    file_path = f"path/to/your/directory/{problem.problem_name}.ini"  # Adjust the path and filename as needed

    # Write the INI content to the file
    with open(file_path, 'w') as ini_file:
        ini_file.write(ini_content)

# Example usage:
#problem = Problem.objects.get(pk=1)  # Replace 1 with the actual problem's primary key or use another method to retrieve a problem object
#ini_content = create_domjudge_ini(problem, allow_submit=1, allow_judge=1, timelimit=2, special_run=1, special_compare=2, points=10, color="#FF5733")
#save_domjudge_ini_to_file(problem, ini_content)


