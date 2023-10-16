function ProblemFormatInfo() {
	return (
		<section className="flex justify-center rounded-lg bg-phDarkgrey p-4">
			<div>
				<p className="mb-2 text-center font-bold text-phLinen">
					Here is the correct Problem Tools Format:
				</p>
				<pre className="text-phLinen">
					{`ZIP Root:    # This is the file you upload (e.g. myproblems.zip)
|
|-- ZIP Problem A (example)
|-- ZIP Problem B (example)
|-- ZIP Problem C (example)
|-- ZIP Problem format
|-- problem.yaml   # Must exist at the root.
|
|-- data/          # Must exist.
|   |
|   |-- sample/           # Must exist.
|   |   |-- .in &.ans  # Paired files with the same base name.
|   |
|   |-- secret/           # Must exist.
|       |-- .in &.ans  # Paired files with the same base name.
|
|-- problem.pdf       # Either this,
| OR
|-- problem_statement/    # Or this folder must exist.
|   |-- problem.en.tex    # Must exist if the folder exists.
|
|-- solutions/ OR submissions/     # At least one must exist.
|   |
|   |-- accepted/        # Must exist.
|   |   |-- .cpp,.java, .py,.cc, .kt,.cs  # At least one file with these extensions.
|   |
|   |-- wrong_answer/    # Optional folder.
|   |   |-- .cpp,.java, .py,.cc, .kt,.cs  # If the folder exists, at least one file with these extensions.
|   |
|   |-- time_limit_exceeded/  # Optional folder.
|       |-- .cpp,.java, .py,.cc, .kt,.cs  # If the folder exists, at least one file with these extensions.
|
|-- output_validators/  # Optional folder.
|-- .cpp &.h     # If the folder exists, exactly one file with each extension.`}
				</pre>
			</div>
		</section>
	)
}

export default ProblemFormatInfo
