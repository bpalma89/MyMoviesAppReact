import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import favoritesReducer from "../reducers/favoritesReducer.js";
import moviesReducer from "../reducers/moviesReducer.js";
import thunkMiddleware from "redux-thunk";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    favorites: favoritesReducer,
    movies: moviesReducer,
  })
);

const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));

const persistor = persistStore(store);

export const myStore = store;

export const myPersistor = persistor;
