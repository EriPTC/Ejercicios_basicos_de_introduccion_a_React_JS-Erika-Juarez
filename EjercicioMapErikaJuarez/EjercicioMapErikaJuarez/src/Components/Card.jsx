import React from "react";

const Card = ({ nombre, edad, profesion, ciudad }) => {
  return (
    <div className="card border-info mb-3 m-2" style={{ maxWidth: "18rem" }}>
      
      <div className="card-header">
        {nombre}
      </div>

      <div className="card-body">
        <figure className="mb-0">
          <blockquote className="blockquote">
            <p>Edad: {edad}</p>
            <p>Profesión: {profesion}</p>
          </blockquote>

          <figcaption className="blockquote-footer">
            Ciudad: <cite>{ciudad}</cite>
          </figcaption>
        </figure>
      </div>

    </div>
  );
};

export default Card;