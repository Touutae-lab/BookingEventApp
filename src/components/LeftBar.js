import { useState, useEffect } from "react";
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
      day: "MONDAY",
      date: "27 December 2022",
      name: "NAME",
      teams: ["team1", "team2"],
      open: true,
    };
  }

  handleClick = () => {
    this.state.open = !this.state.open;
  };

  render() {
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
}

export default LeftBar;
