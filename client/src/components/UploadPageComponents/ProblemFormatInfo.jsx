function ProblemFormatInfo() {
	return (
		<div className="mt-4">
			<p>Here is the correct Problem Tools Format:</p>
			{/* Add your detailed format explanation here */}
			<p className="italic">
				<ul>
					<li>ZIP Root:</li>
					<ul>
						<li>
							problem.yaml <i>(Must exist at the root)</i>
						</li>

						<li>
							data/ <i>(Must exist)</i>
						</li>
						<ul>
							<li>
								sample/ <i>(Must exist)</i>
							</li>
							<ul>
								<li>
									.in &amp;.ans <i>(Paired files with same base name)</i>
								</li>
							</ul>
							<li>
								secret/ <i>(Must exist)</i>
							</li>
							<ul>
								<li>
									.in &amp;.ans <i>(Paired files with same base name)</i>
								</li>
							</ul>
						</ul>

						<li>
							problem.pdf <i>(Either this)</i>
						</li>
						<li>OR</li>
						<li>
							problem_statement/ <i>(Or this folder must exist)</i>
						</li>
						<ul>
							<li>
								problem.en.tex <i>(Must exist if the folder exists)</i>
							</li>
						</ul>

						<li>
							solutions/ OR submissions/ <i>(At least one must exist)</i>
						</li>
						<ul>
							<li>
								accepted/ <i>(Must exist)</i>
							</li>
							<ul>
								<li>
									.cpp,.java, .py,.cc, .kt,.cs{' '}
									<i>(At least one file with these extensions)</i>
								</li>
							</ul>
							<li>
								wrong_answer/ <i>(Optional folder)</i>
							</li>
							<ul>
								<li>
									.cpp,.java, .py,.cc, .kt,.cs{' '}
									<i>
										(If folder exists, at least one file with these extensions)
									</i>
								</li>
							</ul>
							<li>
								time_limit_exceeded/ <i>(Optional folder)</i>
							</li>
							<ul>
								<li>
									.cpp,.java, .py,.cc, .kt,.cs{' '}
									<i>
										(If folder exists, at least one file with these extensions)
									</i>
								</li>
							</ul>
						</ul>

						<li>
							output_validators/ <i>(Optional folder)</i>
						</li>
						<ul>
							<li>
								.cpp &amp;.h{' '}
								<i>(If folder exists, exactly one file with each extension)</i>
							</li>
						</ul>
					</ul>
				</ul>
			</p>
		</div>
	)
}

export default ProblemFormatInfo
