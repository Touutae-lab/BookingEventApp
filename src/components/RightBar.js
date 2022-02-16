import React from "react";
import "../App.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TimePicker from 'react-time-picker';

class RightBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event: this.props.userEvent,
      data: this.props.userData,
      
    }
  }
  async requestOptions(url) {
    await fetch(url)
    .then(response => response.json())
    .then(data => this.setState({event: data}))
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="RightBar">
        <div className="Header">
          Activity
        </div>
        <form onSubmit={this.handleSubmit}>

        <div class="general-box">
        <TextField id="outlined-basic" label="Title" variant="outlined" type="text" value={this.state.title} name="userName" onChange={this.handleChange} />

        <TextField id="outlined-basic" label="Location" variant="outlined" type="text" value={this.state.Location} name="userName" onChange={this.handleChange}/>
       

        <TextField id="outlined-basic" label="Start" variant="outlined" type="text" value={this.state.Start} name="userName" onChange={this.handleChange}/>
        

        <TextField id="outlined-basic" label="End" variant="outlined" type="text" value={this.state.End} name="userName" onChange={this.handleChange}/>
        
        
        <TextField
            label="Choose Time"
            defaultValue="04:20"
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            // 5 minutes
            inputProps={{
              step: 300,
            }}
        />

        <TextField id="outlined-basic" label="People" variant="outlined" type="text" value={this.state.People} name="userName" onChange={this.handleChange}/>

        <TextField id="outlined-basic" label="Description" variant="outlined" type="text" value={this.state.Descriptoin} name="userName" onChange={this.handleChange}/>
        </div>
        <div id="button-kub">
        <Button id="button-kub" variant="contained">Done</Button>
        <Button id="button-kub" variant="contained">Delete</Button>
        </div>

        </form>
      </div>
    );
  }
}

export default RightBar;