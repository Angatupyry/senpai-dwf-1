import { useState } from "react";
import "./semaforo.css";

export const Semaforo = () => {
  const colors = ["red", "yellow", "green"];
  const [colorSemaforo, setColorSemaforo] = useState("grey");

  const changeColor = (item) => {
    setColorSemaforo(item);
  };

  return (
    <div className='App'>
      {colors.map((item, index) => {
        return (
          <div key={index}>
            <div
              className='light'
              style={{
                backgroundColor: item === colorSemaforo ? item : "grey",
              }}
              onClick={() => changeColor(item)}
            ></div>
          </div>
        );
      })}
    </div>
  );
};
