import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center p-2">
      <input
        type="text"
        id="search"
        className="text-gray-800 rounded-lg py-2 px-4 focus:outline-none flex-grow"
        placeholder="Search for problems"
      />
      <button
        id="search-button"
        className="bg-green-500 hover:bg-green-600 text-white rounded-lg py-2 px-4 ml-2"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
