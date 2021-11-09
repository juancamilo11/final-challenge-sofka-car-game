import React, { useContext } from "react";
import { GameContext } from "../../game/gameContext";
import { Footer } from "../ui/Footer";
import NavbarSecundary from "../ui/NavbarSecundary";
import PlayerCard from "./PlayerCard";

const PlayerList = () => {
  const { game } = useContext(GameContext);

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
