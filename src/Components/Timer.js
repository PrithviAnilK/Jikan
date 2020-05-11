// Imports
import React from 'react'
import '../Styles/Timer.css';
import { connect } from 'react-redux'
import { changeCount } from '../actions'



// Helper Functions
const getColor = (isOn) => {
    return isOn ? "red" : "green";
}

const getText = (isOn) => {
    return isOn ? "Stop" : "Start";
}


// Timer Component
class Timer extends React.Component {
    // init State
    state = {
        isOn: false,
        time: {
            minutes: this.props.beginningTime.pomodoro.minutes,
            seconds: this.props.beginningTime.pomodoro.seconds
        },
        timer: setInterval(this.tick, 1000),
        type: 'Pomodoro'
    }

    // *** Helper Functions *** 
    getBeginTime = (type) => {
        if (type === 'Pomodoro') {
            return {
                minutes: this.props.beginningTime.pomodoro.minutes,
                seconds: this.props.beginningTime.pomodoro.seconds
            }
        }
        else if (type === 'Short Break') {
            return {
                minutes: this.props.beginningTime.shortbreak.minutes,
                seconds: this.props.beginningTime.shortbreak.seconds
            }

        }
        else {
            return {
                minutes: this.props.beginningTime.longbreak.minutes,
                seconds: this.props.beginningTime.longbreak.seconds
            }

        }
    }

    tick = () => {
        const time = this.state.time;
        const minutes = time.minutes;
        const seconds = time.seconds;
        if (this.state.isOn) {
            if (minutes == 0 && seconds == 0) {
                alert(`${this.state.type} Done!`);
                this.resetButton(this.state.type);
                if(this.state.type === "Pomodoro")
                {
                    this.props.changeCount(this.props.beginningTime.count);
                }
            }
            else if (seconds == 0) {
                this.setState({
                    time: {
                        minutes: minutes - 1,
                        seconds: 59
                    }
                })
            }
            else {
                this.setState({
                    time: {
                        minutes: minutes,
                        seconds: seconds - 1
                    }
                })
            }
        }
        else {
            clearInterval(this);
        }
    }

    startButton = () => {
        if (this.state.isOn) {
            this.setState({ isOn: false });
            clearInterval(this.state.timer);
        }
        else {
            this.setState({
                isOn: true,
            });
            this.setState({ timer: setInterval(this.tick, 1000) });
        }
    }

    resetButton = () => {
        this.setState({
            time: this.getBeginTime(this.state.type),
            isOn: false
        })
        clearInterval(this.state.timer);
    }

    getHeading = () => {
        if (this.state.isOn) {

            return <div>{this.state.type} in progress...</div>;
        }
        else if (this.state.time.minutes === this.props.beginningTime.pomodoro.minutes) return <div>Start {this.state.type}</div>;
        else if (this.state.time.minutes === this.props.beginningTime.shortbreak.minutes) return <div>Start {this.state.type}</div>;
        else if (this.state.time.minutes === this.props.beginningTime.longbreak.minutes) return <div>Start {this.state.type}</div>;
        else return <div>Continue {this.state.type}</div>;
    }

    changeTimer = (timer) => {
        if (timer === 1) {
            this.resetButton();
            this.setState({
                time: this.getBeginTime("Pomodoro"),
                type: "Pomodoro"
            })
        }
        else if (timer === 2) {
            this.resetButton();
            this.setState({
                time: this.getBeginTime("Short Break"),
                type: "Short Break"
            })
        }
        else {
            this.resetButton();
            this.setState({
                time: this.getBeginTime("Long Break"),
                type: "Long Break"
            })
        }
    }
    // ******

    // Component Functions
    render() {
        return (
            <div className="body">
                <div className="ui raised very padded text container segment">
                    <div className="headerDiv">
                        <h1 className="ui header" id="heading">{this.getHeading()}</h1>
                    </div>
                    <h4 className="ui horizontal divider header">
                        <span role="img" aria-label="tomato">Timer</span>
                    </h4>
                    <h1 className="ui header" id="time">{this.state.time.minutes + ":" + this.state.time.seconds}</h1>
                    <div className="two ui buttons">
                        <button className={`ui button ${getColor(this.state.isOn)}`} onClick={this.startButton}>{getText(this.state.isOn)}</button>
                        <button className="ui button black" onClick={this.resetButton}>Reset</button>
                    </div>
                    <h4 className="ui horizontal divider header">
                        <span role="img" aria-label="tomato">Options</span>
                    </h4>
                    <div className="three ui buttons">
                        <button className="ui button red" onClick={() => this.changeTimer(1)}>Pomodoro</button>
                        <button className="ui button green" onClick={() => this.changeTimer(2)}>Short Break</button>
                        <button className="ui button blue" onClick={() => this.changeTimer(3)}>Long Break</button>
                    </div>
                    <h4 className="ui horizontal divider header">
                        <span role="img" aria-label="Count">Count</span>
                    </h4>
                    <div className="ui header">
                        Number of Pomodoro Sessions done today: {this.props.beginningTime.count}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        beginningTime : state.beginningTime
    }
}

export default connect(
    mapStateToProps,
    { changeCount }
)(Timer)