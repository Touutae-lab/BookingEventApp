import "./ShowLogin.css";
import React from 'react';
import axios from "axios";

class FormLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            userdata: "",
        }
        this.changeHandler = this.changeHandler.bind(this);
    }
    changeHandler = e => {
        let value = e.target.value;

        this.setState({
            [e.target.name]: value
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.email === "" || this.state.password === "") {
            alert("Please enter your username and password")
        } else {
            axios.get("http://ec2-13-229-129-189.ap-southeast-1.compute.amazonaws.com/login", {
                email: this.state.email,
                hashpassword: this.setState.password,
            })
                .then((res) => {
                    console.log("response")
                    console.log(res.json())

                    if (res.data.status === "200") {
                        this.props.setUserData(res.userdata)
                    } else {
                        alert(res.message)
                    }
                })
        }
    }
    render() {
        return (
            <div className="text-center">
                <form onSubmit={this.handleSubmit}>
                    <label>email</label>
                    <input type="email"
                        className="mb-05"
                        placeholder="exameple@gmail.com"
                        name="email"
                        onChange={this.changeHandler}
                    />
                    <label>password</label>
                    <input type="password"
                        className="mb-1"
                        placeholder="12345678"
                        name="password"
                        onChange={this.changeHandler}
                    />
                    <button className="mb-3" type="submit">Login</button>
                </form>
            </div>
        );
    }

}


export default FormLogin;