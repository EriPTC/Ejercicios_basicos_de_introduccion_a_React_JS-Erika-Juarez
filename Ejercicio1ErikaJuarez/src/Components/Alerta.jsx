import React from "react";
import '../App.css'
const Alerta = ({texto}) => {
    return (
        <>
            <div className="alert alert-info" role="alert">
                {texto}
            </div>
        </>
    )
}
export default Alerta;