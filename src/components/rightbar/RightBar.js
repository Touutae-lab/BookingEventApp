import "./RightBar.css";
import React from "react";

import Activity from "./Activity";
import Team from "./Team";

class RightBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "activity",
    };
    //this.props.currentDate; // day
    //this.props.activities; // activities
  }
  dayMapping() {}

  render() {
    switch (this.state.currentPage) {
      case "activity":
        return (
          <div>
            <Activity />
          </div>
        );
      case "team":
        return (
          <div>
            <Team />
          </div>
        );
      default:
        return;
    }
  }
}

export default RightBar;
