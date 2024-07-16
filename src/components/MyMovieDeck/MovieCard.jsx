import "./MovieCard.css";

function MovieCard( props ) {
  const { poster_path, title, vote_count, vote_average } = props.movie;
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      <div className="movie-info">
        <h2>{title}</h2>
        <div className="card-footer">
          <div>
            <p>Votes: {vote_count}</p>
            <p>Rating: {vote_average}</p>
          </div>
          <div className="heart-img">
            <img src="./images/heart.png" alt="heart-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
