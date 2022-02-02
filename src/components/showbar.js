import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
const RightBar = (props) => {
  const dateValue = props.dateValue;
    const url = 'http://localhost:1000/'
    const [event, setEvent] = useState('');

    const requestOptions = async (url, day) => {
      await fetch(url, day)
      .then(response => response.json())
      .then(data => setEvent(data))
    }
    useEffect(() => {
        var day = dateValue.getDate()
        var month = dateValue.getMonth()
        var year = dateValue.getFullYear()
        const requestForm = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          day: day,
          month: month,
          year: year,
         })
    };
    requestOptions(url, requestForm)
    }, [dateValue])
    console.log(event)
    return (
    
    <div className="RightBar">
        <div className="Header">Booking Event</div>
        <div>
            
        </div>
    </div>
    );
}
export default RightBar;