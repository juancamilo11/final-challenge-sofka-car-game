import React from "react";
import PlayerInputForm from "../components/player/PlayerInputForm";

const SetupGameScreen = () => {
  return (
    <div>
      <div className="container">
        <h1 className="text-center display-4 my-3 animate__animated animate__fadeIn">
          Game Setup
        </h1>
        <hr />
      </div>
      <PlayerInputForm />
    </div>
  );
};

export default SetupGameScreen;
