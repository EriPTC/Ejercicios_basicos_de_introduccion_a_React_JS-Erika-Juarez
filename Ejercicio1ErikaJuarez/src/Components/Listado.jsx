import React from "react";
import '../App.css'
const Listado = ({ titulo1, titulo2, titulo3 }) => {
    return (
        <>
            <ul class="list-group">
                <li class="list-group-item">{titulo1}</li>
                <li class="list-group-item">{titulo2}</li>
                <li class="list-group-item">{titulo3}</li>
            </ul>
        </>
    )
}
export default Listado;