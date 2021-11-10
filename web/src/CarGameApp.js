import { useContext, useReducer } from "react";
import { GameContext } from "./game/gameContext";
import { gameReducer } from "./game/gameReducer";
import AppRouter from "./router/AppRouter";

// {
//   id: 1,
//   name: "Camilo",
//   phoneNumber: "31223456",
//   email: "juan@gmail.com",
//   address: "crra 15 #8-21",
// }

const playerList = [
  {
    id: 1,
    name: "Camilo",
    phoneNumber: "31223456",
    email: "juan@gmail.com",
    address: "crra 15 #8-21",
  },
  {
    id: 2,
    name: "Carlos",
    phoneNumber: "3122321212456",
    email: "carlos@gmail.com",
    address: "crra 20 #82-28",
  },
  {
    id: 3,
    name: "Ana",
    phoneNumber: "212123243",
    email: "ana@gmail.com",
    address: "crra 222 #822-21",
  },
  {
    id: 4,
    name: "Ana",
    phoneNumber: "212123243",
    email: "ana@gmail.com",
    address: "crra 222 #822-21",
  },
  {
    id: 5,
    name: "Ana",
    phoneNumber: "212123243",
    email: "ana@gmail.com",
    address: "crra 222 #822-21",
  },
  {
    id: 6,
    name: "Ana",
    phoneNumber: "212123243",
    email: "ana@gmail.com",
    address: "crra 222 #822-21",
  },
  {
    id: 7,
    name: "Camilo",
    phoneNumber: "31223456",
    email: "juan@gmail.com",
    address: "crra 15 #8-21",
  },
];

const initialState = {
  gameId: null,
  lengthKm: -1,
  numPlayers: -1,
  playing: false,
  playerList: [],
  numRound: -1,
  finished: false,
};

const CarGameApp = () => {
  const [game, dispatch] = useReducer(gameReducer, initialState);

  return (
    <div className="App">
      <GameContext.Provider value={{ game, dispatch }}>
        <AppRouter />
      </GameContext.Provider>
    </div>
  );
};

export default CarGameApp;
