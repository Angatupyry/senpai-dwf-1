import React from "react";
import felixImg from "./images/felix.png";
import donJose from "./images/fluffykins.png";
import mrWiskas from "./images/mr-whiskerson.png";
import donGato from "./images/pumpkin.png";
import Contact from "./components/Contact";

export const Cat = () => {
  return (
    <div className='contacts'>
      <Contact
        img={mrWiskas}
        name='Mr. Whiskaz'
        phone='(212) 555-1234'
        email='mr.whiskaz@miau.com'
      />

      <Contact
        img={donJose}
        name='Don José'
        phone='(212) 555-2345'
        email='don.jose@miau.com'
      />

      <Contact
        img={felixImg}
        name='Felix'
        phone='(212) 555-4567'
        email='felix@miau.com'
      />

      <Contact
        img={donGato}
        name='Don Gato'
        phone='0800) 555 - 555'
        email='don.gato@miau.com'
      />
    </div>
  );
};
