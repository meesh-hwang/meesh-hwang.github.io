import About from "../about/About";

const BodyNav = () => {
    return(
        <div className="container">
            <div className='nav-btns'>
                <a href='#' className="nav-btn">development</a>
                <a href='#' className="nav-btn">contact</a>
                <a href='#' className="nav-btn">about</a>
            </div>
            <div className="body">
                <About />
            </div>
        </div>
    );
} 

export default BodyNav;