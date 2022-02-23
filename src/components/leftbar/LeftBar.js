import "./LeftBar.css";

import axios from "axios";
import React from "react";

import ShowDate from "./ShowDate";
import ShowLogin from "./ShowLogin";
import ShowUser from "./ShowUser";
import Registbar from "./Register";

class LeftBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: {
        status: "",
      },
      userData: null,
      currentPage: "Login",
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setUserData(userData) {
    this.setState({
      userData: userData,
    });
  }
  handleClick() {
    this.setState({ currentPage: "Register" });
  }

  setPage = (page) => {
    this.setState({ currentPage: page });
    this.forceUpdate();
  }
  componentDidUpdate() {
    if (this.state.userData != null) {
        axios.get("http://ec2-13-229-129-189.ap-southeast-1.compute.amazonaws.com/" + this.state.userData.user_id)
        .then((res) => {
          if (res.status === 200) {
            this.props.activities(res);
          }
        })
  }
}



  render() {
    if (this.state.currentPage === "Login") {
      return (
        <div>
          <ShowDate />

          <ShowLogin setUserData={this.setUserData} />

          <div className="mt-1 text-center text-box">
            You are not member yet?{" "}
            <a
              className="Link"
              onClick={this.handleClick}
              style={{ cursor: "pointer" }}
            >
              Create account
            </a>
          </div>
        </div>
      );
    } else if (this.state.currentPage === "Register") {
      return (
        <div>
          <ShowDate />
          <Registbar setPage={this.setPage} />
        </div>
      );
    } else if (this.state.currentPage === "User") {
      return <ShowUser />;
    }
    return <div>Something went wrongs</div>;
  }
}

export default LeftBar;
