import React from "react";
import '../App.css'
const Card = ({ titulo, subtitulo, parrafo1, link }) => {
    return (
        <>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{subtitulo}</h6>
                    <p className="card-text">{parrafo1}</p>
                    <a href="https://getlorem.com/es?count=2&units=2&lang=es" className="card-link">{link}</a>
                </div>
            </div>
        </>
    )
}
export default Card;