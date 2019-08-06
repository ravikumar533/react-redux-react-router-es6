import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <div className="jumbotron">
    <h1>Pluralsight </h1>
    <p> React Redux and React router apps</p>
    <Link to="/" className="btn btn-lg btn-primary">
      home
    </Link>
  </div>
);

export default AboutPage;
