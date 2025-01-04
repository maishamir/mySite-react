import React from "react";
import projImage from "../../assets/images/Spell Randomizer.png";
import "./Project.scss";
import ghIcon from "/icons/github_icon.svg"


function Project() {

  const handleMouseMove = e => {
    const card = e.currentTarget;
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = card.offsetLeft + cardWidth / 2;
    const centerY = card.offsetTop + cardHeight / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = -1 * (mouseY / (cardHeight / 2)) * 10;
    const rotateY = (mouseX / (cardWidth / 2)) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  const handleMouseLeave = e => {
    const card = e.currentTarget;
    card.style.transform = 'rotateX(0deg) rotateY(0deg)'
  }


  return (
    <section className="project" id="projects">
      <p className="project__direction">Click on a project to see it live</p>
      <div className="project__container">
        <div onMouseMove={handleMouseMove } onMouseLeave={handleMouseLeave} className="project__card">
          <div className="project__img-container">
            <a href="https://wand-and-couldron.up.railway.app/">
              <img src={projImage} alt="" className="project__img" />
            </a>
          </div>
          <div className="project__content">
            <p className="project__name">Harry Potter Spell Randomizer</p>
            <p className="project__description">
              A whimsical Harry Potter Spell randomizer which uses the PotterDB
              ApI to generate and display random spells from the Harry Potter
              universe.
            </p>
            <div className="project__link">
              <a href="https://github.com/maishamir/hp-spell-randomizer" target="_blank">
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
