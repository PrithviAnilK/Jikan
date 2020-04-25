import React from 'react'
import '../Styles/Timer.css';

const getTime = (time) => {
    const minutes = time.minutes;
    const seconds = time.seconds;
    if(minutes == 0 && seconds == 0) 
    {
        alert("Session Done!");
        return ({
            minutes: 25,
            seconds: 0
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


class Timer extends React.Component {
    state = {
        isOn : false,
        time: {
            minutes: 25,
            seconds: "00"
        },
        timer: setInterval(this.tick, 1000)
    }

    tick = () => {
        if(this.state.isOn)
        {
            this.setState({
                time: getTime(this.state.time) 
            })
        }
        else 
        {
            clearInterval(this);
        }
    }

    startButton = () => {
        if(this.state.isOn) return ;
        this.setState({
            isOn: true,
        });
        this.setState({timer: setInterval(this.tick, 1000)});
    }
    
    stopButton = () => {
        this.setState({isOn: false});
        clearInterval(this.state.timer);
    }
    
    resetButton = () => {
        this.setState({
            time: {
                minutes: 25,
                seconds: "00"
            },
            isOn: false
        })
        clearInterval(this.state.timer);
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