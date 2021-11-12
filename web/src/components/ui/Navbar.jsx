import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import swal from "sweetalert";
import {
  resetGameAction,
  resumeOrStopGameAction,
} from "../../actions/gameActions";
import { GameContext } from "../../game/gameContext";
import types from "../../type/types";

export const Navbar = () => {
  const { game, dispatch } = useContext(GameContext);
  const history = useHistory();

  const handleResumeOrStop = () => {
    if (game.playing) {
      resumeOrStopGameAction(game.gameId, false).then((res) =>
        dispatch({
          type: types.stopGame,
          payload: game,
        })
      );
    }

    if (!game.playing) {
      resumeOrStopGameAction(game.gameId, true).then((res) =>
        dispatch({
          type: types.resumeGame,
          payload: game,
        })
      );
    }
  };

  const handleGoToPodium = () => {
    dispatch({
      type: types.stopGame,
      payload: game,
    });
    history.push("/podium");
  };

  const handleNewGame = () => {
    swal({
      title: "Do you really want to start a new game?",
      icon: "warning",
      buttons: ["Cancel", "Confirm"],
    }).then((confirmation) => {
      if (confirmation) {
        dispatch({ type: types.resetGame, payload: game });
        history.replace("/");
      }
    });
  };

  const handleResetGame = () => {
    swal({
      title: "Do you really want to reset the current game?",
      icon: "warning",
      buttons: ["Cancel", "Confirm"],
    }).then((confirmation) => {
      if (confirmation) {
        resetGameAction(game.gameId).then((data) =>
          dispatch({ type: types.resetGame, payload: { game, data } })
        );
      }
    });
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
      <Link className="navbar-brand mr-5" to="/">
        RandomCarRaceApp
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link mx-3"
            exact
            to="/player-list"
            onClick={() => dispatch({ type: types.stopGame, payload: game })}
          >
            List of Players
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/podium-list"
            onClick={() => dispatch({ type: types.stopGame, payload: game })}
          >
            List of Podiums
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
                  Go to Podium<i className="fas fa-trophy button-icon"></i>
                </span>
              </button>
            </div>
          )}
          {!game.finished && (
            <button
              className="btn btn-primary"
              onClick={() => handleResumeOrStop()}
            >
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
          )}
          <button className="btn btn-primary mx-3" onClick={handleResetGame}>
            Reset game
          </button>
          <button className="btn btn-primary" onClick={handleNewGame}>
            New game
          </button>
        </ul>
      </div>
    </nav>
  );
};
