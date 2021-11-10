import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../components/hooks/useForm";
import validValues from "../data/constants";
import { GameContext } from "../game/gameContext";
import swal from "sweetalert";
import { createGameAction } from "../actions/gameActions";

const WelcomeScreen = () => {
  const [step, setStep] = useState(0);

  const { game, dispatch } = useContext(GameContext);
  // lengthKm:-1, numPlayers:-1,
  const [values, handleInputChange, reset] = useForm({
    lengthKm: "",
    numPlayers: "",
  });

  const { lengthKm, numPlayers } = values;

  const handleGoAhead = () => {
    setStep((step) => step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validValues(lengthKm, numPlayers)) {
      createGameAction().then((values) => {
        console.log(`Status: ${values.status}`);
        console.log(`Status text: ${values.statusText}`);
      });
      swal("Nice job! Let's go ahead!");
    } else {
    }
    reset();
  };

  return (
    <div className="container welcome-container">
      <div className="col text-center">
        <img
          className="mt-4"
          src={process.env.PUBLIC_URL + "/assets/img-home.png"}
          alt="img"
        />
      </div>
      <h4 className="display-4 text-center my-4">Welcome to</h4>
      <h2 className="display-2 text-center">Random Car Race App</h2>
      <hr />

      {step === 0 && (
        <div className="col text-center mt-5">
          <h3>Are you ready?</h3>
          <button className="btn btn-primary my-3" onClick={handleGoAhead}>
            Setup new game!
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="col text-center mt-5">
          <h3 className="display-5">
            Please fill the field for the race configuration
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                name="numPlayers"
                className="form-control"
                placeholder="Number of players"
                value={numPlayers}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lengthKm"
                className="form-control mt-3"
                placeholder="Length for the lanes (Km)"
                value={lengthKm}
                onChange={handleInputChange}
              />
            </div>
            <input type="submit" className="btn btn-primary" value="Send" />
          </form>
        </div>
      )}
    </div>
  );
};

export default WelcomeScreen;
{
  /* <Link className="btn btn-primary my-3" to="/setup-game">
            Setup new game!
          </Link> */
}
