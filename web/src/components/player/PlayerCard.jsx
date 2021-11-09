import React from "react";
import { Link } from "react-router-dom";

const PlayerCard = ({ id, name, phoneNumber, email, address }) => {
  return (
    <div className="card ms-3 animate__animated animate__fadeIn">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={process.env.PUBLIC_URL + `/assets/img-logos/logo${id}.png`}
            className="card-img m-2 img-logo"
            alt={name}
          />
          <img
            src={process.env.PUBLIC_URL + `/assets/img-car/car${id}.png`}
            className="card-img m-2 img-car"
            alt={name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title"> {name} </h5>
            <p className="card-text"> {phoneNumber} </p>

            {true && <p className="card-text"> {email} </p>}

            <p className="card-text">
              <small className="text-muted"> {address} </small>
            </p>

            <Link to={`./player/${id}`}>Ver detalles del jugador...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
