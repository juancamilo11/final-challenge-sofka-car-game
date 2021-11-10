import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../../game/gameContext";
import { useForm } from "../hooks/useForm";
import photos_data from "../../data/PHOTOS_DATA";
import car_data from "../../data/CAR_DATA";
import { validateInputPlayerForm } from "../../data/constants";

const PlayerInputForm = () => {
  const { game, dispatch } = useContext(GameContext);

  const [formValues, setFormValues] = useState({
    username: "",
    pic: {},
    car: {},
  });

  const { username } = formValues;

  const [successMessage, setSuccessMessage] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    const result = validateInputPlayerForm(formValues.username);
    if (result === true) {
      setSuccessMessage("The player has been successfuly added");

      setFormValues({ username: "", pic: {}, car: {} });
      setTimeout(() => {
        setSuccessMessage(false);
      }, 1500);
      setError(false);
    } else {
      setError(
        "Username is required and must have between 3 and 20 characters."
      );
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
    setFormValues({ ...formValues, username: e.target.value });
  };

  const handleSelectInputChange = (pic, picName) => {
    setFormValues({ ...formValues, [picName]: pic });
  };

  return (
    <>
      <div className="row">
        <div class="col-6 ml-5">
          <h2 className="text-center my-2">New player form</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              className="form-control m-3"
              placeholder="Username"
              value={username}
              onChange={handleInputChange}
            />
            <div class="dropdown m-3">
              <button
                class="btn btn-default dropdown-toggle"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <span className="mr-3">Select your pic</span>
              </button>
              <ul class="dropdown-menu">
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

            <div class="dropdown m-3">
              <button
                class="btn btn-default dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <span className="mr-3">Select your car</span>
              </button>
              <ul class="dropdown-menu">
                {car_data.map((carPhoto) => (
                  <li key={carPhoto.id}>
                    <a
                      href="#"
                      onClick={() => handleSelectInputChange(carPhoto, "car")}
                    >
                      <table class="table">
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

            <input
              type="submit"
              className="btn btn-primary form-control m-3"
              value="Input new player"
            />
          </form>

          {error && (
            <div className="alert alert-danger form-control m-3 p-3">
              <p className="text-center">{error}</p>
            </div>
          )}

          {successMessage && (
            <div className="alert alert-success form-control m-3 p-3">
              <p className="text-center">{successMessage}</p>
            </div>
          )}
        </div>

        <div className="col-5 ml-4">
          <h2 className="text-center mt-2 mb-3">New player form</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Lane</th>
                <th scope="col"> Pic + Username</th>
                <th scope="col"> photoCar + Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PlayerInputForm;
