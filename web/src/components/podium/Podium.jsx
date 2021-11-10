import React from "react";

const Podium = ({ id, ocurredOn, firstPlace, secondPlace, thirdPlace }) => {
  return (
    <>
      <div className="card mb-4 container">
        <div className="card-body">
          <h3>{id}</h3>
          <p className="card-text">{ocurredOn}</p>
          <hr />
          <div className="podium-positions">
            <div className="podium-position">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/img-podium/silver-medal-64.png"
                }
                className="podium-image"
                alt=""
              />
              <br />
              <p className="card-text text-center">{secondPlace.name}</p>
            </div>

            <div className="podium-position">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/img-podium/gold-medal-64.png"
                }
                className="podium-image"
                alt=""
              />
              <br />
              <p className="card-text text-center">{firstPlace.name}</p>
            </div>

            <div className="podium-position">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/img-podium/bronze-medal-64.png"
                }
                className="podium-image"
                alt=""
              />
              <br />
              <p className="card-text text-center">{thirdPlace.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Podium;
