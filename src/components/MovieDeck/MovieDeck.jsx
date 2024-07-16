import React, { useState, useEffect } from 'react';
import './MovieDeck.css';
import MovieCard from './MovieCard';

const API_KEY = 'f531333d637d0c44abc85b3e74db2186';
const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`;

function MovieDeck() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setMovies(data.results);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortOption === 'rating') {
      return b.vote_average - a.vote_average;
    } else if (sortOption === 'votes') {
      return b.vote_count - a.vote_count;
    }
    return 0;
  });

  return (
    <div className="movieDeck">
      <h1>Movie Deck</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <select onChange={handleSort}>
        <option value="default">Sort by</option>
        <option value="rating">Rating</option>
        <option value="votes">Votes</option>
      </select>
      <div className="movie-list">
        {sortedMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieDeck;
