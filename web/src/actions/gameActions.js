const URL_BASE = "https://young-cliffs-41883.herokuapp.com";

export const createGameAction = async (newGame) => {
  const { gameId, lengthKm, numPlayers } = newGame;
  const command = {
    id: gameId,
    numPlayers: numPlayers,
    lenghtKm: lengthKm,
  };
  try {
    const res = await fetch(`${URL_BASE}/createGame`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(command),
    });
    const data = await res.text();

    console.log("**********" + data);
    //Al final se hace el dispatch del estado en base al resultado de la petición

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const addPlayerToGameAction = async (newPlayer) => {
  const command = { ...newPlayer };
  try {
    const res = await fetch(`${URL_BASE}/addPlayer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(command),
    });
    const status = await res.status;
    const statusText = await res.statusText;

    const values = { status, statusText };

    console.log(values);
    //Al final se hace el dispatch del estado en base al resultado de la petición

    return values;
  } catch (err) {
    console.log(err);
  }
};

export const resumeOrStopGameAction = async (gameId, state) => {
  try {
    const res = await fetch(`${URL_BASE}/toggleplaygame/${gameId}/${state}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.text();

    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const moveCarsAction = async (gameId) => {
  try {
    const res = await fetch(`${URL_BASE}/movecars/${gameId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    console.log("Respuesta serverrrrr move cars: ");
    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const resetGameAction = async (gameId) => {
  try {
    const res = await fetch(`${URL_BASE}/resetgame/${gameId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};
