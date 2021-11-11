import types from "../type/types";

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
        lengthKm: action.payload.data.gameId,
        numPlayers: action.payload.data.numPlayers,
      };
    case types.addPlayerToGame:
      const { playerList } = action.payload.game;
      return {
        ...action.payload.game,
        playerList: [...playerList, action.payload.data],
      };
    case types.recoverGame:
      return { ...action.payload };
    default:
      return state;
  }
};
