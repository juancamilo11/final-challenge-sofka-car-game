import types from "../type/types";

// const state = {
//     playing:false,
//     playerList: [],
//     numRound:0,
//     finished:false
// }

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
      const { game, data } = action.payload;
      const { gameId, lengthKm, numPlayers } = data;
      const objRetorno = {
        ...game,
        gameId,
        lengthKm,
        numPlayers,
      };
      console.log("obje retorno:");
      console.log(objRetorno);
      return objRetorno;
    default:
      return state;
  }
};
