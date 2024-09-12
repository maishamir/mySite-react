import React from "react";
import heroImg from "../../assets/images/Maisha Mir_LI.jpg";
import arrow from "/Users/maishamir/Documents/mySite-react/public/icons/arrow button circle.svg"
import "./Hero.scss";

function Hero() {
  return (
    <main className="hero">
      <div className="hero__content">
        {/* <img src={heroImg} className="hero__img" alt="img of maisha mir" /> */}
        <div className="hero__text">
          <h1 className="hero__title">HEY I'M MAISHA</h1>
          <p>I'm a fullstack developer based in Victoria, BC.</p>
        </div>
          </div>
          
          <div className="hero__arrow">
              <a href="#projects"><img className="hero__icon" src={arrow}/></a>
          </div>
    </main>
  );
}

export default Hero;