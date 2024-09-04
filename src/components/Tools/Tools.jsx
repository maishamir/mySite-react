import React from "react";
import tools from "../../../src/data/tools.json";
import "./Tools.scss";
function Tools() {
  return (
    <section className="tools">
      <h1>Tools I use</h1>

      <ul className="tools__list">
        {tools.map((tool) => {
          return (
            <li key={tool.id} className="tools__listItem">
              <img src={tool.image} alt={tool.image} className="tools__image" />
              {tool.name}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Tools;
