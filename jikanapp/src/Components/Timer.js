// imports
import React from 'react'
import '../Styles/Timer.css';


// init
const beginMinutes = 25,
      beginSeconds = "00";


// Timer Component
class Timer extends React.Component {
    state = {
        isOn : false,
        time: {
            minutes: beginMinutes,
            seconds: beginSeconds
        },
        timer: setInterval(this.tick, 1000)
    }

    getTime = (time) => {
        const minutes = time.minutes;
        const seconds = time.seconds;
        if(minutes == 0 && seconds == 0) 
        {
            alert("Session Done!");
            this.setState({
                isOn: false
            });
            return ({
                minutes: beginMinutes,
                seconds: beginSeconds
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
                minutes: beginMinutes,
                seconds: beginSeconds
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