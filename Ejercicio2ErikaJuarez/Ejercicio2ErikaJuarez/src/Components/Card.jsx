import React from "react";

const Card = ({ nombre, edad, profesion, ciudad, imagen }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imagen} className="card-img-top" alt="foto" />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">
          Edad: {edad} <br />
          Profesión: {profesion} <br />
          Ciudad: {ciudad}
        </p>
      </div>
    </div>
  );
};

export default Card;