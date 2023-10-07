import Navbar from '@/components/Navbar'
import { useState } from 'react'
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

function HomePage({ problems }) {
	const [viewingProblem, setViewingProblem] = useState(null)

	// State for Selected Problems
	const [selectedProblems, setSelectedProblems] = useState([]) // Array of problem IDs

	const handleProblemClick = (problem) => {
		setViewingProblem(problem)
	}

	// Function to handle checkbox change
	const handleCheckboxChange = (problemId) => {
		// check if problemId is in selectedProblems array
		if (selectedProblems.includes(problemId)) {
			// remove problemId from selectedProblems array
			setSelectedProblems(selectedProblems.filter((id) => id !== problemId))
		} else {
			// add problemId to selectedProblems array
			setSelectedProblems([...selectedProblems, problemId])
		}

		// implement logic with selectedProblems array here
		// for now just console.log it
		console.log(selectedProblems)
	}

	// Function to handle download
	const handleDownload = () => {
		// Implement the download logic here
		console.log('Downloading selected problems:', selectedProblems)
	}

	return (
		<>
			<Navbar />
			<div className="h-screen bg-phDarkgrey px-48 pt-24">
				<div className="no-scrollbar absolute bottom-0 left-0 right-0 top-0 mx-48 mt-24 h-auto overflow-scroll">
					<div className="mb-2 flex items-center justify-between">
						<h2 className="text-white">Find contest problems</h2>
						{/* Download button */}
						{selectedProblems.length > 0 && (
							<button
								onClick={handleDownload}
								className="rounded-lg bg-phDarkergrey px-4 py-2 text-white shadow-md hover:bg-gray-600"
							>
								Download Selected Problems
							</button>
						)}
					</div>
					<div className=" mt-2 h-full overflow-hidden border-4 border-phDarkergrey bg-phGreen">
						{/* A table with the rows "problem", "Uploaded by" and "Uploaded on" */}
						{viewingProblem ? (
							<div className="ml-auto mr-auto mt-4 h-96 w-11/12 text-white">
								<button
									type="button"
									onClick={() => setViewingProblem(null)}
									className="mb-2 mr-2 rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
								>
									Back
								</button>
								<div className="prose lg:prose-xl">
									<Latex>{viewingProblem.Problem_Latex}</Latex>
								</div>
							</div>
						) : (
							<table className=" ml-auto mr-auto mt-2 w-11/12 border-separate border-spacing-y-2 px-4 text-center font-manjari text-lg text-white ">
								<thead>
									<tr className="h-8 bg-phDarkgrey align-bottom">
										<th colSpan={2} className="pl-48 text-left">
											Problem
										</th>
										<th>Uploaded on</th>
										<th>Uploaded by</th>
									</tr>
								</thead>
								<tbody>
									{problems.map((problem) => (
										<tr
											key={problem.id}
											className="h-9 bg-phDarkgrey align-bottom hover:bg-phDarkergrey"
										>
											<td className="pl-48 text-left">
												<input
													type="checkbox"
													onChange={() => handleCheckboxChange(problem.id)}
												/>
											</td>
											<td className="text-left" style={{ maxWidth: '400px' }}>
												<div className="truncate">
													<a
														onClick={() =>
															handleProblemClick({
																id: problem.id,
																Problem_Name: problem.Problem_Name,
																Uploaded_By: problem.Uploaded_By,
																Date_Uploaded_On: problem.Date_Uploaded_On,
																Problem_Latex: problem.Problem_Data,
															})
														}
														href="#"
													>
														{problem.Problem_Name}
													</a>
												</div>
											</td>
											<td>{problem.Date_Uploaded_On}</td>
											<td>{problem.Uploaded_By}</td>
										</tr>
									))}
								</tbody>
							</table>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export async function getServerSideProps() {
	// Fetch the JSON data from the server
	const res = await fetch('http://localhost:3000/api/mockproblems') // Replace with the actual URL of your API route
	const problems = await res.json()
	return {
		props: {
			problems,
		},
	}
}
export default HomePage
