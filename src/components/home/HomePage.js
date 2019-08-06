import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Pluralsight Administration </h1>
    <p> React Redux and React router apps</p>
    <Link to="about" className="btn btn-lg btn-primary">
      Learn more
    </Link>
  </div>
);

export default HomePage;
