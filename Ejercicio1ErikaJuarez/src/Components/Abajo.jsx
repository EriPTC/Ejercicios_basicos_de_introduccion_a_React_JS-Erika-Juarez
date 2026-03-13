import React from "react";
import '../App.css'
const Acordion = ({ titulo1,texto1, texto2, texto3 }) => {
    return (
   <>
   <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {titulo1}
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">{texto1}</a></li>
    <li><a class="dropdown-item" href="#">{texto2}</a></li>
    <li><a class="dropdown-item" href="#">{texto3}</a></li>
  </ul>
</div>
   </>
    )
}
export default Acordion;