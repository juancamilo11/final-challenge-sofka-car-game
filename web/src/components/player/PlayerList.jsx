import React, { useContext, useEffect } from "react";
import { GameContext } from "../../game/gameContext";
import { Footer } from "../ui/Footer";
import NavbarSecundary from "../ui/NavbarSecundary";
import PlayerCard from "./PlayerCard";

const PlayerList = ({ history }) => {
  const { game } = useContext(GameContext);

  useEffect(() => {
    if (game.numPlayers <= 0 && game.playerList.length === 0) {
      history.replace("/");
    }
  }, []);

  return (
    <>
      <NavbarSecundary />
      <h2 className="display-4 my-4 text-center">Player list</h2>
      <ul className="card-columns animate__animated animate__fadeIn container mb-3">
        {game.playerList.map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </ul>
      <Footer />
    </>
  );
};

export default PlayerList;
