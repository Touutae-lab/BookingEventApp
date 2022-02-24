import "./Activity.css";
import React from "react";
import axios from "axios";

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backUp: {},
      activityId: -1,
      title: "",
      location: "",
      start: "",
      end: "",
      people: "",
      description: "",
      currentPage: "allActivity",
      highdate: props.highdate, // highdate = ["2-2-2022", "10-2-2022"]
    };
  }

  restore = () => {
    this.setState({
      title: this.state.backUp.title,
      location: this.state.backUp.location,
      start: this.state.backUp.start,
      end: this.state.backUp.end,
      people: this.state.backUp.people,
      description: this.state.backUp.description,
    });

    console.log("restore");
    console.log(this.state.backUp);
    console.log(this.state);
    this.setPage("viewActivity");
  };

  backUp = () => {
    this.setState.backUp = {
      title: this.state.title,
      location: this.state.location,
      start: this.state.start,
      end: this.state.end,
      people: this.state.people,
      description: this.state.description,
    };
  };

  changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  setPage = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  updateActivity = (e) => {
    e.preventDefault();
    alert("update activity success");
    axios
      .put(
        "http://ec2-13-229-129-189.ap-southeast-1.compute.amazonaws.com/updateActivity",
        {
          activity_name: this.state.title,
          description: this.state.description,
          start_datetime: this.state.start,
          end_datetime: this.state.end,
          location: this.state.location,
          organizer: this.props.token,
          activity_id: this.state.activityId,
        }
      )
      .then((res) => {
        if (res.data.status === "200") {
          alert("Update activity successful");
          this.setPage("viewActivity");
        } else alert(res.data.message);
      })
      .catch((err) => alert(err.message));
  };

  addActivity = (e) => {
    e.preventDefault();
    alert("add activity success");
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
          this.setState.activityId = res.data.activity_id;
          axios
            .post(
              "http://ec2-13-229-129-189.ap-southeast-1.compute.amazonaws.com/addUserInActivity",
              {
                activity_id: this.state.activityId,
                group_user: [{ user_id: this.props.token }],
              }
            )
            .then((res) => {
              if (res.data.status === "200") {
                alert("Add activity successful");
                this.setPage("viewActivity");
              } else alert(res.data.message);
            })
            .catch((err) => alert(err.message));
        } else alert(res.data.message);
      })
      .catch((err) => alert(err.message));
  };

  deleteActivity = (e) => {
    e.preventDefault();
    alert("delete activity success");
    axios
      .delete(
        `http://ec2-13-229-129-189.ap-southeast-1.compute.amazonaws.com/deleteActivity/${this.state.activityId}`
      )
      .then((res) => {
        if (res.data.status === "200") {
          alert("Delete activity successful");
          this.setPage("allActivity");
        }
      })
      .catch((err) => alert(err.message));
  };

  allActivityPage() {
    return (
      <div className="all-ac-box">
        <div className=" mt-3 activity-box bg-activity">
          <div className="text-center">
            <h2 className="mb-1 mt-1">Today Activity</h2>
          </div>
        </div>

        <div className=" mt-3 activity-box bg-activity your-ac-box">
          <div className="text-center">
            <h2 className="mb-1 mt-1">Your Activity</h2>
          </div>
        </div>

        <div className="box-today-btn">
          <button
            className="btn-activity mt-05"
            onClick={() => {
              this.setPage("viewActivity");
            }}
          >
            view Activity
          </button>

          <button
            className="btn-activity mt-05"
            onClick={() => {
              this.setPage("viewActivity");
            }}
          >
            view Activity
          </button>

          <button
            className="btn-activity mt-05"
            onClick={() => {
              this.setPage("viewActivity");
            }}
          >
            view Activity
          </button>
          {/* <button className="ml-05" onClick={() => { this.setPage("editActivity") }}>edit Activity</button>
                    <button className="ml-05" onClick={() => { this.setPage("addActivity") }}>add Activity</button>
                    <p className="text-white">button for test multi page !!</p> */}
        </div>

        <div className="box-your-btn">
          <button
            className="btn-activity mt-05"
            onClick={() => {
              this.setPage("viewActivity");
            }}
          >
            view Activity
          </button>

          <button
            className="btn-activity mt-05"
            onClick={() => {
              this.setPage("viewActivity");
            }}
          >
            view Activity
          </button>

          <button
            className="btn-activity mt-05"
            onClick={() => {
              this.setPage("viewActivity");
            }}
          >
            view Activity
          </button>
          {/* <button className="ml-05" onClick={() => { this.setPage("editActivity") }}>edit Activity</button>
                    <button className="ml-05" onClick={() => { this.setPage("addActivity") }}>add Activity</button>
                    <p className="text-white">button for test multi page !!</p> */}
        </div>
      </div>
    );
  }

  viewActivityPage() {
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

  addActivityPage() {
    return (
      <div className="RightBar center mt-3 bg activity-box bg-activity">
        <div className="text-center">
          <h2 className="mb-1 mt-1">Add Activity</h2>
        </div>

        <form onSubmit={this.addActivity}>
          <div className="row-input-box field-activity">
            <div className="label-box mt-05">
              <label className="text-right">title :</label>
            </div>
            <div className="input-box ">
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
            <div className="label-box mt-05">
              <label className="text-right">location :</label>
            </div>
            <div className="input-box ">
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
            <div className="label-box mt-05">
              <label className="text-right">start :</label>
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
            <div className="label-box mt-05">
              <label className="text-right">end :</label>
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
            <div className="label-box mt-05">
              <label className="text-right">people :</label>
            </div>
            <div className="input-box ">
              <input
                name="people"
                type="text"
                value={this.state.people}
                onChange={this.changeHandler}
                placeholder="people"
              />
            </div>
          </div>

          <div className="row-input-box field-activity">
            <div className="label-box mt-05">
              <label className="text-right">description :</label>
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
            <button
              onClick={() => {
                this.setPage("allActivity");
              }}
            >
              Back
            </button>
            <button type="submit" className="ml-05">
              Done
            </button>
          </div>
        </form>
      </div>
    );
  }

  editActivityPage() {
    return (
      <div className="RightBar center mt-3 bg activity-box bg-activity">
        <div className="text-center">
          <h2 className="mb-1 mt-1">Edit Activity</h2>
        </div>

        <form onSubmit={this.updateActivity}>
          <div className="row-input-box field-activity">
            <div className="label-box mt-05">
              <label className="text-right">title :</label>
            </div>
            <div className="input-box ">
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
            <div className="label-box mt-05">
              <label className="text-right">location :</label>
            </div>
            <div className="input-box ">
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
            <div className="label-box mt-05">
              <label className="text-right">start :</label>
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
            <div className="label-box mt-05">
              <label className="text-right">end :</label>
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
            <div className="label-box mt-05">
              <label className="text-right">people :</label>
            </div>
            <div className="input-box ">
              <input
                name="people"
                type="text"
                value={this.state.people}
                onChange={this.changeHandler}
                placeholder="people"
              />
            </div>
          </div>

          <div className="row-input-box field-activity">
            <div className="label-box mt-05">
              <label className="text-right">description :</label>
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
            <button
              onClick={() => {
                this.restore();
              }}
            >
              Back
            </button>
            <button type="submit" className="ml-05">
              Done
            </button>
          </div>
        </form>
      </div>
    );
  }

  render() {
    switch (this.state.currentPage) {
      case "allActivity":
        this.backUp();
        return this.allActivityPage();
      case "editActivity":
        return this.editActivityPage();
      case "viewActivity":
        this.backUp();
        return this.viewActivityPage();
      case "addActivity":
        this.backUp();
        return this.addActivityPage();
      default:
        return <div>NO PAGE</div>;
    }
  }
}

export default Activity;
