import types from "../type/types";
import { getNewRandomDistance } from "../actions/demoPlaying";
import { initialState } from "../CarGameApp";

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
    case types.resetGame:
      return {
        ...action.payload,
        finished: false,
        playing: false,
        playerList: action.payload.playerList.map((player) => {
          return { ...player, distance: 0 };
        }),
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
      const { newPicId, newCarId } = action.payload.metadata;
      const { selectedCarsId, selectedPicsId } = action.payload.game;

      return {
        ...action.payload.game,
        playerList: [...playerList, action.payload.data],
        selectedCarsId: [...selectedCarsId, newCarId],
        selectedPicsId: [...selectedPicsId, newPicId],
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
    case types.sortPlayer:
      return {
        ...action.payload,
        playerList: action.payload.playerList.sort(
          (player1, player2) => player2.distance - player1.distance
        ),
      };
    case types.verifyDistances:
      return {
        ...action.payload,
        playerList: action.payload.playerList.map((player) => {
          return player.distance > action.payload.lengthKm * 1000
            ? { ...player, distance: action.payload.lengthKm * 1000 }
            : { ...player };
        }),
      };
    case types.setPositions:
      let playerPosition = 1;
      return {
        ...action.payload,
        playerList: action.payload.playerList
          .sort((player1, player2) => player2.distance - player1.distance)
          .map((player) => {
            return {
              ...player,
              position:
                player.distance >= action.payload.lengthKm &&
                player.position <= 0
                  ? playerPosition++
                  : player.position,
            };
          }),
      };
    case types.resetAppState:
      return initialState;
    default:
      return state;
  }
};
