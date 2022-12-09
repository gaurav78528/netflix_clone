import React from "react";
import "./movieCard.css";
const MovieCard = ({ img }) => {
  return (
    <img
      className="movie-card"
      src={`https://image.tmdb.org/t/p/w500${img}`}
      alt="cover"
    />
  );
};

export default MovieCard;
