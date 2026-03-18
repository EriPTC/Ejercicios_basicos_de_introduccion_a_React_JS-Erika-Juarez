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
import Carousel from "./Components/Carusel.jsx";
import foto1 from "./img/Paisaje1.jpg"
import foto2 from "./img/Paisaje2.jpg"
import foto3 from "./img/Paisaje3.jpg"
import Offcanvas from "./Components/OffCanvas.jsx";
import Paginacion from "./Components/Paginacion.jsx";
import Progreso from "./Components/Progreso.jsx";
import ScrollSpy from "./Components/Scrollspy.jsx";
import Spinner from "./Components/Spinner.jsx";
import Toast from "./Components/Toast..jsx";
import Modal from "./Components/Modal.jsx";
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

      <Carousel
        img1={foto1}
        img2={foto2}
        img3={foto3}
      />

      <Offcanvas
        titulo={"Menú lateral"}
        contenido={"Componentes"
        }
      />
      <Paginacion
        anterior={"Previous"}
        pagina1={"1"}
        pagina2={"2"}
        pagina3={"3"}
        siguiente={"Next"}
      />

      <Progreso
        valor1={25}
        valor2={50}
        valor3={75}
        valor4={100}
      />

      <ScrollSpy
        titulo={"Navbar"}
        link1={"Primero"}
        link2={"Segundo"}
        drop1={"Tercero"}
        drop2={"Cuarto"}
        drop3={"Quinto"}
        Contenido1={"Lorem ipsum dolor sit amet consectetur adipiscing elit nullam aliquet bibendum gravida, curabitur odio quis iaculis magnis placerat lectus arcu nisl scelerisque morbi, natoque augue per habitant facilisis blandit duis fermentum ante accumsan. Nibh tortor ullamcorper litora velit, facilisi molestie"}
        Contenido2={"Lorem ipsum dolor sit amet consectetur adipiscing elit nullam aliquet bibendum gravida, curabitur odio quis iaculis magnis placerat lectus arcu nisl scelerisque morbi, natoque augue per habitant facilisis blandit duis fermentum ante accumsan. Nibh tortor ullamcorper litora velit, facilisi molestie"}
        Contenido3={"Lorem ipsum dolor sit amet consectetur adipiscing elit nullam aliquet bibendum gravida, curabitur odio quis iaculis magnis placerat lectus arcu nisl scelerisque morbi, natoque augue per habitant facilisis blandit duis fermentum ante accumsan. Nibh tortor ullamcorper litora velit, facilisi molestie"}
        Contenido4={"Lorem ipsum dolor sit amet consectetur adipiscing elit nullam aliquet bibendum gravida, curabitur odio quis iaculis magnis placerat lectus arcu nisl scelerisque morbi, natoque augue per habitant facilisis blandit duis fermentum ante accumsan. Nibh tortor ullamcorper litora velit, facilisi molestie"}
        Contenido5={"Lorem ipsum dolor sit amet consectetur adipiscing elit nullam aliquet bibendum gravida, curabitur odio quis iaculis magnis placerat lectus arcu nisl scelerisque morbi, natoque augue per habitant facilisis blandit duis fermentum ante accumsan. Nibh tortor ullamcorper litora velit, facilisi molestie"}
      />

      <Spinner
        color1={"primary"}
        color2={"secondary"}
        color3={"success"}
        color4={"danger"}
        color5={"warning"}
        color6={"info"}
        color7={"light"}
        color8={"dark"}
      />

      <Toast
        titulo={"Notificación"}
        tiempo={"Hace 10 min."}
        mensaje={"Holita, que tal ?"}
      />


      <Modal
        titulo={"Holita"}
        contenido={"Somos promo 2026 Desarollo de Software"}
        textoBoton={"Abrir Modal"}
      />




    </>


  );
}

export default App;
