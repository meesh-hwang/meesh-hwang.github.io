//import About from "../about/About";
import Development from "../development/Development";
import {useState, useEffect, useRef} from "react";

const Dropdown = ({title, active, setActive, content}) => {
    const [toggle, setToggle] = useState(false);

    return(
        <div className="nav">
            <div className='nav-btns'>
                <div className="nav-btn" onClick={() => {setActive(title); setToggle(!toggle);}}>
                    <div className="container">
                        <p>{title}</p>
                    </div>
                </div>
            </div>  
            
            <div className={(active === title && toggle ? "show" : "") + " nav-content"}>
                <div className="container">
                    {content}
                </div>
            </div>
        </div>
    );
} 

export default Dropdown;