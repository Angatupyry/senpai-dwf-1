import React from "react";
import ronalJpg from "/ronal.jpg";

function Header() {
  return (
    <header>
      <nav>
        <img src={ronalJpg} width='40px' />
        <ul>
          <li>Mejores goles</li>
          <li>Acerca de Ronal</li>
          <li>¿Por qué César le quiere al Dinho?</li>
        </ul>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <>
      <h1>Func facts about Ronaldinho</h1>
      <ul>
        <li>Nació el 21 de marzo de 1980 en Porto Alegre, Brasil</li>
        <li>Superó la pobreza para convertirse en una estrella del fútbol</li>
        <li>Ganó dos veces el premio FIFA al mejor jugador del mundo</li>
        <li>Se retiró del fútbol profesional en 2018</li>
        <li>Participa en labores filantrópicas</li>
        <li>
          Ganó una copa en el torneo organizado en la cárcel de Takumbú -
          Paraguay
        </li>
        <li>Fue vecino de Diogo D:</li>
      </ul>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2024</small>
    </footer>
  );
}

export const Page = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
