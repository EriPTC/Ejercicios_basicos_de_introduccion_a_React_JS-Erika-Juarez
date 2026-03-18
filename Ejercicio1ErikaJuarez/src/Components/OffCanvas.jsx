import React from "react";

const Offcanvas = ({ titulo, contenido }) => {
  return (
    <div>

      <button
        className="btn btn-primary mb-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#miOffcanvas"
      >
        Abrir menú
      </button>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="miOffcanvas"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">{titulo}</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <p>{contenido}</p>
        </div>
      </div>

    </div>
  );
};

export default Offcanvas;