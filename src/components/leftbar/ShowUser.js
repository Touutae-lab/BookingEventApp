import "./ShowLogin.css";
import React from 'react';
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import { deepOrange, orange, red, pink, blue, green } from "@mui/material/colors";

class ShowUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>

                <div className="text-center mt-4">
                    <Avatar sx={{ bgcolor: deepOrange[500], width: 56, height: 56 }} className="img-center">
                        {this.props.userData.name[0]}
                    </Avatar>

                    <h2 className="mt-15 text-white">{this.props.userData.name}</h2>
                </div>
            </div>
        );
    }

}


export default ShowUser;