import "./MiniActivities.css";
import React from "react";
class MiniActivities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate() {}

  handleClick = () => {
    this.props.changePage("viewactivity")
    this.props.changeData(this.props.activity)
    console.log("data")
  }

  render() {
    return (
      <div>
        <button className="miniActivities" onClick={this.handleClick} type="submit" >
          {this.props.activity.activity_name + " "}

          {new Date(this.props.activity.start_datetime).toLocaleTimeString()}
        </button>
      </div>
    );
  }
}
export default MiniActivities;
