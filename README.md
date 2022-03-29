# My Movies React Application

## Brief Intro

This is a small React based applications that allows you to search movies, visualize details about them and create a list of favorites.

## Instructions

1. Register and get an API key in [IMDb-API](https://imdb-api.com/).

2. Replace the API key used in the file "constants.js" located in the "src/constants" folder.

3. Run `npm install` to install the project dependencies.

4. Run `npm start` to start the project.

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

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

## IMDb-API

The IMDb-API is a web service for receiving movie, serial and cast information. APIs results is a JSON and includes items such as movie specifications, images, posters, trailers, ratings, Wikipedia page content and more. [More Info](https://imdb-api.com/)

## Technical Decisions

Redux Thunk allows us to avoid directly causing side effects in our actions, action creators, or components. Potentially messy code can be isolated in a thunk, leaving the rest of the code uncluttered. Middleware can later invoke the thunk to actually execute that function. It was used in conjunction with Redux Persist to persist the data in our application, in this case, for our favorite movies.

Redux Router allows us to build a single-page web application with navigation without the page refreshing as the user navigates. It uses component structure to call components, which display the appropriate information

Axios was used to to make requests to a certain endpoint, in this case, the IMDb API in order to search for movies based on a keyword or fetch more details about them.
