import React from 'react'
import '../Styles/Timer.css';


class Timer extends React.Component {
    state = {
        isOn : false,
        time: {
            minutes: 0,
            seconds: "00"
        }
    }

    startButton = () => {
        this.setState({
            time: {
                minutes: 25,
                seconds: "00"
            }
        })
    }
    
    stopButton = () => {
    }
    
    resetButton = () => {
        this.setState({
            time: {
                minutes: 0,
                seconds: "00"
            }
        })
    }

    render() {
        return (
            <div className = "body">
                <div className = "ui raised very padded text container segment">
                    <h2 className = "ui header">{this.state.time.minutes + ":" + this.state.time.seconds}</h2>
                    <div className ="three ui buttons">
                        <button className = "ui button green" onClick = {this.startButton}>Start</button>
                        <button className = "ui button red" onClick = {this.stopButton}>Stop</button>
                        <button className = "ui button black" onClick = {this.resetButton}>Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer;