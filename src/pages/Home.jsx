import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import MainPicture from "../img/cristmaspackaging.png";

const HomePage = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="presentation">
        <div>
          <h1 className="h1">Let's start!</h1>
          <div className="text">
            The "Secret Santa" project is a fun and popular holiday tradition
            where a group of people anonymously exchange gifts with one another.
            The way it works is that each participant is randomly assigned
            another person in the group to give a gift to, without the recipient
            knowing who their "Secret Santa" is.
          </div>
          <Link to="/rooms">
            <button className="btn">create room</button>
          </Link>
        </div>
        <div>
          <img src={MainPicture} alt="Christmas icon" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
