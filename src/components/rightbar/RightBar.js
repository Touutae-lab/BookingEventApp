import "./RightBar.css"
import React from "react";

import Activity from "./Activity";

class RightBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: "activity",
      dateArray: [],
    }
    //this.props.currentDate; // day
    //this.props.activities; // activities
  }


  render() {
    switch (this.state.currentPage) {
      case "activity":
        return (
          <div>
            <Activity />
          </div>
        )
    }

  }
}

export default RightBar;