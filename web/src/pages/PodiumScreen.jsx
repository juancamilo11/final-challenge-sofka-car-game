import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../game/gameContext";
import fake_game from "../data/fake_data";

const PodiumScreen = ({ history }) => {
  const [winners, setWinners] = useState({
    firstPlace: {},
    secondPlace: {},
    thirdPlace: {},
  });

  //const { game } = useContext(GameContext);
  // if (!game.finished) {
  //   history.goBack();
  // }

  const getWinners = () =>
    fake_game.playerList
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
      <h1 className="display-2 text-center mb-3">...And the winners are</h1>
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
                    `/assets/img-podium/silver-medal-64.png`
                  }
                  alt="podium-position"
                  className="img-podium-card animate__animated animate__fadeInLeft"
                />
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/img-podium/silver-medal-64.png`
                  }
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
                  `/assets/img-podium/gold-medal-64.png`
                }
                alt="podium-position"
                className="img-podium-card animate__animated animate__fadeInLeft"
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  `/assets/img-podium/gold-medal-64.png`
                }
                alt="podium-position"
                className="img-photo-card animate__animated animate__fadeInLeft"
              />
            </div>
          </div>

          <div className="col-sm card tplace-container">
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
                  `/assets/img-podium/bronze-medal-64.png`
                }
                alt="podium-position"
                className="img-podium-card animate__animated animate__fadeInLeft"
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  `/assets/img-podium/bronze-medal-64.png`
                }
                alt="podium-position"
                className="img-photo-card animate__animated animate__fadeInLeft"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodiumScreen;
