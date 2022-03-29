import React from "react";
import MovieCard from "./MovieCard";
import './MovieCardList.css';

const MovieCardList = (props) => {
  const movieCards = props.movies.map((item) => (
    <MovieCard key={item.id} id={item.id} movie={item} />
  ));

  return <div className="card-grid">{movieCards}</div>;
}

export default MovieCardList;
