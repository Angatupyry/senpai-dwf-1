import { useState } from "react";
import memesData from "../memesData";

export const Meme = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImage, setRandomImage] = useState(memesData.data.memes[0].url);

  const handleInputChange = (e) => {
    setTopText(e.target.value);
  };

  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setRandomImage(url);
  };

  return (
    <main>
      <div className='form'>
        <input
          type='text'
          className='form--input'
          value={topText}
          onChange={handleInputChange}
        />
        <input
          type='text'
          className='form--input'
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
        <button className='form--button' onClick={getMemeImage}>
          Obtener una nueva imagen
        </button>
        <div className='meme'>
          <img src={randomImage} alt='random-imae' className='meme--image' />
          <h2 className='meme--text top'>{topText}</h2>
          <h2 className='meme--text bottom'>{bottomText}</h2>
        </div>
      </div>
    </main>
  );
};
