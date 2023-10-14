import React from 'react'

const Searchbar = () => {
	return (
		<div className="flex items-center p-2">
			<input
				type="text"
				id="search"
				className="flex-grow rounded-lg px-4 py-2 text-gray-800 focus:outline-none"
				placeholder="Search for problems"
			/>
			<button
				id="search-button"
				className="ml-2 rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600"
			>
				Search
			</button>
		</div>
	)
}

export default Searchbar
