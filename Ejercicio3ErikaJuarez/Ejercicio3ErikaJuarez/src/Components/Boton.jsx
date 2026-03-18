import React from "react";

const Boton = ({ texto }) => {
  return (
    <button className="btn btn-light m-1">
      {texto}
    </button>
  );
};

export default Boton;