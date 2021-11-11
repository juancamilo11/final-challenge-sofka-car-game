const game_constants = {
  MAX_NUM_PLAYERS: 50,
  MAX_LENGTH: 50,
};

const validValues = (lengthKm, numPlayers) => {
  console.log(parseInt(lengthKm));
  if (
    lengthKm > 0 &&
    lengthKm <= game_constants.MAX_LENGTH &&
    numPlayers >= 3 &&
    numPlayers <= game_constants.MAX_NUM_PLAYERS
  ) {
    return true;
  }
  return false;
};

const validateInputPlayerForm = (game, formValues) => {
  const usernameRegex = new RegExp(
    "^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
  );
  const nameRegex = new RegExp("^[A-Z a-z]{1,}[.]{0,1}[A-Z a-z]{3,50}$");

  const { username, playerName, pic, car } = formValues;
  if (username?.trim().length < 3 || username?.trim().length > 20) {
    return false;
  }

  if (!usernameRegex.test(username)) {
    return false;
  }

  if (!nameRegex.test(playerName)) {
    return false;
  }

  if (game.playerList.find((player) => player.username === username)) {
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
