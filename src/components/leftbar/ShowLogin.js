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
            <div className="text-center login-box bg">
                <form onSubmit={this.handleSubmit}>

                    <div className="row-input-box">
                        <div className="label-box mt-05">
                            <label className="text-right">email :</label>
                        </div>
                        <div className="input-box ">
                            <input type="email"
                                placeholder="example@gmail.com"
                                name="email"
                                onChange={this.changeHandler}
                            />
                        </div>
                    </div>

                    <div className="row-input-box">
                        <div className="label-box mt-05">
                            <label className="text-right">password :</label>
                        </div>
                        <div className="input-box ">
                            <input type="password"
                                placeholder="12345678"
                                name="password"
                                onChange={this.changeHandler}
                            />
                        </div>
                    </div>
                    <button className="mb-05 mt-05" type="submit">Login</button>
                </form>
            </div>
        );
    }

}


export default FormLogin;