import React from "react";
import './FooterStyle.css'; 

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer >
      <p className='Author__and__Date'>BY SHAMIL {year}</p>
    </footer>
  );
}

export default Footer;
