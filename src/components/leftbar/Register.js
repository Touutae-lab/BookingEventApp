import React from "react";
import "./Register.css";
import axios from "axios";

class Registbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      displayName: "",
      hashpassword: "",
      role_id: "",
      email: "",
      username: "",
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handlePage = () => {};
  handleInput = (e) => {
    let names = e.target.name;
    let value = e.target.value;
    this.setState({ [names]: value });
  };

  backHandle = () => {
    this.props.setPage("Login");
  };

  submitHandle = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://ec2-13-229-129-189.ap-southeast-1.compute.amazonaws.com/users",
        {
          displayName: this.state.displayName,
          hashpassword: this.state.hashpassword,
          role_id: 2,
          email: this.state.email,
          username: this.state.username,
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.message == "create user unsuccessfully") {
          alert("register successfully");
          this.props.setPage("Login");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  render() {
    return (
      <div className="text-center register-box">
        <h3 className="mb-1 mt-1 header-color">Registeration</h3>

        <div className="row-input-box">
          <div className="label-box mt-05">
            <label className="text-right">Email: </label>
          </div>
          <div className="input-box ">
            <input
              className="input-box-regis"
              name="email"
              type="text"
              placeholder="example@gmail.com"
              onChange={this.handleInput}
            />
          </div>
        </div>
        <div className="row-input-box">
          <div className="label-box mt-05">
            <label className="text-right">Username: </label>
          </div>
          <div className="input-box ">
            <input
              className="input-box-regis"
              name="username"
              type="text"
              placeholder="username"
              onChange={this.handleInput}
            />
          </div>
        </div>

        <div className="row-input-box">
          <div className="label-box mt-05">
            <label className="text-right">Name: </label>
          </div>
          <div className="input-box ">
            <input
              className="input-box-regis"
              name="displayName"
              type="text"
              placeholder="NightKuzan Caster"
              onChange={this.handleInput}
            />
          </div>
        </div>

        <div className="row-input-box">
          <div className="label-box mt-05">
            <label className="text-right">Password: </label>
          </div>
          <div className="input-box ">
            <input
              className="input-box-regis"
              name="hashpassword"
              type="password"
              placeholder="123456789AB!"
              onChange={this.handleInput}
            />
          </div>
        </div>

        <div className="row-input-box">
          <div className="label-box mt-05">
            <label className="text-right">Role: </label>
          </div>
          <div className="input-box ">
            <input
              className="input-box-regis"
              name=" role_id"
              type="text"
              placeholder="Teacher, Student"
              onChange={this.handleInput}
            />
          </div>
        </div>

        <div className="two-btn-box mb-1">
          <button onClick={this.backHandle} className="mt-05">
            Back
          </button>
          <button onClick={this.submitHandle} className="ml-05 mt-05">
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Registbar;
