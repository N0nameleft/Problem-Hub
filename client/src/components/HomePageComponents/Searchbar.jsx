import React from 'react'

const Searchbar = ({
	handleSearchProblems,
	searchProblemQuery,
	setSearchProblemQuery,
}) => {
	return (
		<form onSubmit={handleSearchProblems} className="flex items-center p-2">
			<input
				type="text"
				value={searchProblemQuery}
				onChange={(e) => setSearchProblemQuery(e.target.value)}
				className="flex-grow rounded-lg bg-phDarkergrey px-4 py-2 text-phLinen focus:outline-none"
				placeholder="Search for problems"
			/>
			<button
				type="submit"
				className="ml-2 rounded-lg bg-phGreen px-4 py-2 text-white hover:bg-green-600"
			>
				Search
			</button>
		</form>
	)
}

export default Searchbar
