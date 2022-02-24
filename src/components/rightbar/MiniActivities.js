import "./MiniActivities.css";
import React from "react";
class MiniActivities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate() {}

  render() {
    return (
      <div>
        <button className="miniActivities">
          {this.props.activity.activity_name + " : "}

          {new Date(this.props.activity.start_datetime).getHours() +
            ":" +
            new Date(this.props.activity.end_datetime).getMinutes()}
        </button>
      </div>
    );
  }
}
export default MiniActivities;
