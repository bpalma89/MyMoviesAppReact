import React from "react";
import MovieDetailRow from "./MovieDetailRow";
import "./MovieDetailContainer.css";

const MovieDetailContainer = (props) => {
  return (
    <>
      <div>
        <h1>{props.movieDetailData.title}</h1>
      </div>
      <div className="row">
        <div className="column">
          <img src={props.movieDetailData.image} className="movie-img" alt="" />
        </div>
        <div className="column">
          {props.isFavorite ? (
            <button onClick={props.removeFavoritesHandler}>
              Remove From Favorites
            </button>
          ) : (
            <button onClick={props.addFavoritesHandler}>
              Add To Favorites
            </button>
          )}
          <table>
            <tbody>
              <MovieDetailRow label="Year" value={props.movieDetailData.year} />
              <MovieDetailRow
                label="Companies"
                value={props.movieDetailData.companies}
              />
              <MovieDetailRow
                label="Tagline"
                value={props.movieDetailData.tagline}
              />
              <MovieDetailRow
                label="Genres"
                value={props.movieDetailData.genres}
              />
              <MovieDetailRow
                label="Languages"
                value={props.movieDetailData.languages}
              />
              <MovieDetailRow label="Plot" value={props.movieDetailData.plot} />
              <MovieDetailRow
                label="Writers"
                value={props.movieDetailData.writers}
              />
              <MovieDetailRow
                label="Directors"
                value={props.movieDetailData.directors}
              />
              <MovieDetailRow
                label="Stars"
                value={props.movieDetailData.stars}
              />
              <MovieDetailRow
                label="Runtime"
                value={props.movieDetailData.runtimeStr}
              />
              <MovieDetailRow
                label="Content Rating"
                value={props.movieDetailData.contentRating}
              />
              <MovieDetailRow
                label="iMDB Rating"
                value={props.movieDetailData.imDbRating}
              />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MovieDetailContainer;
