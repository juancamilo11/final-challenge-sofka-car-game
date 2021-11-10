import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../../game/gameContext";
import { useForm } from "../hooks/useForm";
import photos_data from "../../data/PHOTOS_DATA";
import car_data from "../../data/CAR_DATA";
import { validateInputPlayerForm } from "../../data/constants";
import useCounter from "../hooks/useCounter";
import { addPlayerToGameAction } from "../../actions/gameActions";

const PlayerInputForm = () => {
  const { game, dispatch } = useContext(GameContext);
  const [counter, increment, decrement, reset] = useCounter(1);
  const [formValues, setFormValues] = useState({
    username: "",
    playerName: "",
    lane: counter,
    pic: {},
    car: {},
  });

  const { username, playerName } = formValues;

  const [successMessage, setSuccessMessage] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    const result = validateInputPlayerForm(formValues);
    if (result === true) {
      const newPlayer = {
        juegoId: game.gameId,
        cedula: username,
        nombre: playerName,
      };

      addPlayerToGameAction(newPlayer).then((result) => {
        // result.status === 200 && dispatch({action:})
        console.log(result);
      });

      setSuccessMessage("The player has been successfuly added");
      increment();
      setFormValues({ username: "", pic: {}, car: {} });
      setTimeout(() => {
        setSuccessMessage(false);
      }, 1500);
      setError(false);
    } else {
      setError("Username, pic and photo are required");
    }
  };

  //   useEffect(() => {
  //     if (toDoForEdit) {
  //       setFormValues(toDoForEdit);
  //     } else {
  //       setFormValues({ title: "", content: "" });
  //     }
  //   }, [toDoForEdit]);

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSelectInputChange = (pic, picName) => {
    setFormValues({ ...formValues, [picName]: pic });
  };

  return (
    <>
      <div className="row">
        <div className="col-6 ml-5">
          <h2 className="text-center my-2">New player form</h2>
          <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between">
              <h4 className="m-3 display-5">
                lane # <span className="display-5">{counter}</span>
              </h4>
              <h4 className="m-3 display-5">
                {game.numPlayers - counter + 1} Players remaining
              </h4>
            </div>

            <input
              type="text"
              name="username"
              className="form-control m-3"
              placeholder="Username [3 - 20] Characters"
              value={username}
              onChange={handleInputChange}
            />

            <input
              type="text"
              name="playerName"
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
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <span className="mr-3">Select your pic</span>
              </button>
              <ul className="dropdown-menu">
                {photos_data.map((pic) => (
                  <li
                    key={pic.id}
                    onClick={() => handleSelectInputChange(pic, "pic")}
                  >
                    <a href="#">
                      <img src={pic.url} width="100px" />
                      <span className="ml-5 text-center">{pic.name}</span>
                      <span className=""></span>
                    </a>
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
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <span className="mr-3">Select your car</span>
              </button>
              <ul className="dropdown-menu">
                {car_data.map((carPhoto) => (
                  <li key={carPhoto.id}>
                    <a
                      href="#"
                      onClick={() => handleSelectInputChange(carPhoto, "car")}
                    >
                      <table className="table">
                        <tr>
                          <th scope="row" className="select-row">
                            <img src={carPhoto.url} width="100px" />
                          </th>
                          <td className="select-row">
                            <span className="ml-5 text-center" width="100px">
                              {carPhoto.name}
                            </span>
                          </td>
                          <td className="select-row">
                            <span className="ml-5 text-center" width="100px">
                              {carPhoto.description}
                            </span>
                          </td>
                        </tr>
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

            <input
              type="submit"
              className="btn btn-primary form-control m-3"
              value="Input new player"
            />
          </form>

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
                <th scope="col">Lane</th>
                <th scope="col"> Pic + Username</th>
                <th scope="col"> photoCar + Name</th>
              </tr>
            </thead>
            <tbody>
              {game.playerList.map((player) => (
                <tr key={player.id}>
                  <td scope="row">{player.lane}</td>
                  <td>
                    <div className="d-flex justify-content-around">
                      <img src={player.pic} alt={player.pic.name} />
                      <p>{player.username}</p>
                    </div>
                  </td>
                  <td>Otto</td>
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
