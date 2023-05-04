import tree from '../assets/creatures/tree.png';
import boulders from '../assets/creatures/boulders.png';
import smiley from '../assets/creatures/smiley.png';
import palm from '../assets/creatures/palm.png';

const Banner = () => {
  return (
    <div className='banner-wrapper'>
      <div className="Banner">
        <img src={tree} className="tree" />
        <h1>meesh <br/> hwang</h1>
        <img src={smiley} className="smiley"/>
        <img src={boulders} className="boulders"/>
        <img src={palm} className="palm"/>
      </div>
      <h3 className='banner-tag'>Front-end developer <br/> & designer</h3>
      <div className='scroll-down'></div>
    </div>
  );
}

export default Banner;
