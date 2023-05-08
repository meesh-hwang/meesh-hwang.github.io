//import About from "../about/About";
import {useState} from "react";

const Dropdown = ({title, active, setActive, content}) => {
    const [toggle, setToggle] = useState(false);

    const scrollTo = () => {
        const element = document.getElementById(title)
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
    };

    const dropdownToggle = () => {
        if (toggle === false) {
            setToggle(!toggle)
        } else if (active === title){
            setToggle(!toggle)
        }
    }

    return(
        <div className="nav">
            <div className='nav-btns'>
                <div  id={title} className="nav-btn" onClick={() => {scrollTo(); setActive(title); dropdownToggle();}}>
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