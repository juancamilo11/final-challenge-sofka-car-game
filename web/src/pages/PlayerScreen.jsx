import React, { useContext, useEffect, useMemo } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import NavbarSecundary from "../components/ui/NavbarSecundary";
import { GameContext } from "../game/gameContext";

const PlayerScreen = ({ history }) => {
  const { id } = useParams();
  const { game } = useContext(GameContext);

  useEffect(() => {
    if (game.numPlayers <= 0 && game.playerList.length === 0) {
      history.replace("/");
    }
  }, []);

  const getPlayerById = () => game.playerList.find((player) => player.id == id);

  const player = useMemo(() => getPlayerById(id), [id]);
  console.log(player);

  if (!player) {
    return <Redirect to="/" />;
  }

  const { playerName, car, pic } = player;

  return (
    <>
      <NavbarSecundary />
      <h1 className="display-4 text-center my-3">Player description</h1>
      <div className="row mt-5 ml-5 container">
        <hr />
        <div className="col-4 d-block container-images">
          <img
            src={process.env.PUBLIC_URL + `${pic.url}`}
            alt={playerName}
            className="img-thumbnail img-pic-card animate__animated animate__fadeInLeft"
          />
          <img
            src={process.env.PUBLIC_URL + `${car.url}`}
            alt={playerName}
            className="img-thumbnail img-car-card animate__animated animate__fadeInLeft"
          />
        </div>

        <div className="col-8 animate__animated animate__fadeIn">
          <h2 className="m-4"> {playerName} </h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Username: </b> {playerName}
            </li>
            <li className="list-group-item">
              <b>Player name: </b> {playerName}
            </li>
            <li className="list-group-item">
              <b> Player name: </b> {playerName}
            </li>
          </ul>

          <div className="list-group list-group-flush">
            <h3> Car description </h3>
            <h5> Car name: {car.name} </h5>
            <p>Car description: {car.description}</p>
          </div>

          <br />
          <Link className="btn btn-primary" to="/player-list">
            Go back to list <i class="fas fa-clipboard-list button-icon"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PlayerScreen;
