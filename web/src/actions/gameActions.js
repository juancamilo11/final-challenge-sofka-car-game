const URL_BASE = "http://localhost:8080";

export const createGameAction = async () => {
  try {
    const res = await fetch(`${URL_BASE}/createGame`);
    const status = await res.status;
    const statusText = await res.statusText;

    const values = { status, statusText };

    return values;
  } catch (err) {
    console.log(err);
  }

  //Al final se hace el dispatch del estado en base al resultado de la petición
};
