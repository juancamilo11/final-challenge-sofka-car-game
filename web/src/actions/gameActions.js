const URL_BASE = "http://localhost:8080/api";

export const createGameAction = async (newGame) => {
  try {
    const res = await fetch(`http://localhost:8080/api/crearJuego`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGame),
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
