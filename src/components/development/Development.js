import { data } from "./ProjectData";
import "./styles.css";
import {React, useState} from "react";
import Project from "./projects/Project";



const Development = () => {
    const [toggle, setToggle] = useState(false)
    const [active, setActive] = useState("")
  
    const scrollToProject = () => {

    const project = document.getElementById('project');
    if (project) {
      project.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });

    }
    
  };
   
  return (
    <div className="slider-container" id="slider-container">
      <div className="slider" id="slider">
        {data.map((item) => (
          <div className="item" id="project" onClick={() => {setActive(item.title); setToggle(!toggle);}} onMouseEnter={scrollToProject}>
            <img src={item.img} alt="/" />
            <div className="overlay">
              <div className="title">
                {item.title}
              </div>
            </div>
            <div aria-hidden="false" className={(active === item.title && toggle ? "show" : "") + " modal"} >
              {toggle ? <div class="pg-overlay" /> : null}
              < Project title={item.title} link={item.link} description={item.description} goals={item.goals} tools={item.tools} closeModal={setToggle}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Development;
