import React from 'react';

const SearchBar = (props) => {
    const { searchQuery, setSearchQuery, handleSearch }=props;
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search GitHub users..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
