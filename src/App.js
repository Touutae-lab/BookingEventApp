import './App.css';
import React from 'react';

import RightBar from './components/rightbar/RightBar';
import LeftBar from './components/leftbar/LeftBar';
import MidBar from './components/midbar/MidBar';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="mainbar-box">
        <div className='leftbar-box'>
          <LeftBar />
        </div>

        <div className='midbar-box'>
          <MidBar />
        </div>

        <div className='rightbar-box'>
          <RightBar />
        </div>
      </div>
    )
  }
}

export default App;
