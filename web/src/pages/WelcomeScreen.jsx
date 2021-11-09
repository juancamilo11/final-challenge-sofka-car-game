import React from "react";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <div className="container welcome-container">
      <div class="col text-center">
        <img
          className="mt-4"
          src={process.env.PUBLIC_URL + "/assets/img-home.png"}
          alt="img"
        />
      </div>
      <h4 className="display-4 text-center my-4">Welcome to</h4>
      <h2 className="display-2 text-center">Random Car Race App</h2>
      <hr />

      <div class="col text-center">
        <Link className="btn btn-primary my-3" to="/setup-game">
          Setup new game!
        </Link>
      </div>
    </div>
  );
};

export default WelcomeScreen;
