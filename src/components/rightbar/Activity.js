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
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        axios.get("http://ec2-13-229-129-189.ap-southeast-1.compute.amazonaws.com/login", {
            email: this.state.email,
            hashpassword: this.setState.password,
        })
            .then((res) => {
                console.log("response")
                console.log(res.json())

                if (res.data.status === "200") {
                    this.props.setUserData(res.userdata)
                } else {
                    alert(res.message)
                }
            })
    }

    changeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="RightBar center mt-3 bg activity-box bg-activity">
                <div className="text-center">
                    <h2 className="mb-1 mt-1">Activity</h2>
                </div>



                <form onSubmit={this.handleSubmit}>

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
                        <button className="mr-05">Done</button>
                        <button >Delete</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Activity;