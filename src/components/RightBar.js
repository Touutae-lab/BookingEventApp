import React from "react";
import "../App.css";

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
          Booking Event
        </div>
      </div>
    );
  }
}

export default RightBar;