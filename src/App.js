import "./App.css";
import React from "react";

import NavigationBar from "./components/NavigationBar";

import RightBar from "./components/rightbar/RightBar";
import LeftBar from "./components/leftbar/LeftBar";
import MidBar from "./components/midbar/MidBar";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      activities: {},
      tokens: "",
      highdate: [],
    };
    this.handleDisplayday = this.handleDisplayday.bind(this);
  }
  handleDisplayday = (e) => {
    this.setState({ currentDate: e });
  };
  handleTokens = (e) => {
    this.setState({ tokens: e });
  };
  dayRange = (startDate, endDate) => {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= endDate) {
      dateArray.push(new Date(currentDate));
      currentDate = currentDate.addDays(1);
    }
    return dateArray;
  };
  componentDidUpdate() {
    if (this.state.tokens != "" && this.activities != {}) {
      axios
        .get(
          "http://ec2-13-229-129-189.ap-southeast-1.compute.amazonaws.com/getUserActivity/" +
            this.state.tokens
        )
        .then((res) => {
          if (res.status === 200) {
            this.setState({ activities: res });
          }
        });
    }
  }

  render() {
    return (
      <div className="mainbar-box">
        <div className="leftbar-box">
          <LeftBar tokens={this.handleTokens} />
        </div>

        <div className="midbar-box">
          <MidBar currentDate={this.handleDisplayday} />
        </div>

        <div className="rightbar-box">
          <RightBar
            currentDate={this.state.currentDate}
            activities={this.state.activities}
            token={this.state.tokens}
          />
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
