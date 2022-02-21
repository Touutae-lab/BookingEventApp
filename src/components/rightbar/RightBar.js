import "./RightBar.css"
import React from "react";

import Activity from "./Activity";
import Team from "./Team";

class RightBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: "activity",
    }
  }

  render() {
    switch (this.state.currentPage) {
      case "activity":
        return (
          <div>
            <Activity />
          </div>
        )
      case "team":
        return (
          <div>
            <Team />
          </div>
        )
    }

  }
}

export default RightBar;