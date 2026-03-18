import React from "react";
import '../App.css'
const Botones = ({ titulo1, titulo2, titulo3 }) => {
    return (
        <>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-danger">{titulo1}</button>
                <button type="button" className="btn btn-warning">{titulo2}</button>
                <button type="button" className="btn btn-success">{titulo3}</button>
            </div>
        </>
    )
}
export default Botones;