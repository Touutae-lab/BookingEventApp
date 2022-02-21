import "./ShowLogin.css";
import React from 'react';
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import { deepOrange, orange, red, pink, blue, green } from "@mui/material/colors";

class ShowUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
        }
    }

    render() {
        return (
            <div className="text-center">
                <Avatar sx={{ bgcolor: deepOrange[500], width: 56, height: 56 }} className="img-center">
                    {this.state.name[0]}
                </Avatar>

                <h2>{this.state.name}</h2>
                <p>Your Team</p>
            </div>
        );
    }

}


export default ShowUser;