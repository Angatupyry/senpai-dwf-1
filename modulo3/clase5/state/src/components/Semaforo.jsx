import { useState, useEffect } from "react";
import "./semaforo.css";

export const Semaforo = () => {
  const colors = ["red", "yellow", "green"];
  const [colorSemaforo, setColorSemaforo] = useState("grey");

  const changeColor = (item) => {
    setColorSemaforo(item);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setColorSemaforo((prevColor) => {
  //       const nextIndex = (colors.indexOf(prevColor) + 1) % colors.length;
  //       return colors[nextIndex];
  //     });
  //   }, 1000);
  // }, [colorSemaforo]);

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
