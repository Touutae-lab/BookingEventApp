import React from "react";
import "../App.css";
import Button from '@mui/material/Button';

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
        <div id="button-kub">
        <Button id="button-kub" variant="contained">Add Team</Button>
        <Button id="button-kub" variant="contained">Logout</Button>
        </div>
    );
  }
}

export default RightBar;