import React from "react";
import MiniActivities from "./MiniActivities";
class ShowActivities extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    checkCurrent(activities) {
        let activities_start = new Date(activities.start_datetime)
        let activities_end = new Date(activities.end_datetime)
        let current = new Date(this.props.currentDate)
        if (current >= activities_start && current <= activities_end) {
            return activities
        }
        else {
            return false;
        }
    }

    render() {
        return (
        <div className="showactivities-container">
            <div>
                {this.props.activity.map((data => {
                    console.log(data)
                    let correcter = this.checkCurrent(data)
                    if (correcter) { 
                        return <MiniActivities activity={correcter}/>
                    }
                }))}
            </div>
        </div>
        )
    }
}
export default ShowActivities;