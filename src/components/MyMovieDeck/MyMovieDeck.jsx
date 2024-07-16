import { useState } from "react";
import "./MyMovieDeck.css";
import Button from "../button";
import MovieCard from "./MovieCard";

const API_URL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US";

function MyMovieDeck() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setMovies(data.results);
    console.log(data.results)
  };
  return (
    <div className="movieDeck">
      <h1>Movie Deck</h1>
      <Button buttonText="Fetch Movies" handleClick={fetchMovies} />
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MyMovieDeck;
