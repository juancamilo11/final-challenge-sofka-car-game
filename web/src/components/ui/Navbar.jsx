import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { GameContext } from "../../game/gameContext";
import types from "../../type/types";

export const Navbar = () => {
  const { game, dispatch } = useContext(GameContext);

  const handleResume = () => {
    if (game.playing) {
      dispatch({
        type: types.stopGame,
        payload: game,
      });
    }
    if (!game.playing) {
      dispatch({
        type: types.resumeGame,
        payload: game,
      });
    }
  };

  const handleGoAhead = () => {
    dispatch({
      type: types.moveCars,
      payload: game,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand mx-5" to="/">
        RandomCarRaceApp
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link mx-3"
            exact
            to="/player-list"
          >
            List of players
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/podium-list"
          >
            List of podiums
          </NavLink>
        </div>
      </div>

      <div>
        <ul className="navbar-nav ml-auto">
          {game.playing && (
            <button
              className="btn btn-primary mr-3"
              onClick={() => handleGoAhead()}
            >
              <span>
                Go! <i className="fas fa-play button-icon"></i>
              </span>
            </button>
          )}
          <button className="btn btn-primary" onClick={() => handleResume()}>
            {!game.playing ? (
              <span>
                Resume <i className="fas fa-play button-icon"></i>
              </span>
            ) : (
              <span>
                Stop <i className="fas fa-stop button-icon"></i>
              </span>
            )}
          </button>
          <button className="btn btn-primary mx-3">Reset game</button>
          <button className="btn btn-primary">New game</button>
        </ul>
      </div>
    </nav>
  );
};
