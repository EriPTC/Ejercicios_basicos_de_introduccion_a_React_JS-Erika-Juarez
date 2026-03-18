import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from "./Components/Card.jsx";
import foto from "./img/foto.jpeg";




function App() {
  return (
    <>
      <Card
        nombre={"Erika Juárez"}
        edad={17}
        profesion={"Estudiante de Desarrollo de Software en el Instituto Tecnino Ricaldone"}
        ciudad={"San Salvador"}
        imagen={foto}
      />
    </>
  );
}

export default App;