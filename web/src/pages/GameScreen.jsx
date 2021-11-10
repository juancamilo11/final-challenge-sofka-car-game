import React from "react";
import { Footer } from "../components/ui/Footer";
import { Navbar } from "../components/ui/Navbar";
import car_data from "../data/CAR_DATA";

const GameScreen = () => {
  const cardata = car_data;

  return (
    <>
      <Navbar />
      <ul className="game-container">
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
      <Footer />
    </>
  );
};

export default GameScreen;
