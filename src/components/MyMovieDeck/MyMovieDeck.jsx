import { useEffect, useState } from "react";
import "./MyMovieDeck.css";
import Button from "../button";
import MovieCard from "./MovieCard";

const API_URL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US";

function MyMovieDeck() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState('default');
  // const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  // useEffect(() => {
  //   filterMovies();
  // }, [searchTerm]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMovies(data.results);
      // setFilteredMovies(data.results);
    } catch (error) {
      console.error("Failed to fetch movies....", error);
    }
  };

  const filterMovies = 
  // () => {
    // const updatedMovies = 
    movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // setFilteredMovies(updatedMovies);
  // };

  const handleSort=(e)=>{
    setSortOption(e.target.value);
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="movieDeck">
      <h1>Movie Deck</h1>
      {/* <Button buttonText="Fetch Movies" handleClick={fetchMovies} /> */}
      <input
        type="text"
        placeholder="Search Movies..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <select onChange={handleSort}>
        <option value="default">Sort by</option>
        <option value="ratingAscending">Rating Ascending</option>
        <option value="ratingDescending">Rating Descending</option>
        <option value="votesAscending">Votes Ascending</option>
        <option value="votesDescending">Votes Descending</option>
      </select>
      <div className="movie-list">
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MyMovieDeck;
