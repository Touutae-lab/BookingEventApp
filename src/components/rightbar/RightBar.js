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
      display: {},
    };
    this.changePage = this.changePage.bind(this)
    this.changeData = this.changeData.bind(this)
  }
  changePage(e) {
    this.setState({currentPage: e})
  }
  changeData(e) {
    this.setState({ display: e})
  }
  changeToadd = () => {
    this.setState({currentPage: "addactivity"})
  }
  render() {
    switch (this.state.currentPage) {
      case "activity":
        return (
          <div>
            <ShowActivities activity={this.props.activity} currentDate={this.props.currentDate} changePage={this.changePage} changeData={this.changeData}/>
            <button onClick={this.changeToadd}> Add Activity </button>
          </div>
        );
      case "addactivity":
        return (
        <div>
          <AddActiviy changePage={this.changePage} tokens={this.props.tokens}/>
        </div>
        )
      case "viewactivity":
        return (
          <div>
            <Viewactivity dataDisplay= {this.state.display} changePage={this.changePage}/>
          </div>
        )
    }
  }
}

export default RightBar;
