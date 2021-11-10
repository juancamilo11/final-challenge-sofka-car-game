import React, { useContext, useMemo } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import NavbarSecundary from "../components/ui/NavbarSecundary";
import { GameContext } from "../game/gameContext";

const PlayerScreen = ({ history }) => {
  const { id: playerId } = useParams();
  const { game } = useContext(GameContext);

  const getPlayerById = () =>
    game.playerList.find((player) => player.id === parseInt(playerId));

  const player = useMemo(() => getPlayerById(playerId), [playerId]);
  console.log(player);

  if (!player) {
    return <Redirect to="/" />;
  }

  const handleReturn = (e) => {
    history.goBack();
  };

  const { name, phoneNumber, email, address } = player;

  return (
    <>
      <NavbarSecundary />
      <h1 className="display-4 text-center my-3">Player description</h1>
      <div className="row mt-5 ml-5 container">
        <hr />
        <div className="col-4">
          <img
            src={
              process.env.PUBLIC_URL + `/assets/img-logos/logo${playerId}.png`
            }
            alt={name}
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>

        <div className="col-8 animate__animated animate__fadeIn">
          <h3> {name} </h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b> Alter ego: </b> {phoneNumber}
            </li>
            <li className="list-group-item">
              <b> Publisher: </b> {email}
            </li>
            <li className="list-group-item">
              <b> First appearance: </b> {address}
            </li>
          </ul>
          <h5> Characters </h5>
          <p> {email} </p>
          <Link className="btn btn-primary" to="/player-list">
            Go back to list <i class="fas fa-clipboard-list button-icon"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PlayerScreen;
