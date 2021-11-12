import types from "../type/types";
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
      const { game, data } = action.payload;
      return {
        ...game,
        finished: true,
        playing: false,
        playerList: game.playerList.map((player) => {
          return {
            ...player,
            position:
              data.find((result) => result.name === player.car.name) || 0,
          };
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
        ...action.payload.game,
        playerList: action.payload.game.playerList.map((player) =>
          player.distance < action.payload.game.lengthKm * 1000 &&
          player.car.name ===
            action.payload.data.find(
              (result) => result.name === player.car.name
            ).name
            ? {
                ...player,
                distance: action.payload.data.find(
                  (result) => result.name === player.car.name
                ).distance,
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
