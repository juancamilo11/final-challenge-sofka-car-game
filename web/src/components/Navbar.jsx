import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
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
          <button className="btn btn-primary">
            {true ? (
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
