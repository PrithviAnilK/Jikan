// imports
import React from 'react'
import '../Styles/Timer.css';

// helper
const getColor = (isOn) => {
    return isOn ? "red":"green";
}

const getText = (isOn) => {
    return isOn ? "Stop":"Start";
}


// Timer Component
class Timer extends React.Component {
    state = {
        isOn : false,
        time: {
            minutes: this.props.beginingTime.beginMinutes,
            seconds: this.props.beginingTime.beginSeconds
        },
        timer: setInterval(this.tick, 1000)
    }

    getTime = (time) => {
        const minutes = time.minutes;
        const seconds = time.seconds;
        if(minutes == 0 && seconds == 0) 
        {
            alert("Pomodoro Done!");
            this.setState({
                isOn: false
            });
            return ({
                minutes: this.props.beginingTime.beginMinutes,
                seconds: this.props.beginingTime.beginSeconds
            })
        }
        if(seconds == 0) 
        {
            return ({
                minutes: minutes - 1,
                seconds: 59
            })
        }
        else 
        {
            return ({
                minutes: minutes,
                seconds: seconds - 1
            })
        }
    }


    tick = () => {
        if(this.state.isOn)
        {
            this.setState({
                time: this.getTime(this.state.time) 
            })
        }
        else 
        {
            clearInterval(this);
        }
    }

    startButton = () => {
        if(this.state.isOn) 
        {
            this.setState({isOn: false});
            clearInterval(this.state.timer);
        }
        else 
        {
            this.setState({
                isOn: true,
            });
            this.setState({timer: setInterval(this.tick, 1000)});
        }
    }
    
    resetButton = () => {
        this.setState({
            time: {
                minutes: this.props.beginingTime.beginMinutes,
                seconds: this.props.beginingTime.beginSeconds
            },
            isOn: false
        })
        clearInterval(this.state.timer);
    }

    getHeading = () => {
        if(this.state.isOn) return "Pomodoro in progress...";
        else if(this.state.time.minutes === this.props.beginingTime.beginMinutes && this.state.time.seconds === this.props.beginingTime.beginSeconds) return "Start Pomodoro!";
        else return "Continue Pomodoro...";
    }

    render() {
        return (
            <div className = "body">
                <div className = "ui raised very padded text container segment">
                <div className = "headerDiv">
                    <h1 className = "ui header" id = "heading">{this.getHeading()}</h1>
                </div>
                <h4 className = "ui horizontal divider header">
                    <span role = "img" aria-label = "tomato">🍅</span>
                </h4>
                    <h1 className = "ui header" id = "time">{this.state.time.minutes + ":" + this.state.time.seconds}</h1>
                <h4 className = "ui horizontal divider header">
                    <span role = "img" aria-label = "tomato">🍅</span>
                </h4>
                    <div className ="three ui buttons">
                        <button className = {`ui button ${getColor(this.state.isOn)}`} onClick = {this.startButton}>{getText(this.state.isOn)}</button>
                        <button className = "ui button black" onClick = {this.resetButton}>Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer;