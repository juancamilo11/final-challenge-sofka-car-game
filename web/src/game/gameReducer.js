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

    default:
      return state;
  }
};
