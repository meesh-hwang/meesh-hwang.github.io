import meesh from '../assets/meesh.jpg'

const About = () => {
    return(
        <div className="about-container">
            <div className="about-content">
                <img className='meesh' src={meesh} />
                <div className="about-skills">
                    html • css • javascript • react • react native • react/redux • typescript • node • adobe creative suite • ui/ux design and research 
                </div>
            </div>
            <div className="about-content">
                
                <p>
                hello, i'm meesh. <br />
                i am a front-end developer based in vancouver, bc, eager to learn anything development related. After high school I took the new media design and web development program at Bcit. I recently graduated after finishing my internship at a software development company where i tried back-end development for the first time. since then, i've been working on improving my coding skills through projects and taking online courses.
                </p>
                <div className='about-btns'>
                    <a className="about-btn" target="_blank" href="https://www.dropbox.com/s/la694tm4lfos6vs/Meesh-Hwang-Resume.pdf?dl=0">resume</a>
                    <a className="about-btn" target="_blank" href="https://github.com/meesh-hwang">github</a>
                </div>
            </div>
        </div>
    );
}

export default About;