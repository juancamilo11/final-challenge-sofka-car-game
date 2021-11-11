import React, { useContext } from "react";
import { Footer } from "../components/ui/Footer";
import { Navbar } from "../components/ui/Navbar";
import { GameContext } from "../game/gameContext";

const game = {
  //USar para mirar estilso y demas y luego quitar para no tener conflictos con el context
  playerList: [
    {
      username: "carlos-ochoa111",
      playerName: "Juan Carlos Ochoa",
      distance: 0,
      position: 0,
      lane: 1,
      pic: {
        id: 3,
        name: "Karina",
        url: "/assets/img-logos/logo3.png",
      },
      car: {
        id: "7824d1539a9942e84fec45f6aaa0bb2a",
        name: "Porsche carrera GT",
        availableAtLevel: 10,
        description: "This is the fastest car ever build in the whole world!",
        url: "/assets/img-car/car10.png",
      },
      id: "93cb351e4d17025efe3091357b625d9f",
    },
    {
      username: "andres.villada-12",
      playerName: "Andres Mauricio Villada",
      distance: 0,
      position: 0,
      pic: {
        id: 7,
        name: "Puppy",
        url: "/assets/img-logos/logo7.png",
      },
      car: {
        id: "64073f9a5da580425abc49f2223cb9d1",
        name: "McLaren F1 GTR",
        availableAtLevel: 7,
        description: "Performance and power, this car is all you need!",
        url: "/assets/img-car/car7.png",
      },
      lane: 2,
      id: "c0085eff8377c63c37fe43c364db272c",
    },
    {
      username: "lau.monsalve.127",
      playerName: "Laura Melissa monsalve",
      distance: 0,
      position: 0,
      pic: {
        id: 4,
        name: "Pop",
        url: "/assets/img-logos/logo4.png",
      },
      car: {
        id: "e25c679a84d2f3453ac1261c311756e8",
        name: "McLaren MP4/4",
        availableAtLevel: 8,
        description: "A beast on the road, you won't be able to handle it!",
        url: "/assets/img-car/car8.png",
      },
      lane: 3,
      id: "b011cd0a238465c54f47c1f7030397f0",
    },
    {
      username: "ana.maria-11124",
      playerName: "Ana Maria Carmona",
      distance: 0,
      position: 0,
      pic: {
        id: 10,
        name: "Christopher",
        url: "/assets/img-logos/logo10.png",
      },
      car: {
        id: "e25c679a84d2f3453ac1261c311756e8",
        name: "McLaren MP4/4",
        availableAtLevel: 8,
        description: "A beast on the road, you won't be able to handle it!",
        url: "/assets/img-car/car8.png",
      },
      lane: 4,
      id: "5cc7e1b8c6ed6676981eae1c72063cf6",
    },
    {
      username: "carolina.bedoya999",
      playerName: "Caro Bedoya Cardona",
      distance: 0,
      position: 0,
      pic: {
        id: 6,
        name: "Helena",
        url: "/assets/img-logos/logo6.png",
      },
      car: {
        id: "4b30b74a2711f3f0e0a81617080526d3",
        name: "Dodge Viper STR-10",
        availableAtLevel: 5,
        description: "Be careful when driving this car, it is pure dynamite!",
        url: "/assets/img-car/car5.png",
      },
      lane: 5,
      id: "4bd7beebf1d2352681a086ec94612ee2",
    },
  ],
};

const GameScreen = () => {
  return (
    <div className="game-container">
      <Navbar />
      <>
        {/* <h1 className="text-center">Game section</h1> */}
        <div className="row">
          <div className="col-6 game-frame">
            {game.playerList.map((player) => {
              <div key={player.id} className="lane-frame"></div>;
            })}
          </div>

          <div className="col-5">
            <h2 className="text-center">Leaderboards</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col text-center">Lane</th>
                  <th scope="col text-center">Position</th>
                  <th scope="col text-center">Player</th>
                  <th scope="col text-center">Distance</th>
                </tr>
              </thead>
              <tbody>
                {game.playerList.map((player) => (
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
                      <div className="d-flex justify-content-start">
                        <h4 className="ml-3">{player.distance}</h4>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
      <Footer />
    </div>
  );
};

export default GameScreen;

// {"gameId":
//   "d580638c8af9a24fe2c42acf9e4d94ef",
//   "lengthKm":"d580638c8af9a24fe2c42acf9e4d94ef","numPlayers":5,"playing":false,"playerList":[{"username":"daniela-vargas1","playerName":"daniela vargas","lane":1,"pic":{"id":3,"name":"Karina","url":"/assets/img-logos/logo3.png"},"car":{"id":"7824d1539a9942e84fec45f6aaa0bb2a","name":"Porsche carrera GT","availableAtLevel":10,"description":"This is the fastest car ever build in the whole world!","url":"/assets/img-car/car10.png"},"id":"93cb351e4d17025efe3091357b625d9f"},{"username":"leonardo-caro-111","playerName":"leonardo caro v","pic":{"id":7,"name":"Puppy","url":"/assets/img-logos/logo7.png"},"car":{"id":"64073f9a5da580425abc49f2223cb9d1","name":"McLaren F1 GTR","availableAtLevel":7,"description":"Performance and power, this car is all you need!","url":"/assets/img-car/car7.png"},"lane":2,"id":"c0085eff8377c63c37fe43c364db272c"},{"username":"andres.monsalve112","playerName":"andres monsalve","pic":{"id":4,"name":"Pop","url":"/assets/img-logos/logo4.png"},"car":{"id":"e25c679a84d2f3453ac1261c311756e8","name":"McLaren MP4/4","availableAtLevel":8,"description":"A beast on the road, you won't be able to handle it!","url":"/assets/img-car/car8.png"},"lane":3,"id":"b011cd0a238465c54f47c1f7030397f0"},{"username":"ana.maria-11124","playerName":"ana maria carmona","pic":{"id":10,"name":"Christopher","url":"/assets/img-logos/logo10.png"},"lane":4,"id":"5cc7e1b8c6ed6676981eae1c72063cf6"},{"username":"carolina.bedoya999","playerName":"caro bedoya cardona","pic":{"id":6,"name":"Helena","url":"/assets/img-logos/logo6.png"},"car":{"id":"4b30b74a2711f3f0e0a81617080526d3","name":"Dodge Viper STR-10","availableAtLevel":5,"description":"Be careful when driving this car, it is pure dynamite!","url":"/assets/img-car/car5.png"},"lane":5,"id":"4bd7beebf1d2352681a086ec94612ee2"}],"numRound":-1,"finished":false}
