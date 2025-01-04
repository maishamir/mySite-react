import React from "react";
import tools from "../../../src/data/tools.json";
import "./Tools.scss";
import "boxicons";
function Tools() {
  return (
    <section className="tools">
      <h1 className="tools__title">Tools I use</h1>

      <ul className="tools__list">
        <li className="tools__listItem">
          <i className="fa-brands fa-js tools__image fa-3x"></i>
          <p>JavaScript</p>
        </li>
        <li className="tools__listItem">
          <i className="fa-brands fa-react fa-3x tools__image"></i>
          <p>React</p>
        </li>
        <li className="tools__listItem">
          <i className="fa-brands fa-html5 tools__image fa-3x"></i>
          <p>HTML</p>
        </li>
        <li className="tools__listItem">
          <i className="fa-brands fa-css3-alt tools__image fa-3x"></i>
          <p>CSS</p>
        </li>
        <li className="tools__listItem">
          <i className="devicon-postgresql-plain tools__image"></i>
          <p>PostgreSQL</p>
        </li>
        <li className="tools__listItem">
          <i className="fa-brands fa-vuejs fa-3x tools__image"></i>
          <p>VueJS</p>
        </li>
        <li className="tools__listItem">
          <box-icon type="logo" name="tailwind-css" size="3rem" color="#c05e3d"></box-icon>
          <p>TailwindCSS</p>
        </li>
        <li className="tools__listItem">
          <i className="fa-brands fa-sass fa-3x tools__image"></i>
          <p>Sass</p>
        </li>
        <li className="tools__listItem">
          <i className="devicon-csharp-plain tools__image"></i>
          <p>CSharp</p>
        </li>
        <li className="tools__listItem">
          <i className="fa-brands fa-python fa-3x tools__image"></i>
          <p>Python</p>
        </li>
      </ul>
    </section>
  );
}

export default Tools;
