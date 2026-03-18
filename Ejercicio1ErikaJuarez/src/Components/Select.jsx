import React from "react";
import '../App.css'
const Select = ({ titulo, opcion1, opcion2, opcion3 }) => {
    return (
        <>
            <select class="form-select" aria-label="Default select example">
                <option selected>{titulo}</option>
                <option value="1">{opcion1}</option>
                <option value="2">{opcion2}</option>
                <option value="3">{opcion3}</option>
            </select>

        </>
    )
}
export default Select;