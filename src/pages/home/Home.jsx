import React, { Component } from 'react';
import HomeFirstBlock from './HomeFirstBlock';
import HomeSecondBlock from './HomeSecondBlock';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeFirstBlock />
        <HomeSecondBlock />
      </div>
    );
  }
}

export default Home;