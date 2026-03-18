import React from "react";
import '../App.css'
const Bagde = ({ texto1, texto2 }) => {
    return (
        <>
            <h1>{texto1} <span className="badge text-bg-secondary">{texto2}</span></h1>
            <h2>{texto1} <span className="badge text-bg-secondary">{texto2}</span></h2>
            <h3>{texto1} <span className="badge text-bg-secondary">{texto2}</span></h3>
            <h4>{texto1} <span className="badge text-bg-secondary">{texto2}</span></h4>
            <h5>{texto1} <span className="badge text-bg-secondary">{texto2}</span></h5>
            <h6>{texto1} <span className="badge text-bg-secondary">{texto2}</span></h6>
        </>
    )
}
export default Bagde;