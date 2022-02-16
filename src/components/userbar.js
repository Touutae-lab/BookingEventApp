import React from "react";
import "../App.css";
import axios from "axios";

class UserBar extends React.Component {
    constructor(props) {
        super(props)  
        this.state = {
            token: {status: ""},
            userName: "",
            passWord: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:3000/user/post", {
            user_id: this.state.userName,
            password: this.state.passWord
        })
        .then(response => this.setState({token: response}))
    }

    handleChange(e) {
        const value = e.target.value;
        console.log(value)
        this.setState({
            [e.target.name]: value
        })

    }

    componentDidUpdate() {
        if (this.state.token.status === "200") {
            this.props.onChange(this.state.token)
        }
    }

    render() {
        if (this.state.token.status === "200") {
            return (
                <div>
                    <div>{this.state.token.user_id}</div>
                    <div>{this.state.token.user_name}</div>
                    <div>{this.state.token.username}</div>
                    <div>{this.state.token.email}</div>
                </div>
                )
        }
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
                    <input type="submit"/>
                </div>
                </form>
            </div>
        )
    }
}
export default UserBar;