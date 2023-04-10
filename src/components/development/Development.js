import { data } from "./ProjectData";
import "./styles.css";
import {React, useState, useEffect} from "react";
import Project from "./projects/Project";



const Development = () => {

  // Toggle modal
  const [toggle, setToggle] = useState(false);
  // Set selected project
  const [active, setActive] = useState("");
  // Set hover
  const [hover, setHover] = useState(false);

  
const projectThumb = {
  position: 'relative',
  transition: '0.6s ease-in-out',
  width: hover ? '300px' : '225px',
  height: hover ? '550px' : '500px',
  padding: '2em',
};

const projectOverlay = {
  position: 'absolute',
  top: '2em',
  bottom: '0',
  left: '2em',
  right: '0',
  height: 'calc(100% - 4em)',
  width: 'calc(100% - 4em)',
  borderRadius: '200px',
  opacity: hover ? '1' : '0',
  backgroundColor: '#8d8d8d8d',
}
  
  // Disable scroll when modal is open
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = toggle ? 'hidden' : 'auto';
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
            <div className={(active === item.title && toggle ? "show" : "") + " modal"} >
              {toggle ? <div className="pg-overlay" /> : null}
              <Project title={item.title} link={item.link} description={item.description} goals={item.goals} tools={item.tools} closeModal={setToggle}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Development;
