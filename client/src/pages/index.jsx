import Navbar from '@/components/Navbar'
import { useState } from 'react'
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

function HomePage({ problems }) {
	const [viewingProblem, setViewingProblem] = useState(null)

	const handleProblemClick = (problem) => {
		setViewingProblem(problem)
	}
	return (
		<>
			<Navbar />
			<div className="h-screen bg-phDarkgrey px-48 pt-24">
				<div className="no-scrollbar absolute bottom-0 left-0 right-0 top-0 mx-48 mt-24 h-auto overflow-scroll">
					<h2 className="text-white">Find contest problems</h2>
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
											<td colSpan={2} className="pl-48 text-left">
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
