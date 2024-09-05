import React from "react";
import projImage from "../../assets/images/Spell Randomizer.png"

function Project() {
  return (
    <section className="project">
          <div className="project__container">
              <div className="project__screenshot">
                  <img src={projImage} alt="" />
              </div>
              <div className="project__description">
                  <p>Project Name</p>
                  <p>This is the description of the project including the api(s) I used and blah blah.</p>
                  <div className="project__links">
                      <a href="#">Demo</a>
                      <a href="#">Github</a>
                  </div>
                  <div className="project__tech">
                      list | of | tech | used
                  </div>
              </div>
          </div>
    </section>
  );
}

export default Project;
