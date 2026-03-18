import React from "react";

const BotonEspecial = ({ texto, color }) => {
  return (
    <button className={`btn m-1 ${color}`}>
      {texto}
    </button>
  );
};

export default BotonEspecial;