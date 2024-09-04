import React from "react";
import heroImg from "../../assets/images/Maisha Mir_LI.jpg";
import "./Hero.scss";

function Hero() {
  return (
    <main className="hero">
      <img src={heroImg} className="hero__img" alt="img of maisha mir" />
      <div>
        <h1>HI! I'M MAISHA MIR</h1>
        <p>I'm a fullstack developer based in Victoria, BC.</p>
      </div>
    </main>
  );
}

export default Hero;
