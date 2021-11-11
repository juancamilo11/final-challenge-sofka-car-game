const URL_BASE = "http://localhost:8080/api";

export const createGameAction = async (newGame) => {
  const { gameId, lengthKm, numPlayers } = newGame;

  const command = {
    type: "sofkau.juego.anadirjugador",
    juegoId: gameId,
    numeroDeCarriles: numPlayers,
    kilometros: lengthKm,
  };
  try {
    const res = await fetch(`${URL_BASE}/crearJuego`, {
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

export const addPlayerToGameAction = async (newPlayer) => {
  const command = { ...newPlayer, type: "sofkau.juego.anadirjugador" };
  try {
    const res = await fetch(`${URL_BASE}/anadirJugador`, {
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

export const startGameAction = async (game) => {
  const command = { type: "sofkau.juego.iniciarjuego", juegoId: game.gameId };
  try {
    const res = await fetch(`${URL_BASE}/iniciarJuego`, {
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
