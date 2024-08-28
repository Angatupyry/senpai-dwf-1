import React from "react";
import ronalJpg from "/ronal.jpg";

export const Navbar = () => {
  return (
    <nav>
      <img src={ronalJpg} width='40px' className='nav--icon' />
      <h3 className='nav--logo_text'>Ronaldinho Facts</h3>
      <h4 className='nav--title'>DWF - 2024</h4>
    </nav>
  );
};
