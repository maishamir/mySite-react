import React from "react";
import projImage from "../../assets/images/Spell Randomizer.png";
import "./Project.scss";
import ghIcon from "/icons/github_icon.svg"

function Project() {
  return (
    <section className="project">
      <h1>Projects</h1>
      <div className="project__container">
        <div className="project__card">
          <div className="project__img-container">
            <a href="https://wand-and-couldron.up.railway.app/">
              <img src={projImage} alt="" className="project__img" />
            </a>
          </div>
          <div className="project__content">
            <p className="project__name">Harry Potter Spell Randomizer</p>
            <p className="project__description">
              A whismical Harry Potter Spell randomizer which uses the PotterDB
              ApI to generate and display random spells from the Harry Potter
              universe.
            </p>
            <div className="project__link">
              <a href="https://github.com/maishamir/hp-spell-randomizer">
                <img src={ghIcon} alt="" />
              </a>
            </div>
            <div className="project__tech">CSS | JavaScript | EJS</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
