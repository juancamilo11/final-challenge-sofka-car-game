import React from "react";
import car_data from "../data/CAR_DATA";

const GameScreen = () => {
  const cardata = car_data;

  return (
    <ul>
      {cardata.map((carInfo) => (
        <li key={carInfo.id}>
          <h2>{carInfo.name}</h2>
          <hr />
          <p>Available at level: {carInfo.availableAtLevel}</p>
          <p>Description: {carInfo.description}</p>
          <img src={carInfo.url} alt="car" width="50" />
          <p>{carInfo.url}</p>
        </li>
      ))}
    </ul>
  );
};

export default GameScreen;
