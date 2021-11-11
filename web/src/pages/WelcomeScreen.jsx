import React, { useContext, useState } from "react";
import { Link, history } from "react-router-dom";
import { useForm } from "../components/hooks/useForm";
import { validValues } from "../data/constants";
import { GameContext } from "../game/gameContext";
import swal from "sweetalert";
import { createGameAction } from "../actions/gameActions";
import nextId from "react-id-generator";
import uniqueString from "unique-string";
import types from "../type/types";

const WelcomeScreen = ({ history }) => {
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
      const juegoId = uniqueString(); //=> 'b4de2a49c8ffa3fbee04446f045483b2'
      const kilometros = parseInt(lengthKm);
      const numeroDeCarriles = parseInt(numPlayers);
      const newGame = {
        ...game,
        gameId: juegoId,
        lengthKm: kilometros,
        numPlayers: numeroDeCarriles,
      };

      // console.log(JSON.stringify(newGame));
      // createGameAction(newGame)
      //   .then((values) => {
      //     if (values.status === 200) {
      //       //Aquí se podría hacer el dispatch
      //       swal("Nice job! Let's go ahead!");
      dispatch({
        type: types.createGame,
        payload: {
          game,
          data: {
            gameId: juegoId,
            lengthKm: kilometros,
            numPlayers: numeroDeCarriles,
          },
        },
      });
      history.replace("/setup-game");
      //   }
      // })
      // .catch((err) => {
      //   swal("Error:" + err);
      // });
    } else {
      swal("Invalid inputs, please try again.");
    }
    reset();
  };

  return (
    <div className="container welcome-container ms-3 animate__animated animate__fadeIn">
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
        <div className="col text-center animate__animated animate__fadeIn">
          <h3 className="display-5">
            Please fill the fields for the race configuration
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
              <input
                type="submit"
                className="btn btn-primary mt-5 form-control"
                value="Send"
              />
            </div>
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
