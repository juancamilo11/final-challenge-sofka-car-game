import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { GameContext } from "../../game/gameContext";

const NavbarSecundary = () => {
  const { game } = useContext(GameContext);

  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark"
      style={{ borderRadius: "0px" }}
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
        <ul className="navbar-nav mr-3">
          {game.finished && (
            <button className="btn btn-warning" to="/">
              Play new game <i class="fas fa-redo-alt button-icon"></i>
            </button>
          )}
        </ul>
      </div>

      <div>
        <ul className="navbar-nav ml-auto">
          {!game.finished && (
            <Link className="btn btn-primary" to="/game">
              Go back to game <i class="fas fa-car button-icon"></i>
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarSecundary;
