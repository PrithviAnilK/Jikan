import React from 'react';
import { connect } from 'react-redux'
import {changePomodoro, changeShortBreak, changeLongBreak} from '../actions'
import history from '../history';


class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.pomodoro = React.createRef();
        this.shortbreak = React.createRef();
        this.longbreak = React.createRef();
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.pomodoro.current.value !== "") this.props.changePomodoro(this.pomodoro.current.value);
        if(this.shortbreak.current.value !== "") this.props.changeShortBreak(this.shortbreak.current.value);
        if(this.longbreak.current.value !== "") this.props.changeLongBreak(this.longbreak.current.value);
        history.push('/Jikan');
    }


    render() {
        return (
            <div className="body">
                <div className="ui raised very padded text container segment">
                    <h1>Settings</h1>
                    <form className = "ui form" onSubmit = {this.onSubmit}> 
                        <div style = {{margin: '20px'}}>
                            <h3>Pomodoro Length</h3>
                            <input className = "ui input fluid" ref = {this.pomodoro} placeholder = {this.props.beginningTime.pomodoro.minutes}></input>
                            <h3>Short Break Length</h3>
                            <input className = "ui input fluid" ref = {this.shortbreak} placeholder = {this.props.beginningTime.shortbreak.minutes}></input>
                            <h3>Long Break Length</h3>
                            <input className = "ui input fluid" ref = {this.longbreak} placeholder = {this.props.beginningTime.longbreak.minutes}></input>
                        </div>
                        <button className = "ui button primary">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

// export default Settings;

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        beginningTime: state.beginningTime
    }
}


export default connect(mapStateToProps, { changePomodoro, changeShortBreak, changeLongBreak })(Settings);