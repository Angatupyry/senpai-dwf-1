import { useState } from "react";
import memesData from "../memesData";

export const MemeWithObject = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: memesData.data.memes[0].url,
  });

  const getMemeImage = () => {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <main>
      <div className='form'>
        <input
          type='text'
          className='form--input'
          value={meme.topText}
          name='topText'
          onChange={handleChange}
        />
        <input
          type='text'
          className='form--input'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className='form--button' onClick={getMemeImage}>
          Obtener una nueva imagen
        </button>
        <div className='meme'>
          <img
            src={meme.randomImage}
            alt='random-imae'
            className='meme--image'
          />
          <h2 className='meme--text top'>{meme.topText}</h2>
          <h2 className='meme--text bottom'>{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
};
