import "./AddActivity.css";
import React from "react";
import axios from "axios";
class AddActiviy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };
  handdleBack = () => {
    this.props.changePage("activity");
  };
  addActivity = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://ec2-13-229-129-189.ap-southeast-1.compute.amazonaws.com/insertActivity",
        {
          activity_name: this.state.title,
          description: this.state.description,
          start_datetime: this.state.start,
          end_datetime: this.state.end,
          location: this.state.location,
          organizer: this.props.token,
        }
      )
      .then((res) => {
        if (res.data.status === "200") {
          console.log(res);
          this.setState({ activity_Id: res.message.activities_id });
          axios
            .post(
              "http://ec2-13-229-129-189.ap-southeast-1.compute.amazonaws.com/addUserInActivity",
              {
                activity_id: this.state.activityId,
                group_user: [{ user_id: this.props.token }],
              }
            )
            .then((res) => {
              if (res.status === "200") {
                this.setState({ activities_id: res.message.activities_id });
              } else alert(res.data.message);
            })
            .catch((err) => alert(err.message));
        } else alert(res.data.message);
      })
      .catch((err) => alert(err.message));
  };

  render() {
    return (
      <div>
        <div className="RightBar center mt-3 bg activity-box bg-activity">
          <div className="text-center bg-todayActivity">
            <h2 className="mb-1 mt-1">Add Activity</h2>
          </div>

          <form onSubmit={this.addActivity}>
            <div className="row-input-box field-activity">
              <div className="label-box">
                <label className="text-right label-text">Title: </label>
              </div>
              <div className="input-box">
                <input
                  name="title"
                  type="text"
                  value={this.state.title}
                  onChange={this.changeHandler}
                  placeholder="title"
                />
              </div>
            </div>

            <div className="row-input-box field-activity">
              <div className="label-box">
                <label className="text-right label-text">Location: </label>
              </div>
              <div className="input-box">
                <input
                  name="location"
                  type="text"
                  value={this.state.location}
                  onChange={this.changeHandler}
                  placeholder="location"
                />
              </div>
            </div>

            <div className="row-input-box field-activity">
              <div className="label-box">
                <label className="text-right label-text">Start: </label>
              </div>
              <div className="input-box datetime-picker-box">
                <input
                  name="start"
                  type="datetime-local"
                  value={this.state.start}
                  onChange={this.changeHandler}
                  placeholder="start"
                />
              </div>
            </div>

            <div className="row-input-box field-activity">
              <div className="label-box">
                <label className="text-right label-text">End: </label>
              </div>
              <div className="input-box datetime-picker-box">
                <input
                  name="end"
                  type="datetime-local"
                  value={this.state.end}
                  onChange={this.changeHandler}
                  placeholder="end"
                />
              </div>
            </div>

            <div className="row-input-box field-activity">
              <div className="label-box">
                <label className="text-right label-text">Description: </label>
              </div>
              <div className="input-box ">
                <textarea
                  rows="4"
                  cols="16"
                  name="description"
                  type="text"
                  value={this.state.description}
                  onChange={this.changeHandler}
                  placeholder="description"
                ></textarea>
              </div>
            </div>

            <div className="text-center mt-05 mb-05">
              <button onClick={this.handdleBack}>Back</button>
              <button type="submit" className="ml-05">
                Done
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default AddActiviy;
