import React from "react";
import MovieImage from "../images/movies.png";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to my movies app!</p>
      <img src={MovieImage} className="home-img" alt="Home"/>
    </div>
  );
}

export default Home;
