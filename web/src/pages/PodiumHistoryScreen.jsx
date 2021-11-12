import React from "react";
import Podium from "../components/podium/Podium";
import { Footer } from "../components/ui/Footer";
import NavbarSecundary from "../components/ui/NavbarSecundary";
import getAllPodiums from "../data/podiumList";

const PodiumHistoryScreen = () => {
  const podiumList = getAllPodiums();

  return (
    <div>
      <NavbarSecundary />
      <h1 className="text-center my-4 display-2">Podium List</h1>
      {podiumList.length > 0 ? (
        <>
          {podiumList.map((podium) => {
            return <Podium key={podium.id} {...podium} />;
          })}
        </>
      ) : (
        <h2 className="display-4 text-center mt-5 alert alert-warning">
          No podiums found, Start by playing a new race...
        </h2>
      )}
      <Footer />
    </div>
  );
};

export default PodiumHistoryScreen;
