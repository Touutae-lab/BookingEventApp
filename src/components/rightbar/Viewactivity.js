import ShowActivities from "./ShowActivities";
import React from "react";


class viewActivity extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {
    return (
      <div className="RightBar center mt-3 bg activity-box bg-activity">
        <div className="text-center">
          <h2 className="mb-1 mt-1">View Activity</h2>
        </div>

        <div className="row-input-box field-activity">
          <div className="label-box mt-05 mr-05">
            <label className="text-right">title :</label>
          </div>
          <div className="input-box input-box-size">{this.state.title}</div>
        </div>

        <div className="row-input-box field-activity">
          <div className="label-box mt-05 mr-05">
            <label className="text-right">location :</label>
          </div>
          <div className="input-box input-box-size">{this.state.location}</div>
        </div>

        <div className="row-input-box field-activity">
          <div className="label-box mt-05 mr-05">
            <label className="text-right">start :</label>
          </div>
          <div className="input-box input-box-size">{this.state.start}</div>
        </div>

        <div className="row-input-box field-activity">
          <div className="label-box mt-05 mr-05">
            <label className="text-right">end :</label>
          </div>
          <div className="input-box input-box-size">{this.state.end}</div>
        </div>

        <div className="row-input-box field-activity">
          <div className="label-box mt-05 mr-05">
            <label className="text-right">people :</label>
          </div>
          <div className="input-box input-box-size">{this.state.people}</div>
        </div>

        <div className="row-input-box field-activity">
          <div className="label-box mt-05 mr-05">
            <label className="text-right">description :</label>
          </div>
          <div className="input-box input-box-size">
            {this.state.description}
          </div>
        </div>

        <div className="text-center mt-05 mb-05">
          <button
            className="mr-05"
            onClick={() => {
              this.setPage("allActivity");
            }}
          >
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
export default viewActivity;