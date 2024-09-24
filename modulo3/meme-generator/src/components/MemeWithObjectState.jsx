import { useState, useEffect } from "react";

export const MemeWithObject = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [memesArray, setMemesArray] = useState([]);

  useEffect(() => {
    async function getMemeData() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const jsonResponse = await res.json();

      setMemesArray(jsonResponse.data.memes);
    }

    getMemeData();
  }, []);

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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
