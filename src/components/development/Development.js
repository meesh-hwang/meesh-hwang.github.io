import { data } from "./ProjectData";
import "./styles.css";
import {React, useState, useEffect} from "react";
import Project from "./projects/Project";



const Development = () => {

  // Toggle modal
  const [toggle, setToggle] = useState(false);
  // Set selected project
  const [active, setActive] = useState("");

  
  // Disable scroll when modal is open
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = toggle === true ? 'hidden' : 'auto';
  }, [toggle])


  return (
    <div className="slider-container" id="slider-container">
      <div className="slider" id="slider">
        {data.map((item) => (
          <div className="project-item" id="project" key={item.id} onClick={() => {setActive(item.title); setToggle(!toggle);}} >
            <img src={item.img} alt="/" className="project-img"/>
            <div className='overlay'>
              <div className="title">
                {item.title}
              </div>
            </div>
            <div className={(active === item.title && toggle === true ? "show" : "") + " modal"} >
              {active === item.title && toggle===true ? <div className="pg-overlay" /> : null}
              <Project title={item.title} link={item.link} description={item.description} goals={item.goals} tools={item.tools} closeModal={setToggle}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Development;
