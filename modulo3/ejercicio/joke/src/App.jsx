import React from "react";
import Joke from "./components/Joke";

function App() {
  return (
    <>
      <Joke
        setup='¿Por qué los pájaros no usan Facebook?'
        punchline='Punchline: Porque ya tienen Twitter'
      />
      <Joke
        setup='¿Cuál es el animal más antiguo?'
        punchline='La cebra, porque está en blanco y negro.'
      />
      <Joke setup='¿Qué hace una abeja en el gimnasio?' punchline='¡Zum-ba!' />
      <Joke punchline='¡No confíes en los átomos! Ellos lo componen todo.' />
    </>
  );
}

export default App;
