import "./LeftBar.css";

import axios from "axios";
import React from 'react';


import ShowDate from "./ShowDate";
import ShowLogin from "./ShowLogin";
import ShowUser from "./ShowUser";

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

        <div>
          <ShowUser name="ja" />
        </div>
      </div>
    )
  }
}

export default LeftBar;
