import "../App.css";
import axios from "axios";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import Button from "@mui/material/Button";

class LeftBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: {
        status: "",
      },
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick = () => {
    this.state.open = !this.state.open;
  };

  handleSubmit(e) {
    e.preventDefault();
    axios.post("httpr://localhost:3000/user/post", {
        user_id: this.state.userName,
        password: this.state.passWord
    })
      .then(response => this.setState({ token: response }))
  }
  handleChange(e) {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    })

  }
  render() {
    if (this.state.token.status === "200") {
      return (
        <div className="center">
          <h1>{this.state.day}</h1>
          <h4>{this.state.date}</h4>
          <br />

          <Avatar sx={{ bgcolor: deepOrange[500] }} className="center">
            {this.state.name[0]}
          </Avatar>

          <h2>{this.state.name}</h2>
          <p>Your Team</p>
          <br />
          <Button variant="contained">Edit</Button>
        </div>
      );
    }
    else {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Username</label>
              <input
                type="text"
                value={this.state.userName}
                name="userName"
                onChange={this.handleChange}
              />
              <label>Password</label>
              <input
                type="text"
                name="passWord"
                value={this.state.passWord}
                onChange={this.handleChange}
              />
              <input type="submit" />
            </div>
          </form>
        </div>
      );
    }
  }
}

export default LeftBar;
