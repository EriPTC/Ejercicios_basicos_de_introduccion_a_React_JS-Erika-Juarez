import React from "react";
import '../App.css'
const Boton = ({titulo, accion}) => {
    return (
       <button type="button" className="btn btn-outline-primary" onClick={accion}>{titulo}</button>
       
    )
}
export default Boton;