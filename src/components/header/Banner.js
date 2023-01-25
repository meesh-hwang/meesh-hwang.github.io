import logo from '../../assets/logo.png';
import c1 from '../../assets/clouds/c1.svg';
import c2 from '../../assets/clouds/c2.svg';
import c3 from '../../assets/clouds/c3.svg';
import c4 from '../../assets/clouds/c4.svg';
import c5 from '../../assets/clouds/c5.svg';

const Banner = () => {
  return (
    <div className="Banner">
        <img src={logo} className="logo" alt="logo" />
        <div className='clouds'>
            <img src={c1} className="cloud" alt="cloud" />
            <img src={c2} className="cloud" alt="cloud" />
            <img src={c3} className="cloud" alt="cloud" />
            <img src={c4} className="cloud" alt="cloud" />
            <img src={c5} className="cloud" alt="cloud" />
        </div>
    </div>
  );
}

export default Banner;
