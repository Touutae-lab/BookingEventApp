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
            console.log("submit");
            console.log(this.state.email);
            console.log(this.state.password);
            try {
                axios.get("http://ec2-13-229-129-189.ap-southeast-1.compute.amazonaws.com/login", {
                    email: this.state.email,
                    hashpassword: this.setState.password,
                })
                    .then((res) => {
                        console.log("response")
                        console.log(res.data)

                        if (res.data.status === "200") {
                            this.props.setUserData(res.userdata)
                        } else {
                            alert(res.message)
                        }
                    })

            } catch (e) {
                alert("error")
            }
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
                        value={this.state.email}
                        onChange={this.changeHandler}
                    />
                    <label>password</label>
                    <input type="password"
                        className="mb-1"
                        placeholder="12345678"
                        name="password"
                        value={this.state.password}
                        onChange={this.changeHandler}
                    />
                    <button className="mb-3" type="submit">Login</button>
                </form>
            </div>
        );
    }

}


export default FormLogin;