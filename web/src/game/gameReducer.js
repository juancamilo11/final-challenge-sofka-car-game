import types from "../type/types";
import { getNewRandomDistance } from "../actions/demoPlaying";

export const gameReducer = (state = {}, action) => {
  switch (action.type) {
    case types.resumeGame:
      return {
        ...action.payload,
        playing: true,
      };
    case types.stopGame:
      return {
        ...action.payload,
        playing: false,
      };
    case types.createGame:
      return {
        ...action.payload.game,
        gameId: action.payload.data.gameId,
        lengthKm: action.payload.data.lengthKm,
        numPlayers: action.payload.data.numPlayers,
      };
    case types.addPlayerToGame:
      const { playerList } = action.payload.game;
      return {
        ...action.payload.game,
        playerList: [...playerList, action.payload.data],
      };
    case types.startGame:
      return {
        ...action.payload,
        finished: false,
      };
    case types.finishGame:
      return {
        ...action.payload,
        finished: true,
      };
    case types.moveCars:
      return {
        ...action.payload,
        playerList: action.payload.playerList.map((player) =>
          player.distance < action.payload.lengthKm * 1000
            ? {
                ...player,
                distance: (player.distance += getNewRandomDistance()),
                distance:
                  player.distance > action.payload.lengthKm * 1000
                    ? action.payload.lengthKm * 1000
                    : player.distance,
              }
            : player
        ),
      };
    default:
      return state;
  }
};
