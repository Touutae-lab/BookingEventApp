import React from "react"
class ShowActivities extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
        }

    }
    handleActivities = () => {
        if (this.props.activities === []) {
            return(
                <div className="activities-text">
                    No activities in these day
                </div>
            )
        }
        else {
            const dataList = this.props.activities.map((member) => {
                return (
                <div>
                <ul>
                    <li>
                        {member.activity_name}
                    </li>
                </ul>
                </div>
            )})

        }
    }
    render() {
        return(
            <div className="activities-contianer">
                <div className="header">Activities</div>
                <div className="scroll-handler">{this.handleActivities()}</div>
                
            </div>
        )
    }
}
export default ShowActivities;