import React from "react";
import './Register.css'
class Registbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: "",
            displayName: "",
            hashpassword: "",
            role_id: "",
            email: ""
        }
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput = e => {
        let names = e.target.name
        let value = e.target.value
        this.setState({[names]: value})
    }
    render() {
        return (
            <div className="inputholder">
                <div>Registeration</div>
                <input className="input-box" name="email" tpye="text" placeholder="example@gmail.com" onChange={this.handleInput} />
                <input className="input-box" name="userId" tpye="text" placeholder="e3134s" onChange={this.handleInput} />
                <input className="input-box" name="displayName" tpye="text" placeholder="NightKuzan Caster" onChange={this.handleInput} />
                <input className="input-box" name="hashpassword" tpye="text" placeholder="123456789AB!" onChange={this.handleInput} />
                <input className="input-box" name="role_id" tpye="text" placeholder="Teacher, Student" onChange={this.handleInput} />
                <button>Back</button>
            </div>
        )
    }
}

export default Registbar;