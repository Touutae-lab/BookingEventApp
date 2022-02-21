import './App.css';
import React from 'react';

import NavigationBar from './components/NavigationBar';
import RightBar_ShowActi from './components/RightBar_ShowActi';

import RightBar from './components/rightbar/RightBar';
import LeftBar from './components/leftbar/LeftBar';
import MidBar from './components/midbar/MidBar';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
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
  onChange(e) {
    this.setState({ value: e })
  }
  convertdate(x) {
    return x.getDate().toString() + "-" + (x.getMonth() + 1).toString() + "-" + (x.getFullYear().toString())
  }
}
export default App;
