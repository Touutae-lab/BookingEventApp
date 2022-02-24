import './App.css';
import React from 'react';

import NavigationBar from './components/NavigationBar';

import RightBar from './components/rightbar/RightBar';
import LeftBar from './components/leftbar/LeftBar';
import MidBar from './components/midbar/MidBar';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentDate: new Date(),
      activities: "",
    }
    this.handleDisplayday = this.handleDisplayday.bind(this);
  }
  handleDisplayday = e => {
    this.setState({ currentDate: e })
  }
  handleActivitie = e => {
    this.setState({ activities: e })
  }

  render() {
    return (
      <div className="mainbar-box">
        <div className='leftbar-box'>
          <LeftBar activities={this.handleActivitie} />
        </div>

        <div className='midbar-box'>
          <MidBar currentDate={this.handleDisplayday} />
        </div>

        <div className='rightbar-box'>
          <RightBar currentDate={this.state.currentDate} activities={this.state.activities} />
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
