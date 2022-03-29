import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  return (
    <div className="card">
      <img src={props.movie.image} className="card-img" alt={props.movie.title}></img>
      <div className="container">
        <h4>
          <b>{props.movie.title}</b>
        </h4>
        <p>{props.movie.description}</p>
      </div>
      <footer className="card-footer">
        <Link to={`/movie/${props.id}`}>+ More Info</Link>
      </footer>
    </div>
  );
}

export default MovieCard;
