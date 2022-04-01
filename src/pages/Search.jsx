import React, { useEffect, useState } from "react";
import "./Search.css";
import MovieCardList from "../components/common/MovieCardList";
import { TailSpin } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { resetMovieSearch } from "../redux/actions/moviesActions";
import { useSelector } from "react-redux";
import {
  getMovies,
  getMoviesServiceStatus,
} from "../redux/selectors/selectors";
import { searchMoviesFromAPI } from "../redux/actions/moviesActions";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const movies = useSelector(getMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetMovieSearch());
  }, [dispatch]);

  const searchHandler = () => {
    dispatch(searchMoviesFromAPI(searchText));
  };

  const changeSearchTextHandler = (event) => {
    setSearchText(event.target.value);
  };

  let isMovieServiceLoading = useSelector(getMoviesServiceStatus);

  return (
    <>
      <h1>Search Movies</h1>
      <div className="search-div">
        <input onChange={changeSearchTextHandler} type="text"></input>
        <button onClick={searchHandler} className="search-btn">
          Search
        </button>
      </div>
      <div className="search-results">
        {isMovieServiceLoading ? (
          <TailSpin color="grey" height={80} width={80} />
        ) : Object.keys(movies).length > 0 ? (
          <MovieCardList movies={movies} />
        ) : (
          <p>Found no movies.</p>
        )}
      </div>
    </>
  );
};

export default Search;
