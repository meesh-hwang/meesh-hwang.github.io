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
    <div className="slider" id="slider">
      <div className="slide" id="slide">
        {data.map((item) => (
          <img className="item" id="img" onMouseEnter={scrollToProject} src={item.img} alt="/" />
        ))}
      </div>
    </div>
  );
};

export default Development;
