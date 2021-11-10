const game_constants = {
  MAX_NUM_PLAYERS: 20,
  MAX_LENGTH: 50,
};

const validValues = (lengthKm, numPlayers) => {
  if (lengthKm <= 0 || lengthKm > game_constants.MAX_LENGTH) {
    return false;
  }
  if (numPlayers <= 0 || numPlayers > game_constants.MAX_NUM_PLAYERS) {
    return false;
  }
  return true;
};

export { game_constants };
export default validValues;
