import "./ShowLogin.css";
import React from 'react';
import axios from "axios";

class FormLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
    }

    changeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            ...this.state,
            [name]: value
        });

        console.log(this.state.email);
        console.log(this.state.password);
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.email === "" || this.state.password === "") {
            alert("Please enter your username and password")
        } else {
            axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
            axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
            axios.get("http://ec2-13-229-129-189.ap-southeast-1.compute.amazonaws.com/login", {
                email: this.state.email,
                hashpassword: this.setState.password,
            })
                .then((res) => {
                    console.log(res)
                    if (res.data.status === "200") {
                        this.props.setUserData(res.userdata)
                    }
                })
        }
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>email</label>
                <input type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.changeHandler}
                />
                <label>password</label>
                <input type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.changeHandler}
                />
                <button type="submit">Login</button>
            </form>
        );
    }

}


export default FormLogin;