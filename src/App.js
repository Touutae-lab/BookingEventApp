import './App.css';
import './Calendar.css';
import React from 'react';
import Calendar from 'react-calendar';
import RightBar from './components/showbar';
import UserBar from './components/userbar';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: new Date(),
      highdate: ['2-2-2022'],
      userData: {},
      loginStatus: {}
      
    };
    this.onChange = this.onChange.bind(this);
    this.convertdate = this.convertdate.bind(this);
  }
  onChange(e) {
    this.setState({value: e})
  }
  convertdate(x) {
    return x.getDate().toString() + "-" + (x.getMonth()+1).toString() + "-" + (x.getFullYear().toString())
  }
    render() {
      return (
      <div className="Mainbar">
      <UserBar/>

      <Calendar
        onChange={this.onChange}
        value={this.state.value}
        tileClassName={({ date }) => {
          if(this.state.highdate.find(x=>x===this.convertdate(date))){
           return 'hightlight';
          }
        }}
        />
        
      <RightBar/>
    </div>
      )}

}

export default App;
