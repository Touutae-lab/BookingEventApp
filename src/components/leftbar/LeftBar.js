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
      userData: null,
      currentPage: "Login",
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  setUserData(userData) {
    this.setState({
      userData: userData
    })
  }
  componentDidUpdate() {
  }



  render() {
      if (this.state.currentPage === "Login") {
        return(
        <div>
          <ShowDate/>
          <ShowLogin setUserData={this.setUserData}/>
        </div>
        )
      }
    }
}

export default LeftBar;
