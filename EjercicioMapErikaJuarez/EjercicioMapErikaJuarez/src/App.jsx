import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import "./App.css";
import Card from "./Components/Card.jsx";

function App() {


  const personas = [
    {
      nombre: "Erika Juárez",
      edad: 17,
      profesion: "Estudiante",
      ciudad: "San Salvador"
    },
    {
      nombre: "Carlos Pérez",
      edad: 20,
      profesion: "Programador",
      ciudad: "Santa Ana"
    },
    {
      nombre: "Ana López",
      edad: 19,
      profesion: "Diseñadora",
      ciudad: "Soyapango"
    },
    {
      nombre: "Luis Martínez",
      edad: 22,
      profesion: "Ingeniero",
      ciudad: "La Libertad"
    },
    {
      nombre: "María González",
      edad: 18,
      profesion: "Estudiante",
      ciudad: "San Miguel"
    },
    {
      nombre: "José Ramírez",
      edad: 25,
      profesion: "Contador",
      ciudad: "Santa Tecla"
    },
    {
      nombre: "Andrea Torres",
      edad: 21,
      profesion: "Arquitecta",
      ciudad: "Apopa"
    }
  ];

  return (
    <div className="container mt-5 d-flex flex-wrap">

      {personas.map((persona, index) => (
        <Card
          key={index}
          nombre={persona.nombre}
          edad={persona.edad}
          profesion={persona.profesion}
          ciudad={persona.ciudad}
        />
      ))}

    </div>
  );
}

export default App;