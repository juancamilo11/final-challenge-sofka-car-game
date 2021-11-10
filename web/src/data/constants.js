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

const validateInputPlayerForm = (formValues) => {
  const { username, pic, car } = formValues;
  if (username.trim().length < 3 || username.trim().length > 20) {
    return false;
  }
  if (!pic?.name || !car?.name) {
    return false;
  }
  return true;
};

export { validateInputPlayerForm };
export default game_constants;
export { validValues };
