import React, {Fragment} from "react";
import Arrow from "../Images/Arrow.webp";

function Footer() {

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <Fragment>
      <section className="footer">
      <section className="container">
      <img src={Arrow} alt="Arrow" className="back-top" onClick={scrollToTop}/>
      </section>
      
      <p className="footer-text">Brought to you by Zandile Gebuza 2025</p>
      </section>
    </Fragment>
  );
}

export default Footer;