import React from "react";
import heroImg from "../../assets/images/Maisha Mir_LI.jpg";
import arrow from "/Users/maishamir/Documents/mySite-react/public/icons/arrow button circle.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Hero.scss";

function Hero() {
  return (
    <main className="hero">
      <div className="hero__content">
        {/* <img src={heroImg} className="hero__img" alt="img of maisha mir" /> */}
        <div className="hero__text">
          <h1 className="hero__title">Hey! I'm <span className="hero__title-italic">Maisha</span></h1>
          <p className="hero__blurb">I'm a fullstack developer based in Victoria, BC.</p>
        </div>
          </div>
          
          <div className="hero__arrow bounce">
              <a href="#projects"><i className="fa-solid fa-circle-arrow-down fa-3x" style={{color: "#fbf6e0"}} /></a>
      </div>
    </main>
  );
}

export default Hero;