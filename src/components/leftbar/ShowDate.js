import "./ShowDate.css";
import React from 'react';

class ShowDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day: "",
            date: "22 December 2020",
        };
    }

    getDay(d) {
        const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
        return days[d.getDay()];
    }

    getDate(d) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${date} ${month} ${year}`;
    }

    componentDidMount() {
        let date = new Date();
        this.state.day = this.getDay(date);
        this.state.date = this.getDate(date);
        this.forceUpdate()
    }

    render() {
        return (
            <div className="text-center showdate-color ">
                <h1>{this.state.day}</h1>
                <h4>{this.state.date}</h4>
            </div>
        )
    }
}

export default ShowDate;
