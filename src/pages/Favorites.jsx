import React from "react";
import { useSelector } from "react-redux";
import "./Favorites.css";
import MovieCardList from "../components/common/MovieCardList";
import { getFavorites } from "../redux/selectors/selectors";

const Favorites = () => {
  const favorites = useSelector(getFavorites);

  return (
    <>
      <h1>Favorites</h1>
      {favorites.length > 0 ? (
        <MovieCardList movies={favorites} />
      ) : (
        <p>Found no favorites.</p>
      )}
    </>
  );
};

export default Favorites;
