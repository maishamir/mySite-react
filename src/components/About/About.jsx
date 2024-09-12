import React from "react";
import aboutImg from "../../assets/images/Maisha Grad.jpeg";
import "./About.scss"

function About() {
  return (
    <div id="about-me">
      <h1>About Me</h1>
      <section className="about">
        <div className="about__content">
          <p>
            Hey there! Nice to see you again 😊 I hold a Bachelor's degree in
            Computer Science from the University of Victoria as well as a
            diploma in Software Engineering from BrainStation.
          </p>
          <p>
            When I'm not coding, you can find me tinkering with tools like
            Blender or Photoshop, reading a book, playing video games 🎮
            (current hyperfixation being Hogwarts Legacy), or rewatching
            Coraline. You might also catch me doing something more tactile like
            building miniature sets or crocheting. If you're up for a chat about
            tech, have any recommendations for books, games, or movies, or just
            want to talk about anything creative, feel free to reach out!
          </p>
        </div>

        <div className="about__img">
          <img src={aboutImg} alt="maisha image" />
        </div>
      </section>
    </div>
  );
}

export default About;
