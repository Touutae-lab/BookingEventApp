import "./ShowLogin.css";
import React from 'react';
import axios from "axios";

class ShowLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            passWord: "",
            userData: props.userData,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        console.log(this.state.userData)
        console.log(this.state.userData)
        // this.forceUpdate()
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({ [name]: value });
    }

    

    render() {
        return (
            <div className="text-center">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input
                            className="mb-05"
                            type="text"
                            value={this.state.userName}
                            name="userName"
                            onChange={this.onChange}
                        />

                        <label >Password</label>

                        <input
                            className="mb-1"
                            type="text"
                            name="passWord"
                            value={this.state.passWord}
                            onChange={this.onChange}
                        />

                        <input type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default ShowLogin;
