import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { GameContext } from "../../game/gameContext";
import types from "../../type/types";

export const Navbar = () => {
  const { game, dispatch } = useContext(GameContext);
  const history = useHistory();
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

  const handleGoToPodium = () => {
    history.push("/podium");
  };

  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark"
      style={{
        position: "fixed",
        top: "0px",
        width: "100%",
        zIndex: "10000",
        marginBottom: "100px",
        borderRadius: "0px",
      }}
    >
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
          {game.finished && (
            <div>
              <spam className="mr-4" style={{ color: "white" }}>
                The race has Finished!
              </spam>
              <button className="btn btn-info mr-3" onClick={handleGoToPodium}>
                <span>
                  Go to Podium<i class="fas fa-trophy button-icon"></i>
                </span>
              </button>
            </div>
          )}
          {game.playing && (
            <button
              className="btn btn-primary mr-3"
              onClick={() => handleGoAhead()}
            >
              <span>
                Go! <i class="fas fa-car-side button-icon"></i>
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
