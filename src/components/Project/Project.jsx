import React from "react";
import projImage from "../../assets/images/Spell Randomizer.png"
import "./Project.scss"

function Project() {
  return (
    <section className="project">
          <div className="project__container">
              <div className="project__img-container">
                  <a href="https://wand-and-couldron.up.railway.app/"><img src={projImage} alt="" className="project__img"/></a> 
              </div>
              <div className="project__description">
                  <p>Harry Potter Spell Randomizer</p>
                  <p>A whismical Harry Potter Spell randomizer which uses the PotterDB ApI to generate and display random spells from the Harry Potter universe.</p>
                  <div className="project__links">
                      <a href="https://github.com/maishamir/hp-spell-randomizer">Github</a>
                  </div>
                  <div className="project__tech">
                      CSS | JavaScript | EJS 
                  </div>
              </div>
          </div>
    </section>
  );
}

export default Project;
