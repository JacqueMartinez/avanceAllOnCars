import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Inicio from "./Components/Inicio";
import Logo from "./img/Logo.png";
import arrow from "./img/expandArrow.png";

function App() {
  return (
    <div className="Padresito">
      <nav>
        <ul>
          <li>
            <a href="#" className="logoNav">
              <img src={Logo} width="80%" height="80hv" alt="Logo" />
            </a>
          </li>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="#">Buscar</a>
          </li>
          <li>
            <a href="#">Socios</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Iniciar Sesión</a>
          </li>
        </ul>
      </nav>
      <header>
        <div className="headerCont">
          <div className="headerIzq">
            <div className="headerTitulo">
              <h1>Tu servicio mas cercano para tu vehículo</h1>
            </div>
            <div className="headerParrafo">
              <p>
                All On Cars te consigue EL SERVICIO mas cercano que necesites
                mediante una app movil, de donde te encuentres, donde y cuanto
                lo necesites.
                <br />
                <br />
                <br />
                Totalmente Gratis
              </p>
            </div>
            <div className="headerPlayStore"></div>
          </div>
          <div className="headerDerecho">{/* <img src={iphone}></img> */}</div>
          <div className="arrow"></div>
        </div>
      </header>
      <main>
        <div className="Aterdecer">
          <div className="AterdercerContenedor">
            <div className="AterdecerTexto">
              <article>
                <h4>
                  All On Cars es la primera empresa mexicana que cambiará el
                  concepto de los servicios para todo tipo de vehículo terrestre{" "}
                  <br /> (Ligeros, comerciales, turisticos, especiales y
                  agricolas).
                </h4>
              </article>
            </div>
          </div>
        </div>

        <div className="Dos">
          <div className="DosContenedor">
            <div className="Navi">
              <a>Soy usuario</a>
            </div>
            <div className="Navi2">
              <a>Soy servicio</a>
            </div>
          </div>
          <div className="DCont">
            <div className="Dimg"></div>
            <div className="DText">
              <p>
                Tu seguridad y confianza es primero, para brindar un mejor trato
                nuestra app tiene un apartado de calificación de servicio, el
                cual nos ayuda a verificar que se te ofrezca el mejor trato
                posible.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer>
      <div className="FoCont">
        <div className="LogoFo">
          <img src={Logo}></img>
        </div>
        <div className="SerFoIz">
          <p>Nosotros</p>
          <p>Productos</p>
          <p>Contacto</p>
        </div>
        <div className="SerFoDer">
          <p>Facebook</p>
          <p>Youtube</p>
          <p>Instagram</p>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
