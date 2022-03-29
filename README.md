# My Movies React Application

## Brief Intro

This is a small React based applications that allows you to search movies and create a list of favorites.
## Instructions

1. Run `npm install` through the terminal to install the project dependencies

2. Run `npm start` to start the project

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Used Libraries

### React Router

React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. [More Info](https://reactrouter.com/)

### Axios

Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). [More Info](https://axios-http.com/docs/intro)

### React Redux

React Redux is the official React binding for Redux. It allows React components to read data from a Redux Store, and dispatch Actions to the Store to update data. Redux helps apps to scale by providing a sensible way to manage state through a unidirectional data flow model. React Redux is conceptually simple. [More Info](https://react-redux.js.org)

### Redux Thunk

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the function's body once the asynchronous operations have been completed. [More Info](https://github.com/reduxjs/redux-thunk)

### Redux Persist

Redux Persist is a popular library which lets you add persistence to the store. The library will automatically save the store each time the state updates. You don't need to write any persistence code in your actions or reducers. [More Info](https://github.com/rt2zz/redux-persist)

### React Loader Spinner

React Loader Spinner provides simple React SVG spinner component which can be implemented for async await operation before data loads to the view. [More Info](https://github.com/mhnpd/react-loader-spinner)

## iMDB API

The IMDb-API is a web service for receiving movie, serial and cast information. APIs results is a JSON and includes items such as movie specifications, images, posters, trailers, ratings, Wikipedia page content and more. [More Info](https://imdb-api.com/)