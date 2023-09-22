import meesh from '../assets/meesh.jpg'

const About = () => {
    return(
        <div className="about-container">
            <div className="about-content">
                <img className='meesh' alt='Meesh' src={meesh} />
                <div className="about-skills">
                    html • css • javascript • react • react native • react/redux • typescript • node • adobe creative suite • ui/ux design and research 
                </div>
            </div>
            <div className="about-content">
                
                <p>
                hello, i'm meesh. <br />
                i am a front-end developer and designer based in vancouver, bc, eager to learn anything development or design related. After high school I took the new media design and web development program at Bcit. I recently graduated after finishing my internship at a software development company where i tried back-end development for the first time. since then, i've been working on improving my coding and design skills through projects and taking online courses.
                </p>
                <div className='about-btns'>
                    <a className="about-btn" rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1qoYDyOLYnFeQUZ-L4H9ouRns7I-JOUzT/view?usp=sharing">resume</a>
                    <a className="about-btn" rel="noreferrer" target="_blank" href="https://github.com/meesh-hwang">github</a>
                </div>
            </div>
        </div>
    );
}

export default About;