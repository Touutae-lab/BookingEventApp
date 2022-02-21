import "./MidBar.css";
import React from "react";
import Calendar from "react-calendar";

class MidBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Date(),
      highdate: ["2-2-2022", "10-2-2022"],
      userData: {},
      loginStatus: {},
    };
    this.onChange = this.onChange.bind(this);
    this.convertdate = this.convertdate.bind(this);
  }
  handleEvent(e) {
    this.setState({ highdate: e });
  }
  onChange(e) {
    this.setState({ value: e });
  }
  convertdate(x) {
    return (
      x.getDate().toString() +
      "-" +
      (x.getMonth() + 1).toString() +
      "-" +
      x.getFullYear().toString()
    );
  }
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.value}
          tileClassName={({ date }) => {
            if (this.state.highdate.find((x) => x === this.convertdate(date))) {
              return "hightlight";
            }
          }}
        />
      </div>
    );
  }
}

export default MidBar;
