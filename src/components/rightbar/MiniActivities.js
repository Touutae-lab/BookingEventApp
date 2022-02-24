import React from "react"
class MiniActivities extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    componentDidUpdate() {}

    render() {
        return (
        <div>
            <ul>
                <li>
                    {this.props.activity.activity_name}
                </li>
                <li>
                    {new Date(this.props.activity.start_datetime).getHours() + ":"  + new Date(this.props.activity.end_datetime).getMinutes()}
                </li>
            </ul>
        </div>
        )
    }
}
export default MiniActivities;