import React from "react";
import '../App.css'
const Acordion = ({ titulo }) => {
    return (
        <>
            <button type="button" className="btn-close" aria-label="Close">{titulo}</button>
        </>
    )
}
export default Acordion;