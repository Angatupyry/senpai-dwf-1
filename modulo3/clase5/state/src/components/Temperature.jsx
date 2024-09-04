import "./temperature.css";
import { useState } from "react";
const MAX_TEMPERATURE = 30;
const MIN_TEMPERATURE = -3;

const Temperature = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperatureValue = () => {
    if (temperatureValue === MAX_TEMPERATURE) {
      return;
    }
    if (temperatureValue >= 15) {
      setTemperatureColor("hot");
    }

    setTemperatureValue(temperatureValue + 1);
  };

  const decreaseTemperatureValue = () => {
    if (temperatureValue === MIN_TEMPERATURE) {
      return;
    }

    if (temperatureValue < 15) {
      setTemperatureColor("cold");
    }
    setTemperatureValue(temperatureValue - 1);
  };

  return (
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}
        </div>
      </div>
      <div className='button-container'>
        <button onClick={increaseTemperatureValue}>+</button>
        <button onClick={decreaseTemperatureValue}>-</button>
      </div>
    </div>
  );
};

export default Temperature;
