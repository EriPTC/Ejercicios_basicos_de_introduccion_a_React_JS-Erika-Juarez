import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import "./App.css";
import Pantalla from "./Components/Pantalla.jsx";
import Boton from "./Components/Boton.jsx";
import BotonEspecial from "./Components/BotonEspecial.jsx";

function App() {
  return (
    <div className="fondo">
      <div className="calculadora">

        <Pantalla valor={"0"} />

        <div className="fila">
          <Boton texto="7" />
          <Boton texto="8" />
          <Boton texto="9" />
          <Boton texto="/" />
        </div>

        <div className="fila">
          <Boton texto="4" />
          <Boton texto="5" />
          <Boton texto="6" />
          <Boton texto="-" />
        </div>

        <div className="fila">
          <Boton texto="1" />
          <Boton texto="2" />
          <Boton texto="3" />
          <Boton texto="+" />
        </div>

        <div className="fila">
          <BotonEspecial texto="C" color="btn-warning" />
          <Boton texto="0" />
          <Boton texto="%" />
          <BotonEspecial texto="=" color="btn-success" />
        </div>

      </div>
    </div>
  );
}

export default App;