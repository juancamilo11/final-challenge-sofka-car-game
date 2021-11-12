import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../game/gameContext";
import { Footer } from "../components/ui/Footer";
import NavbarSecundary from "../components/ui/NavbarSecundary";
import getAllPodiums from "../data/podiumList";

const PodiumScreen = ({ history }) => {
  const { game } = useContext(GameContext);

  const [winners, setWinners] = useState({
    firstPlace: {},
    secondPlace: {},
    thirdPlace: {},
  });

  useEffect(() => {
    if (game.numPlayers <= 0 && game.playerList.length === 0) {
      history.replace("/");
    }
  }, []);

  const getWinners = () =>
    getAllPodiums()
      .filter((player) => player.position <= 3 && player.position > 0)
      .sort((position1, position2) => position1 - position2)
      .reverse();

  useEffect(() => {
    const [firstPlace, secondPlace, thirdPlace] = getWinners();

    setWinners({
      firstPlace,
      secondPlace,
      thirdPlace,
    });
  }, []);

  return (
    <div>
      <NavbarSecundary />
      <h1 className="display-2 text-center podiums-title">
        ...And the winners are
      </h1>
      <div className="container podium-container">
        <div className="row">
          <div className="col-sm card splace-container">
            <div className="">
              <h2 className="display-4">Second Place</h2>
              <hr />
              <h4>
                <spam className="small">{winners?.secondPlace.username}</spam> -
                {winners?.secondPlace.playerName}
              </h4>
              <div className="d-block container-images">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/img-podium/silver-medal-128.png`
                  }
                  alt="podium-position"
                  className="img-podium-card animate__animated animate__fadeInLeft"
                />
                <img
                  src={winners?.secondPlace.pic?.url}
                  alt="podium-position"
                  className="img-photo-card animate__animated animate__fadeInLeft"
                />
              </div>
            </div>
          </div>

          <div className="col-sm card fplace-container">
            <h2 className="display-3">First Place</h2>
            <hr />
            <h4>
              <spam className="small">{winners?.firstPlace.username}</spam> -
              {winners?.firstPlace.playerName}
            </h4>
            <div className="d-block container-images">
              <img
                src={
                  process.env.PUBLIC_URL +
                  `/assets/img-podium/gold-medal-128.png`
                }
                alt="podium-position"
                className="img-podium-card animate__animated animate__fadeInLeft"
              />
              <img
                src={winners?.firstPlace.pic?.url}
                alt="podium-position"
                className="img-photo-card animate__animated animate__fadeInLeft"
              />
            </div>
          </div>

          <div className="col-sm card splace-container">
            <div className="">
              <h2 className="display-4">Third Place</h2>
              <hr />
              <h4>
                <spam className="small">{winners?.thirdPlace.username}</spam> -
                {winners?.thirdPlace.playerName}
              </h4>
              <div className="d-block container-images">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/img-podium/bronze-medal-128.png`
                  }
                  alt="podium-position"
                  className="img-podium-card animate__animated animate__fadeInLeft"
                />
                <img
                  src={winners?.thirdPlace.pic?.url}
                  alt="podium-position"
                  className="img-photo-card animate__animated animate__fadeInLeft"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PodiumScreen;
