import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { GameContext } from "../../game/gameContext";

const PlayerCard = ({ id, playerName, username, car, pic }) => {
  const { game } = useContext(GameContext);
  const history = useHistory();

  useEffect(() => {
    if (game.numPlayers <= 0 && game.playerList.length === 0) {
      history.replace("/");
    }
  }, [game.numPlayers]);

  return (
    <div className="card ms-3 animate__animated animate__fadeIn">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={process.env.PUBLIC_URL + `${pic?.url}`}
            className="card-img img-logo"
            alt={playerName}
            style={{ marginTop: "15px" }}
          />
          <img
            src={process.env.PUBLIC_URL + `${car?.url}`}
            className="card-img img-car"
            alt={playerName}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title"> {playerName} </h5>
            <p className="card-text"> {playerName} </p>

            {true && <p className="card-text"> {playerName} </p>}

            <p className="card-text">
              <small className="text-muted">Is driving a {car?.name}</small>
            </p>

            <Link to={`/player/${id}`}>Ver detalles del jugador...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
