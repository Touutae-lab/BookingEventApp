import "./Activity.css"
import React from "react";
import axios from "axios";

class Activity extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            location: "",
            start: "",
            end: "",
            people: "",
            description: "",
            currentPage: "allActivity",
        }
    }

    changeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
    }

    setPage = page => {
        this.setState({
            currentPage: page
        })
    }

    updateActivity = (e) => {
        e.preventDefault();
        alert("update activity success");
        // update activity to server
        this.setPage("viewActivity");
    }

    addActivity = (e) => {
        e.preventDefault();
        alert("add activity success");
        // add activity to server
        this.setPage("viewActivity");
    }

    deleteActivity = (e) => {
        e.preventDefault();
        alert("delete activity success");
        // delete activity to server
        this.setPage("allActivity");
    }

    allActivityPage() {
        return (
            <div>
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
            </div>
        )
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
                    <div className="input-box input-box-size">
                        {this.state.title}
                    </div>
                </div>

                <div className="row-input-box field-activity">
                    <div className="label-box mt-05 mr-05">
                        <label className="text-right">location :</label>
                    </div>
                    <div className="input-box input-box-size">
                        {this.state.location}
                    </div>
                </div>

                <div className="row-input-box field-activity">
                    <div className="label-box mt-05 mr-05">
                        <label className="text-right">start :</label>
                    </div>
                    <div className="input-box input-box-size">
                        {this.state.start}
                    </div>
                </div>

                <div className="row-input-box field-activity">
                    <div className="label-box mt-05 mr-05">
                        <label className="text-right">end :</label>
                    </div>
                    <div className="input-box input-box-size">
                        {this.state.end}
                    </div>
                </div>

                <div className="row-input-box field-activity">
                    <div className="label-box mt-05 mr-05">
                        <label className="text-right">people :</label>
                    </div>
                    <div className="input-box input-box-size">
                        {this.state.people}
                    </div>
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
                    <button onClick={() => { this.setPage("editActivity") }} className="mr-05">Edit</button>
                    <button onClick={(e) => { this.deleteActivity(e) }}>Delete</button>
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
                        <div className="input-box ">
                            <input
                                name="start"
                                type="text"
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
                        <div className="input-box ">
                            <input
                                name="end"
                                type="text"
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
                                placeholder="description">
                            </textarea>
                        </div>
                    </div>

                    <div className="text-center mt-05 mb-05">
                        <button onClick={() => { this.setPage("allActivity") }}>Back</button>
                        <button type="submit" className="ml-05">Done</button>
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
                        <div className="input-box ">
                            <input
                                name="start"
                                type="text"
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
                        <div className="input-box ">
                            <input
                                name="end"
                                type="text"
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
                                placeholder="description">
                            </textarea>
                        </div>
                    </div>

                    <div className="text-center mt-05 mb-05">
                        <button type="submit" className="mr-05">Done</button>
                        <button onClick={(e) => { this.deleteActivity(e) }}>Delete</button>
                    </div>
                </form>
            </div>
        );
    }



    render() {
        switch (this.state.currentPage) {
            case "allActivity":
                return this.allActivityPage();
            case "editActivity":
                return this.editActivityPage();
            case "viewActivity":
                return this.viewActivityPage();
            case "addActivity":
                return this.addActivityPage();
            default:
                return (<div>NO PAGE</div>)
        }
    }
}

export default Activity;