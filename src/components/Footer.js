import React from "react";
import './FooterStyle.css'; 

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer >
      <p className='AuthorAndDate'>BY SHAMIL {year}</p>
    </footer>
  );
}

export default Footer;
