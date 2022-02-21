import "./LeftBar.css";

import axios from "axios";
import React from 'react';

import Avatar from "@mui/material/Avatar";
import { deepOrange, orange, red, pink, blue, green } from "@mui/material/colors";
import ShowDate from "./ShowDate";
import ShowLogin from "./ShowLogin";
import FormLogin from "./FormLogin";

class LeftBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: {
        status: "",
      },
      username: "",
      password: "",
      day: "MONDAY",
      date: "22 December 2020",
      name: "name",
      page: "loggedin",
      userData: null,
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleClick = () => {
    this.state.open = !this.state.open;
  };

  handleSubmit(e) {
    e.preventDefault();
    axios.post("http://ec2-13-229-129-189.ap-southeast1.compute.amazonaws.com/users", {
      userId: "234567890-",
      displayName: "ja",
      username: "jarawin",
      email: "jarawin@gmail.com",
      role_id: "2"
    })
      .then(response => this.setState({ token: response }))
  }

  componentDidMount() {
    if (this.state.token.status === "200") {
      this.state.page = "loggedin"
    }
  }

  componentDidUpdate() {
    console.log("LeftBar componentDidUpdate")
    if (this.state.userData !== null) {
      console.log(this.state)
    }
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    })
  }

  // multi page
  pageLoggedin() {
    return (
      <div className="mt-3">
        <h1>{this.state.day}</h1>
        <h4>{this.state.date}</h4>
        <br />

        <Avatar sx={{ bgcolor: deepOrange[500], width: 56, height: 56 }} className="img-center">
          {this.state.name[0]}
        </Avatar>

        <h2>{this.state.name}</h2>
        <p>Your Team</p>
      </div>
    );
  }

  setUserData(userData) {
    this.setState({
      userData: userData
    })
  }



  render() {
    return (
      <div className="">
        <div className="mt-3">
          <ShowDate />
        </div>

        <div className="mt-3">
          <ShowLogin setUserData={this.setUserData} />
        </div>

        <div className="mt-3">
          <FormLogin setUserData={this.setUserData} />
        </div>
      </div>
    )
  }
}

export default LeftBar;
