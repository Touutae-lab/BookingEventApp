import React from "react";
import './Register.css'
import axios from "axios";

class Registbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: "",
            username: "",
            displayName: "",
            hashpassword: "",
            role_id: "",
            email: "",
            username: "",
        }
        this.handleInput = this.handleInput.bind(this);
    }
    handlePage = () => {
        
    }
    handleInput = e => {
        let names = e.target.name
        let value = e.target.value
        this.setState({ [names]: value })
    }

    backHandle = () => {
        this.props.setPage("Login");
    }

    submitHandle = (e) => {
        e.preventDefault();
        axios.post("http://ec2-13-229-129-189.ap-southeast-1.compute.amazonaws.com/users", {
            userId: this.state.userId,
            displayName: this.state.displayName,
            hashpassword: this.state.hashpassword,
            role_id: 2,
            email: this.state.email,
            username: this.state.username
        })
            .then(res => {
                console.log(res.data);
                if (res.data.message == "create user unsuccessfully") {
                    alert("register successfully")
                    this.props.setPage("Login");
                } else {
                    alert(res.data.message);
                }
            })
            .catch(err => {
                alert(err.message)
            })


    }

    render() {
        return (
<<<<<<< HEAD
            <div className="text-center register-box bg-register">
                <h3 className="mb-05">Registeration</h3>

                <div className="row-input-box">
                    <div className="label-box mt-05">
                        <label className="text-right">email :</label>
                    </div>
                    <div className="input-box ">
                        <input className="input-box-regis" name="email" tpye="text" placeholder="example@gmail.com" onChange={this.handleInput} />
                    </div>
                </div>

                <div className="row-input-box">
                    <div className="label-box mt-05">
                        <label className="text-right">userId :</label>
                    </div>
                    <div className="input-box ">
                        <input className="input-box-regis" name="userId" tpye="text" placeholder="e3134s" onChange={this.handleInput} />
                    </div>
                </div>

                <div className="row-input-box">
                    <div className="label-box mt-05">
                        <label className="text-right">username :</label>
                    </div>
                    <div className="input-box ">
                        <input className="input-box-regis" name="username" tpye="text" placeholder="username" onChange={this.handleInput} />
                    </div>
                </div>

                <div className="row-input-box">
                    <div className="label-box mt-05">
                        <label className="text-right">name :</label>
                    </div>
                    <div className="input-box ">
                        <input className="input-box-regis" name="displayName" tpye="text" placeholder="NightKuzan Caster" onChange={this.handleInput} />
                    </div>
                </div>

                <div className="row-input-box">
                    <div className="label-box mt-05">
                        <label className="text-right">password :</label>
                    </div>
                    <div className="input-box ">
                        <input className="input-box-regis" name="hashpassword" tpye="text" placeholder="123456789AB!" onChange={this.handleInput} />
                    </div>
                </div>

                <div className="row-input-box">
                    <div className="label-box mt-05">
                        <label className="text-right">role :</label>
                    </div>
                    <div className="input-box ">
                        <input className="input-box-regis" name=" role_id" tpye="text" placeholder="Teacher, Student" onChange={this.handleInput} />
                    </div>
                </div>

                <div className="two-btn-box">
                    <button onClick={this.backHandle} className="mt-05">Back</button>
                    <button onClick={this.submitHandle} className="ml-05 mt-05">register</button>
                </div>

=======
            <div className="inputholder">
                <div>Registeration</div>
                <input className="input-box" name="email" tpye="text" placeholder="example@gmail.com" onChange={this.handleInput} />
                <input className="input-box" name="userId" tpye="text" placeholder="e3134s" onChange={this.handleInput} />
                <input className="input-box" name="displayName" tpye="text" placeholder="NightKuzan Caster" onChange={this.handleInput} />
                <input className="input-box" name="hashpassword" tpye="text" placeholder="123456789AB!" onChange={this.handleInput} />
                <input className="input-box" name="role_id" tpye="text" placeholder="Teacher, Student" onChange={this.handleInput} />
                <button >Back</button>
>>>>>>> 4c24b16e (only minor change)
            </div>
        )
    }
}

export default Registbar;