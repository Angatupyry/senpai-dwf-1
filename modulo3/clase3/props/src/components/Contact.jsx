import React from "react";
import phoneIcono from "../images/phone-icon.png";
import mailIcono from "../images/mail-icon.png";

export default function Contact({ img, name, phone, email }) {
  return (
    <div className='contact-card'>
      <img src={img} />
      <h3>{name}</h3>
      <div className='info-group'>
        <img src={phoneIcono} />
        <p>{phone}</p>
      </div>
      <div className='info-group'>
        <img src={mailIcono} />
        <p>{email}</p>
      </div>
    </div>
  );
}
