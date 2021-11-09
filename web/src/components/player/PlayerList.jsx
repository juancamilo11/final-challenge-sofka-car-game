import React, { useContext } from "react";
import { GameContext } from "../../game/gameContext";
import PlayerCard from "./PlayerCard";

const PlayerList = () => {
  const { game } = useContext(GameContext);

  return (
    <>
      <h2 className="display-4 my-4 text-center">Player list</h2>
      <ul className="card-columns animate__animated animate__fadeIn container">
        {game.playerList.map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </ul>
    </>
  );
};

export default PlayerList;
