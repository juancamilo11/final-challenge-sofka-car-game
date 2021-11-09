import { useContext, useReducer } from "react";
import { GameContext } from "./game/gameContext";
import { gameReducer } from "./game/gameReducer";
import AppRouter from "./router/AppRouter";

const initialState = {
  playing: true,
  playerList: [],
  numRound: 0,
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
