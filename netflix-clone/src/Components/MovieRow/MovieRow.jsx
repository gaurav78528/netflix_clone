import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./movieRow.css";
const MovieRow = ({ title, moviesData = [] }) => {
  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div>
        {moviesData.map((item) => (
          <MovieCard key={item.id} img={item.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
