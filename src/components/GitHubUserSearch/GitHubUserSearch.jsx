import React, { useState } from "react";
import "./GitHubUserSearch.css";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import UserList from "./UserList";

function GitHubUserSearch() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/search/users?per_page=42&page=${currentPage}&q=${searchQuery}`
      );
      const data = await response.json();
      setUsers(data.items);
      setTotalPages(Math.ceil(data.total_count / 42));
    } catch (error) {
      console.error("Error fetching data from GitHub API", error);
    }
  };

  const handlePageChange = async (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);
    try {
      const response = await fetch(
        `https://api.github.com/search/users?per_page=42&page=${page}&q=${searchQuery}`
      );
      const data = await response.json();
      setUsers(data.items);
    } catch (error) {
      console.error("Error fetching data from GitHub API", error);
    }
  };

  return (
    <div className="gitHubUserSearch">
      <h1>GitHub User Search</h1>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <UserList users={users} />
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default GitHubUserSearch;
