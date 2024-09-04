import { useState } from "react";
import "./counter.css";

export const Counter = () => {
  // useState no es otra cosa que un función que retorna un array con dos elementos
  // El primer elemento es el estado
  // El segundo elemento es la función que actualiza el estado
  const [counter, setCounter] = useState();

  const increment = () => {
    const incrementCounter = counter + 1;
    // 1 + 1 = 2
    // 2 + 1
    setCounter(incrementCounter);
  };

  return (
    <div className='counterContainer'>
      <span className='counterText'>Counter is now in: {counter}</span>
      <button onClick={increment} className='counterButton'>
        Increment Counter
      </button>
    </div>
  );
};
