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
            <div className="RightBar center mt-3">
                <div className="text-center">
                    <h1 className="text">Activity</h1>
                </div>


                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div className="input-box mt-05">
                            <label>title:</label>
                            <input
                                name="title"
                                type="text"
                                value={this.state.title}
                                onChange={this.changeHandler}
                                placeholder="title"
                            />
                        </div>

                        <div className="input-box mt-05">
                            <label>location:</label>
                            <input
                                name="location"
                                type="text"
                                value={this.state.location}
                                onChange={this.changeHandler}
                                placeholder="location"
                            />
                        </div>


                        <div className="input-box mt-05">
                            <label>start:</label>

                            <input
                                name="start"
                                type="text"
                                value={this.state.start}
                                onChange={this.changeHandler}
                                placeholder="start"
                            />
                        </div>



                        <div className="input-box mt-05">
                            <label>end:</label>
                            <input
                                name="end"
                                type="text"
                                value={this.state.end}
                                onChange={this.changeHandler}
                                placeholder="end"
                            />
                        </div>

                        <div className="input-box mt-05">
                            <label>people:</label>

                            <input
                                name="people"
                                type="text"
                                value={this.state.people}
                                onChange={this.changeHandler}
                                placeholder="people"
                            />
                        </div>

                        <div className="input-big-box mt-05">
                            <label>description:</label>
                            <textarea
                                className="mt-05"
                                rows="5"
                                cols="43"
                                id="TITLE"
                                name="description"
                                type="text"
                                value={this.state.description}
                                onChange={this.changeHandler}
                                placeholder="description">

                            </textarea>
                        </div>
                    </div>
                    <div className="text-center mt-1">
                        <button >Done</button>
                        <button >Delete</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Activity;