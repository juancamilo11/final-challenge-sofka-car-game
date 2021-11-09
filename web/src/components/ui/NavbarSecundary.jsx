import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { GameContext } from "../../game/gameContext";

const NavbarSecundary = () => {
  const { game } = useContext(GameContext);

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
          <Link className="btn btn-primary mx-4" to="/player-list">
            Go back to list <i class="fas fa-clipboard-list button-icon"></i>
          </Link>
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
