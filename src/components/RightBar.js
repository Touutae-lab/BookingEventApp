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
        <div class="general-box">
        <TextField id="outlined-basic" label="Title" variant="outlined" />
        <TextField id="outlined-basic" label="Location" variant="outlined" />

        <TextField id="outlined-basic" label="Start" variant="outlined" />

        <TextField id="outlined-basic" label="End" variant="outlined" />

        
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

        <TextField id="outlined-basic" label="People" variant="outlined" />

        <TextField id="outlined-basic" label="Desscription" variant="outlined" />
        </div>
        <div id="button-kub">
        <Button id="button-kub" variant="contained">Done</Button>
        <Button id="button-kub" variant="contained">Delete</Button>
        </div>
      </div>
      
    );
  }
}

// const RightBar = (props) => {
//   const dateValue = props.dateValue;
//     const url = 'http://localhost:1000/'
//     const [event, setEvent] = useState('');

//     const requestOptions = async (url, day) => {
//       await fetch(url, day)
//       .then(response => response.json())
//       .then(data => setEvent(data))
//     }
//     useEffect(() => {
//         var day = dateValue.getDate()
//         var month = dateValue.getMonth()
//         var year = dateValue.getFullYear()
//         const requestForm = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ 
//           day: day,
//           month: month,
//           year: year,
//          })
//     };
//     
export default RightBar;