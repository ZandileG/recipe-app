import React, { useContext } from "react";
import Arrow from "../Images/Arrow.webp";
import { ThemeContext } from "../Context/ThemeContext";

function Footer() {
const {theme} = useContext(ThemeContext);

//This is a function for the return to top button
  function scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
      <section className={`footer ${theme}`}>
      <section className="container">
      <button><img src={Arrow} alt="Arrow" className="back-top" onClick={scrollToTop}/></button>
      </section>
      
      <p className={`footer-text ${theme}`}>Brought to you by Zandile Gebuza 2025</p>
      </section>
  );
}

export default Footer;