import { useReducer } from "react";
import { GameContext } from "./game/gameContext";
import { gameReducer } from "./game/gameReducer";
import AppRouter from "./router/AppRouter";

const initialState = {
  gameId: null,
  lengthKm: -1,
  numPlayers: -1,
  playing: false,
  playerList: [],
  finished: true,
  selectedCarsId: [],
  selectedPicsId: [],
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

export { initialState };
export default CarGameApp;
