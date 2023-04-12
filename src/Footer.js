import email from './assets/email.svg';
import linkedin from './assets/linkedin.svg';

const Footer = () => {
    return (
        <div className="footer">
            <a href="mailto:meesh.hwang@gmail.com">
                <img src={email}/> meesh.hwang@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/meeshhwang/">
                <img src={linkedin}/> linkedin
            </a>
        </div>
    );
}

export default Footer;