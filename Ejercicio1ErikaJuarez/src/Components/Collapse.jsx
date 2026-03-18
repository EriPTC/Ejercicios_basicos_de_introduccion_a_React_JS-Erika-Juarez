import React from "react";
import '../App.css'
const Collapse = ({ titulo1, parrafo1 }) => {
  return (
    <>
      <p>
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
          {titulo1}
        </button>
      </p>
      <div className="card-card">
        <div className="collapse collapse-horizontal" id="collapseWidthExample">
          <div className="card card-body" >
            {parrafo1}
          </div>
        </div>
      </div>
    </>
  )
}
export default Collapse;




