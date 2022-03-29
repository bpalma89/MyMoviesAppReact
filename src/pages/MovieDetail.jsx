import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../redux/reducers/favoritesReducer";
import { getMovieDetailById } from "../redux/actions/moviesActions";
import MovieDetailContainer from "../components/movie_detail/MovieDetailContainer";
import { TailSpin } from "react-loader-spinner";
import {
  getMovieDetail,
  getMoviesDetailServiceStatus,
  checkIfFavorites,
} from "../redux/selectors/selectors";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isFavorite = useSelector(checkIfFavorites(id));

  useEffect(() => {
    dispatch(getMovieDetailById(id));
  }, [id, dispatch]);

  const movieDetailData = useSelector(getMovieDetail);
  const history = useHistory();
  let isMovieDetailServiceLoading = useSelector(getMoviesDetailServiceStatus);

  const addFavoritesHandler = () => {
    const movieFavorite = {
      id: movieDetailData.id,
      image: movieDetailData.image,
      title: movieDetailData.title,
    };
    dispatch(addFavorite(movieFavorite));
    history.push("/favorites");
  };

  const removeFavoritesHandler = () => {
    dispatch(removeFavorite(id));
    history.push("/favorites");
  };

  return (
    <>
      {isMovieDetailServiceLoading ? (
        <TailSpin color="grey" height={80} width={80} />
      ) : (
        <MovieDetailContainer
          movieDetailData={movieDetailData}
          isFavorite={isFavorite}
          addFavoritesHandler={addFavoritesHandler}
          removeFavoritesHandler={removeFavoritesHandler}
        />
      )}
    </>
  );
};

export default MovieDetail;
