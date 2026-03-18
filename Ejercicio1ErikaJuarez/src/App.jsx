import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
///-------------///-------------///-------------///-------------///-------------///-------------///-------------///-------------///
import Boton from "./Components/Boton.jsx";
import Acordeon from "./Components/Acordeon.jsx";
import Alerta from "./Components/Alerta.jsx";
import Bagde from "./Components/Badge.jsx";
import Botones from "./Components/Botones.jsx";
import Card from "./Components/Card.jsx";
import Cerrar from "./Components/Cerrar.jsx";
import Collapse from "./Components/Collapse.jsx";
import Abajo from "./Components/Abajo.jsx";
import Listado from "./Components/Listado.jsx";
import Navbar from "./Components/Navbar.jsx";
import Select from "./Components/Select.jsx";
///-------------///-------------///-------------///-------------///-------------///-------------///-------------///-------------///

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Boton titulo={"Click Aqui"} accion={() => alert("Hola")} />

      <Acordeon
        titulo1={"Click Aqui"}
        parrafo1={
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam aliquet bibendum gravida, curabitur odio quis iaculis magnis placerat lectus arcu nisl scelerisque morbi, natoque augue per habitant facilisis blandit duis fermentum ante accumsan. Nibh tortor ullamcorper litora velit, facilisi molestie."
        }
        titulo2={"Click Aqui"}
        parrafo2={
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam aliquet bibendum gravida, curabitur odio quis iaculis magnis placerat lectus arcu nisl scelerisque morbi, natoque augue per habitant facilisis blandit duis fermentum ante accumsan. Nibh tortor ullamcorper litora velit, facilisi molestie"
        }
        titulo3={"Click Aqui"}
        parrafo3={
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam aliquet bibendum gravida, curabitur odio quis iaculis magnis placerat lectus arcu nisl scelerisque morbi, natoque augue per habitant facilisis blandit duis fermentum ante accumsan. Nibh tortor ullamcorper litora velit, facilisi molestie"
        }
      />

      <Alerta texto={"hola, que tal ?"} />

      <Bagde texto1={"Promo 2026"} texto2={"Software"} />

      <Botones
        titulo1={"Hermano Mayor"}
        titulo2={"Hermano Mediano"}
        titulo3={"Hermano Menor"}
      />

      <Card
        titulo={"Lorem Ipsum"}
        subtitulo={"Generador"}
        parrafo1={
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam aliquet bibendum gravida, curabitur odio quis iaculis magnis placerat lectus arcu nisl scelerisque morbi, natoque augue per habitant facilisis blandit duis fermentum ante accumsan. Nibh tortor ullamcorper litora velit, facilisi molestie"
        }
        link={"Lorem Ipsum"}
      />

      <Cerrar titulo={"Cerrar"} />

      <Collapse
        titulo1={"Click aqui"}
        parrafo1={
          "Lorem ipsum dolor sit amet consectetur adipiscing elit nullam aliquet bibendum gravida, curabitur odio quis iaculis magnis placerat lectus arcu nisl scelerisque morbi, natoque augue per habitant facilisis blandit duis fermentum ante accumsan. Nibh tortor ullamcorper litora velit, facilisi molestie"
        }
      />

      <Abajo
        titulo1={"Click Aqui"}
        texto1={"Abajo"}
        texto2={"Mas Abajo"}
        texto3={"Aun Mas Abajo"}
      />

      <Listado
        titulo1={"Hermano Mayor/29"}
        titulo2={"Hermano Mediano/19"}
        titulo3={"Hermano Menor/9"}
      />

      <Navbar
        titulo1={"Empresa"}
        titulo2={"Inicio"}
        titulo3={"Productos"}
        titulo4={"Historia"}
        titulo5={"Contactanos"}
      />

      <Select
        titulo={"Haz click aqui"}
        opcion1={"Opcion uno"}
        opcion2={"Opcion dos"}
        opcion3={"Opcion tres"}
      />
    </>
  );
}

export default App;
