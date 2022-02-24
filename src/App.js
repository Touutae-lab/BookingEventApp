import './App.css';
import React from 'react';
import RightBar from './components/rightbar/RightBar';
import LeftBar from './components/leftbar/LeftBar';
import MidBar from './components/midbar/MidBar';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      activities: [
        {
          activity_name: "ทดสอบ",
          description: "ทดสอบ",
          start_datetime: "2022-02-02 13:00:00",
          end_datetime: "2022-03-02 14:00:00",
          location: "ภาคคอม",
          organizer: "AAA",
        },
        {
          activity_name: "ทดสอบ2",
          description: "ทดสอบ2",
          start_datetime: "2022-02-02 13:00:00",
          end_datetime: "2022-02-04 14:00:00",
          location: "ภาคคอม",
          organizer: "AAA",
        },
      ],
      tokens: "",
      highdate: [],
      dateArray: [],
    };
    this.handleDisplayday = this.handleDisplayday.bind(this);
    this.dayRange = this.dayRange.bind(this);
  }
  handleDisplayday = (e) => {
    this.setState({ currentDate: e });
  };
  handleTokens = (e) => {
    this.setState({ tokens: e });
  };

  dayRange = (startDate, endDate) => {
    var currentDate = startDate;
    var data = [];
    while (currentDate <= endDate) {
      console.log(currentDate);
      if (data.includes(this.convertdate(currentDate))) {
      } else {
        data.push(this.convertdate(currentDate));
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    this.setState((Prev) => ({
      dateArray: [...Prev.dateArray, ...data],
    }));
  };
  convertdate(x) {
    return (
      x.getDate().toString() +
      "-" +
      (x.getMonth() + 1).toString() +
      "-" +
      x.getFullYear().toString()
    );
  }
  handleActivities = () => {
    for(let i=0; i<this.state.activities.length;i++) {
      let member = this.state.activities[i];
      this.dayRange(
        new Date(member.start_datetime),
        new Date(member.end_datetime)
      );
    }
  };

  componentDidUpdate() {
    if (this.state.tokens != "" && this.activities === []) {
      axios.get("http://ec2-13-229-129-189.ap-southeast-1.compute.amazonaws.com/getUserActivity/" + this.state.tokens)
      .then(res => {
        if (res.status === 200) {
          this.setState({activities: res})
          this.handleActivities()
        }
      })
    }
  }

  render() {
    return (
      <div className="mainbar-box">
        <div className="leftbar-box">
          <LeftBar tokens={this.handleTokens} />
        </div>

        <div className="midbar-box">
          <MidBar
            currentDate={this.handleDisplayday}
            hightdate={this.state.dateArray}
          />
        </div>

        <div className='rightbar-box'>
          <RightBar currentDate={this.state.currentDate} activities={this.state.activities}/>
        </div>
      </div>
    );
  }
  onChange(e) {
    this.setState({ value: e });
  }
  convertdate(x) {
    return (
      x.getDate().toString() +
      "-" +
      (x.getMonth() + 1).toString() +
      "-" +
      x.getFullYear().toString()
    );
  }
}
export default App;
