import "./ShowLogin.css";
import React from "react";
import axios from "axios";

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userdata: "",
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler = (e) => {
    let value = e.target.value;

    this.setState({
      [e.target.name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://ec2-13-229-129-189.ap-southeast-1.compute.amazonaws.com/login", {
        email: this.state.email,
        hashpassword: this.state.password
      }
      )
      .then((res) => {
        this.props.setUserData(res);
        this.setState({ userdata: res })
        if (res.status === 200) {
          console.log("Login success")
        } else {
          alert(res.data.message ?? res.data.error);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  logout = () => {
    this.props.setPage("Login")
    this.props.setUserData("");
    this.setState({ userdata: "", });
  }


  componentDidUpdate() {
    if (this.state.userdata.status === 200) {
      this.props.setPage("User")
    }
  }

  render() {
    switch (this.props.getPage()) {
      case "User":
        return (<div className="text-center mt-2"><button onClick={() => { this.logout() }}>Logout</button></div>)
      case "Login":
        return (
          <div className="text-center login-box">
            <form onSubmit={this.handleSubmit}>
              <div className="row-input-box">
                <div className="label-box mt-05">
                  <label className="text-right">Email: </label>
                </div>
                <div className="input-box ">
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    name="email"
                    onChange={this.changeHandler}
                  />
                </div>
              </div>

              <div className="row-input-box">
                <div className="label-box mt-05">
                  <label className="text-right">Password: </label>
                </div>
                <div className="input-box ">
                  <input
                    type="password"
                    placeholder="12345678"
                    name="password"
                    onChange={this.changeHandler}
                  />
                </div>
              </div>
              <button className="mb-05 mt-05" type="submit">
                Login
              </button>
            </form>
          </div>
        );
    }
  }
}

export default FormLogin;
