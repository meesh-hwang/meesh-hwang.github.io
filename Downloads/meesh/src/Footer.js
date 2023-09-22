import email from './assets/email.svg';
import linkedin from './assets/linkedin.svg';
import github from './assets/github.svg';

const Footer = () => {
    return (
        <div className="footer">
            <a href="mailto:meesh.hwang@gmail.com">
                <img src={email}/> meesh.hwang@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/meeshhwang/">
                <img src={linkedin}/> linkedin
            </a>
            <a href='https://github.com/meesh-hwang'>
                <img src={github} /> github
            </a>
        </div>
    );
}

export default Footer;