import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import { format } from 'date-fns'
import Searchbar from '@/components/HomePageComponents/Searchbar'
import axios from 'axios'

function SearchProblemsPage({ results }) {
	const [viewingProblem, setViewingProblem] = useState(null)
	// State for Selected Problems
	const [selectedProblems, setSelectedProblems] = useState([]) // Array of problem IDs
	const [searchProblemQuery, setSearchProblemQuery] = useState('') // Search query for problems
	const [fetchedProblems, setFetchedProblems] = useState([]) // Array of fetched problems

	useEffect(() => {
		setFetchedProblems(results)
	}, [results])

	const handleProblemClick = (problem) => {
		setViewingProblem(problem)
	}

	// Function to handle checkbox change
	const handleCheckboxChange = (problemId) => {
		if (selectedProblems.includes(problemId)) {
			setSelectedProblems(selectedProblems.filter((id) => id !== problemId))
		} else {
			setSelectedProblems([...selectedProblems, problemId])
		}
	}

	// Function to handle download
	const handleDownload = () => {
		// Implement the download logic here
		console.log('Downloading selected problems:', selectedProblems)
		if (selectedProblems.length > 0) {
			let downloadUrl = `${
				process.env.BACKEND_API_URL
			}/api/download?problem_ids=${selectedProblems.join()}`
			window.location.href = downloadUrl
		} else {
			alert('Please select at least one problem to download.')
		}
	}

	const handleSearchProblems = async (e) => {
		e.preventDefault()
		// push to the search problems page
		const encodedQuery = encodeURIComponent(searchProblemQuery)
		window.location.href = `/searchProblems/${encodedQuery}`
	}
	return (
		<>
			<Navbar />
			<div className="h-screen bg-phDarkgrey px-48 pt-24">
				<div className="no-scrollbar absolute bottom-0 left-0 right-0 top-0 mx-48 mt-24 h-auto overflow-scroll">
					<div className="mb-2 flex items-center justify-between">
						<Searchbar
							handleSearchProblems={handleSearchProblems}
							searchProblemQuery={searchProblemQuery}
							setSearchProblemQuery={setSearchProblemQuery}
						/>
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
					<div className=" mt-2 min-h-full border-4 border-phDarkergrey bg-phGreen">
						{/* A table with the rows "problem", "Uploaded by" and "Uploaded on" */}
						{viewingProblem ? (
							<div className="ml-auto mr-auto mt-4 w-11/12 text-white">
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
									{fetchedProblems.map((problem) => (
										<tr
											key={problem.problem_id}
											className="h-9 bg-phDarkgrey align-bottom hover:bg-phDarkergrey"
										>
											<td className="pl-48 text-left">
												<input
													type="checkbox"
													checked={selectedProblems.includes(
														problem.problem_id,
													)}
													onChange={() =>
														handleCheckboxChange(problem.problem_id)
													}
												/>
											</td>
											<td className="text-left" style={{ maxWidth: '400px' }}>
												<div className="truncate">
													<a
														onClick={() =>
															handleProblemClick({
																id: problem.problem_id,
																Problem_Name: problem.problem_name,
																Uploaded_By: problem.uploaded_by,
																Date_Uploaded_On: problem.date_added,
																Problem_Latex: problem.problem_data,
															})
														}
														href="#"
													>
														{problem.problem_name}
													</a>
												</div>
											</td>
											<td>{problem.date_added}</td>
											<td>{problem.uploaded_by}</td>
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

export async function getServerSideProps({ params }) {
	// Join the search terms into a single query string
	const query = params.terms.join(',')
	console.log('Query:', query)
	const encodedQuery = encodeURIComponent(query)
	console.log(query)
	// get problems
	try {
		const response = await axios.get(
			`${process.env.BACKEND_SERVERSIDE_API_URL}/api/searchproblems?query=${encodedQuery}`,
		)
		const results = response.data.map((problem) => ({
			...problem,
			date_added: format(new Date(problem.date_added), 'dd/MM/yyyy'),
		}))
		return {
			props: {
				results,
			},
		}
	} catch (error) {
		console.error('Error searching problems:', error)
		return {
			props: {
				results: [],
			},
		}
	}
}

export default SearchProblemsPage
