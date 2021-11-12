import React, { useContext, useEffect, useRef, useState } from "react";
import { Footer } from "../components/ui/Footer";
import { Navbar } from "../components/ui/Navbar";
import { GameContext } from "../game/gameContext";
import types from "../type/types";
//import fake_game from "../data/fake_data";

const GameScreen = ({ history }) => {
  const { game, dispatch } = useContext(GameContext);
  useEffect(() => {
    if (game.numPlayers <= 0 && game.playerList.length === 0) {
      history.replace("/");
    }
    dispatch({ type: types.verifyDistances, payload: game });
  }, [game.playList]);

  useEffect(() => {
    dispatch({ type: types.verifyDistances, payload: game });
  }, []);

  const getComputedDistance = (player) => {
    return (player.distance * 1725) / (1000 * game.lengthKm);
  };
  //recorrer y verificar los que ya seleccionaron OJO CON EL ANCHO DE LA VENTANA DE JUEGO
  // document.getElementById("yourDiv").clientWidth;

  return (
    <div className="game-container">
      <Navbar />
      <div>
        <div className="row">
          <div
            className="col-7 game-frame"
            style={{ height: `${game.playerList.length * 65}px` }}
            // style={{ height: `${fake_game.playerList.length * 65}px` }}
          >
            <h1 className="text-center section-title display-3">
              Game section
            </h1>
            <table style={{ width: "100%" }}>
              <thead>
                <tr className="distances">
                  <th className="d-flex justify-content-around">
                    {new Array(10).fill(10).map((value, index) => (
                      <div>{parseInt(game.lengthKm) * 100 * index}</div>
                      // <div>{parseInt(fake_game.lengthKm) * 100 * index}</div> // con fake data

                      // <div>{(parseInt(game.lengthKm)*1000/10) * index}</div> //simplificado
                    ))}
                  </th>
                </tr>
              </thead>
              <tbody>
                {game.playerList.map((player) => (
                  /* {fake_game.playerList.map(player) => ( // con fake data */
                  <tr key={player.id}>
                    <div className="lane-frame">
                      <td className="lane-info pr-1">
                        <small>
                          <b className="mr-2">{player.username}</b>
                        </small>
                        <img
                          src={player?.pic.url}
                          alt={player?.pic.name}
                          className="img-pic-frame"
                        />
                      </td>
                      {/* Si algo hacerle un overflox en x */}
                      <td>
                        <div className="img-car-frame">
                          <img
                            src={player.car.url}
                            alt={player.car.name}
                            width="50px"
                            style={{
                              marginLeft: `${getComputedDistance(player)}%`,
                            }}
                          />
                        </div>
                      </td>
                    </div>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="leaderboards">
            <h3 className="display-4 text-center my-3">LeaderBoards</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col text-center">Lane</th>
                  <th scope="col text-center">Rank</th>
                  <th scope="col text-center">
                    <span style={{ marginLeft: "10px" }}>Player</span>
                  </th>
                  <th scope="col text-center">
                    <span style={{ marginLeft: "-20px" }}>Distance(m)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {game.playerList.map((player) => (
                  // {fake_game.playerList.map((player ) => (     // con fake data
                  <tr key={player.username}>
                    <td>
                      <div
                        className="d-flex justify-content-start"
                        style={{ width: "20" }}
                      >
                        <h4 className="ml-3">{player.lane}</h4>
                      </div>
                    </td>

                    <td>
                      <div
                        className="d-flex justify-content-start"
                        style={{ width: "20" }}
                      >
                        <h4 className="ml-3">{player.position}</h4>
                      </div>
                    </td>

                    <td>
                      <div
                        className="d-flex justify-content-start"
                        style={{ width: "20" }}
                      >
                        <h4 className="ml-3">{player.username}</h4>
                      </div>
                    </td>

                    <td>
                      <div
                        className="d-flex justify-content-start"
                        style={{ width: "20" }}
                      >
                        <h4 className="ml-3">{player.distance}</h4>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
};

export default GameScreen;
