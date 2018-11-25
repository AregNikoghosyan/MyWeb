import React, { Component } from 'react';

import Hours from '../../assets/images/24-hours.png';
import Web from '../../assets/images/smartphone.png';
import Help from '../../assets/images/help.png';
import Quality from '../../assets/images/shield.png';

class HomeFirstBlock extends Component {

  render() {
    return (
      <div className='Home-First-Block'>
        <h2>What you get ?</h2>
        <div className='Home-Info'>
          <div>
            <div className='Home-Info-img-div'><img src={Hours} alt='' /></div>
            <p className='Home-Info-text'>24/7 Working Service</p>
          </div>
          <div>
            <div className='Home-Info-img-div'><img src={Web} alt='' /></div>
            <p className='Home-Info-text'>High Skilled Programmers</p>
          </div>
          <div>
            <div className='Home-Info-img-div'><img src={Quality} alt='' /></div>
            <p className='Home-Info-text'>Best quality Websites</p>
          </div>
          <div>
            <div className='Home-Info-img-div'><img src={Help} alt='' /></div>
            <p className='Home-Info-text'>Help Center</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeFirstBlock;