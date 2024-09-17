import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // Ejercicio
  // Crear un componente con dos inputs numéricos y un botón.
  // Al hacer clic se debe mostrar en un span, en un párrafo o en otro input el resultado de la suma
  // Realizar todos los controles correspondientes.

  /**
   * Cosas a tener en cuenta,
   * ¿Quiero que se renderice algo en pantalla?, ¿quiero que se actualice algún valor para mostrarlo en pantalla?
   * ¿Es Ronaldinho el mejor jugador del mundo?
   */
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [total, setTotal] = useState(0);

  const handleFirstName = (e) => {
    setFirstNumber(e.target.value);
  };

  const sumTwoNumbers = () => {
    setTotal(parseInt(firstNumber) + parseInt(secondNumber));
  };

  return (
    <>
      <h2>Sumando dos números</h2>
      <input type='number' value={firstNumber} onChange={handleFirstName} />
      <input
        type='number'
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
      />
      <button onClick={sumTwoNumbers}>Sumar</button>
      <p>{total}</p>
    </>
  );
}

export default App;
