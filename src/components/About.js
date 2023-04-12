const About = () => {
    return(
        <div className="about-container">
            <div className="about-content about-text">
                <p>
                hello, i'm meesh. <br />
                i am a front-end developer based in vancouver, bc, eager to learn anything development related. After high school I took the new media design and web development program at Bcit. I recently graduated after finishing my internship at a software development company where i got to learn a lot about back-end development. since then, i've been working on improving my coding skills through projects and taking online courses.
                </p>
            </div>
            <div className="about-content about-skills">
                html • css • javascript • react • react native • react/redux • typescript • node • adobe creative suite • ui/ux design and research 
            </div>
            <a className="about-content about-btn resume-btn" href="">resume</a>
            <a className="about-content about-btn github-btn"  href="">github</a>
            
        </div>
    );
}

export default About;