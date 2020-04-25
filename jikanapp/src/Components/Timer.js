import React from 'react'
import '../Styles/Timer.css';


class Timer extends React.Component {
    state = {
        time: 0
    }

    startButton = () => {
        console.log("yeye");
    }

    render() {
        return (
            <div className = "body">
                <div className = "ui raised very padded text container segment">
                    <h2 className = "ui header">{this.state.time}</h2>
                    <div className ="three ui buttons">
                        <button className = "ui button green">Start</button>
                        <button className = "ui button red">Stop</button>
                        <button className = "ui button black">Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer;