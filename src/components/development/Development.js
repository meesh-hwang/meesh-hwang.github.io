import { data } from "./ProjectData";
import "./styles.css";
import React from "react";

const Development = () => {

    const scrollToProject = () => {

    const img = document.getElementById('img');
    if (img) {
      img.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'center' });
    }
  };
   
  return (
    <div className="slider-container" id="slider-container">
      <div className="slider" id="slider">
        {data.map((item) => (
          <img className="item" id="img" onMouseEnter={scrollToProject} src={item.img} alt="/" />
        ))}
      </div>
    </div>
  );
};

export default Development;
