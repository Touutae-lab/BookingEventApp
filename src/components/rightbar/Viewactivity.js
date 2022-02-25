import ShowActivities from "./ShowActivities";
import "./Viewactivity.css";
import React from "react";

class Viewactivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  changePage = () => {
    this.props.changePage("activity");
  };
  componentDidMount() {
    this.setState({
      activity_name: this.props.dataDisplay.activity_name,
      description: this.props.dataDisplay.description,
      start_datetime: this.props.dataDisplay.start_datetime,
      end_datetime: this.props.dataDisplay.end_datetime,
      location: this.props.dataDisplay.location,
      organizer: this.props.dataDisplay.organizer,
      // activity_id: this.props.token,
    });
  }

  render() {
    return (
      <div className="RightBar center mt-3 bg activity-box bg-activity">
        <div className="text-center bg-todayActivity">
          <h2 className="mb-1 mt-1">View Activity</h2>
        </div>

        <div className="row-input-box field-activity">
          <div className="label-box mr-05">
            <label className="text-right">Title: </label>
          </div>
          <div className="input-box input-box-size">
            {this.state.activity_name}
          </div>
        </div>

        <div className="row-input-box field-activity">
          <div className="label-box mr-05">
            <label className="text-right">Location: </label>
          </div>
          <div className="input-box input-box-size">{this.state.location}</div>
        </div>

        <div className="row-input-box field-activity">
          <div className="label-box mr-05">
            <label className="text-right">Start: </label>
          </div>
          <div className="input-box input-box-size">
            {this.state.start_datetime}
          </div>
        </div>

        <div className="row-input-box field-activity">
          <div className="label-box mr-05">
            <label className="text-right">End: </label>
          </div>
          <div className="input-box input-box-size">
            {this.state.end_datetime}
          </div>
        </div>

        <div className="row-input-box field-activity">
          <div className="label-box mr-05">
            <label className="text-right">People: </label>
          </div>
          <div className="input-box input-box-size">{this.state.people}</div>
        </div>

        <div className="row-input-box field-activity">
          <div className="label-box mr-05">
            <label className="text-right">Description: </label>
          </div>
          <div className="input-box input-box-size">
            {this.state.description}
          </div>
        </div>

        <div className="text-center mb-05">
          <button className="mr-05" onClick={this.changePage}>
            Back
          </button>
          <button
            onClick={() => {
              this.setPage("editActivity");
            }}
            className="mr-05"
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              this.deleteActivity(e);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
export default Viewactivity;
