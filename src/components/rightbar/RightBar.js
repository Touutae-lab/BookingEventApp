import "./RightBar.css";
import React from "react";

import ShowActivities from "./ShowActivities";
import AddActiviy from "./AddActivity";
import Viewactivity from "./Viewactivity";

class RightBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "activity",
    };
  }

  render() {
    switch (this.state.currentPage) {
      case "activity":
        return (
          <div>
            <ShowActivities activity={this.props.activity} currentDate={this.props.currentDate}/>
          </div>
        );
      case "addactivity":
        <div>
          <AddActiviy/>
        </div>
      case "viewactivity":
          <div>
            <Viewactivity/>
          </div>
    }
  }
}

export default RightBar;
