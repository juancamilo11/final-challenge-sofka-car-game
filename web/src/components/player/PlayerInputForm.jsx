import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../../game/gameContext";
import photos_data from "../../data/PHOTOS_DATA";
import car_data from "../../data/CAR_DATA";
import { validateInputPlayerForm } from "../../data/constants";
import useCounter from "../hooks/useCounter";
// import { addPlayerToGameAction } from "../../actions/gameActions";
import types from "../../type/types";
import { initialState } from "../../CarGameApp";
import { useHistory } from "react-router";
import {
  addPlayerToGameAction,
  startGameAction,
} from "../../actions/gameActions";
import swal from "sweetalert";
import uniqueString from "unique-string";

const PlayerInputForm = () => {
  const { game, dispatch } = useContext(GameContext);
  const [counter, increment] = useCounter(1);
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    username: "",
    playerName: "",
    lane: counter,
    pic: {},
    car: {},
  });

  useEffect(() => {
    if (game.numPlayers - counter + 1 <= 0 && game.playerList.length === 0) {
      history.replace("/");
    }
  }, []);

  const { username, playerName } = formValues;

  const [successMessage, setSuccessMessage] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    const result = validateInputPlayerForm(game, formValues);
    if (result === true) {
      const newPlayer = {
        gameId: game.gameId,
        username,
        name: playerName,
        carName: formValues.car.name,
      };

      addPlayerToGameAction(newPlayer).then((result) => {
        dispatch({
          type: types.addPlayerToGame,
          payload: {
            game,
            data: {
              ...formValues,
              lane: counter, //Counter -> Lane
              id: uniqueString(),
              distance: 0,
              position: 0,
            },
            metadata: {
              newPicId: formValues.pic.id,
              newCarId: formValues.car.id,
            },
          },
        });
      });
      setSuccessMessage("The player has been successfuly added");
      increment();
      setFormValues({ username: "", playerName: "", pic: {}, car: {} });
      setTimeout(() => {
        setSuccessMessage(false);
        setError(false);
      }, 1500);
      setError(false);
    } else {
      setError("All inputs are required and must to be allowed values.");
    }
  };

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSelectInputChange = (pic, picName) => {
    setFormValues({ ...formValues, [picName]: pic });
  };

  const handleStartRace = () => {
    // startGameAction(game).then((values) => {
    //   if (values.status) {
    //     dispatch({ type: types.startGame, payload: game });
    //     history.replace("/game");
    //   } else {
    //     swal("Error" + values.statusText);
    //   }
    // });
    dispatch({ type: types.startGame, payload: game });
    history.replace("/game");
  };

  return (
    <>
      <div className="row">
        <div className="col-6 ml-5">
          <h2 className="text-center mt-2 mb-5">New player form</h2>
          <form onSubmit={handleSubmit}>
            {game.numPlayers - counter + 1 !== 0 && (
              <div className="d-flex justify-content-between">
                <h4 className="m-3 display-5">
                  lane # <span className="display-5">{counter}</span>
                </h4>
                <h4 className="m-3 display-5">
                  {game.numPlayers - counter + 1} Players remaining
                </h4>
              </div>
            )}

            <input
              type="text"
              name="username"
              disabled={game.numPlayers - counter + 1 <= 0}
              className="form-control m-3"
              placeholder="Username [3 - 20] Characters"
              value={username}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="playerName"
              disabled={game.numPlayers - counter + 1 <= 0}
              className="form-control m-3"
              placeholder="Name [3 - 50] Characters"
              value={playerName}
              onChange={handleInputChange}
            />
            <div className="dropdown m-3">
              <button
                className="btn btn-default dropdown-toggle"
                type="button"
                id="dropdownMenu1"
                disabled={game.numPlayers - counter + 1 <= 0}
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <span className="mr-3">Select your pic</span>
              </button>
              <ul className="dropdown-menu">
                {photos_data
                  .filter((pic) => !game.selectedPicsId.includes(pic.id))
                  .map((pic) => (
                    <li
                      key={pic.id}
                      onClick={() => handleSelectInputChange(pic, "pic")}
                    >
                      <div className="m-3">
                        <img src={pic.url} width="100px" alt={pic.name} />
                        <span className="ml-5 text-center">{pic.name}</span>
                        <span className=""></span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>

            {formValues.pic.name && (
              <div className="alert alert-info form-control m-3 py-3 pb-5">
                <p className="text-center">
                  Your pick is: {formValues.pic.name}
                </p>
              </div>
            )}

            <div className="dropdown m-3">
              <button
                className="btn btn-default dropdown-toggle"
                type="button"
                disabled={game.numPlayers - counter + 1 <= 0}
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <span className="mr-3">Select your car</span>
              </button>
              <ul className="dropdown-menu">
                {car_data
                  .filter(
                    (carPhoto) => !game.selectedCarsId.includes(carPhoto.id)
                  )
                  .map((carPhoto) => (
                    <li key={carPhoto.id} title={carPhoto.description}>
                      <a
                        href="#hola"
                        className="m-3 input-select"
                        onClick={() => handleSelectInputChange(carPhoto, "car")}
                      >
                        <table className="table">
                          <tbody>
                            <tr>
                              <th scope="row" className="select-row">
                                <img
                                  src={carPhoto.url}
                                  width="100px"
                                  alt={carPhoto.description}
                                />
                              </th>
                              <td className="select-row">
                                <span
                                  className="ml-5 text-center"
                                  width="100px"
                                >
                                  {carPhoto.name}
                                </span>
                              </td>
                              <td className="select-row">
                                <span
                                  className="ml-5 text-center"
                                  width="100px"
                                >
                                  {carPhoto.description}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            {formValues.car.name && (
              <div className="alert alert-info form-control m-3 py-3 pb-5">
                <p className="text-center">
                  Your car is: {formValues.car.name}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={game.numPlayers - counter + 1 <= 0}
              className="btn btn-primary form-control m-3"
            >
              Input new player{" "}
              <i className="fas fa-sign-in-alt button-icon"></i>
            </button>
          </form>

          {game.numPlayers - counter + 1 <= 0 && (
            <button
              type="button"
              className="btn btn-info m-3 py-3 btn-start"
              onClick={handleStartRace}
            >
              Start the race!
            </button>
          )}

          {error && (
            <div className="alert alert-danger form-control m-3 py-3 pb-5">
              <p className="text-center">{error}</p>
            </div>
          )}

          {successMessage && (
            <div className="alert alert-success form-control m-3 py-3 pb-5">
              <p className="text-center">{successMessage}</p>
            </div>
          )}
        </div>

        <div className="col-5 ml-4">
          <h2 className="text-center mt-2 mb-3">Player list</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col text-center">Lane</th>
                <th scope="col text-center" style={{ textAlign: "center" }}>
                  Player
                </th>
                <th scope="col text-center" style={{ textAlign: "center" }}>
                  Car
                </th>
              </tr>
            </thead>
            <tbody>
              {game.playerList.map((player) => (
                <tr key={player.username}>
                  <th scope="row">{player.lane}</th>
                  <td>
                    <div
                      className="d-flex justify-content-start"
                      style={{ width: "20" }}
                    >
                      <img
                        src={player.pic.url}
                        alt={player.pic.name}
                        width="40"
                      />
                      <h4 className="ml-3">{player.username}</h4>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex justify-content-start">
                      <img
                        src={player.car.url}
                        alt={player.car.name}
                        width="40"
                      />
                      <h4 className="ml-3">{player.car.name}</h4>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PlayerInputForm;
