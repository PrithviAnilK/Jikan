import React from 'react'
import '../Styles/Content.css'

class Content extends React.Component {

    getContent = (type) => {
        if(type === 1) // What is the Pomodoro Technique?
        {
            return (
                <div>
                    <h1>What is the Pomodoro Technique?</h1>
                    <p>
                        "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student."
                    </p>
                </div>
            )            
        }
        else if(type === 2)
        {
            return (<div>TO BE DONE</div>)            
        }
        else if(type === 3)
        {
            return (
                <div>
                    <button className = "ui button red" onClick = {() => this.props.changeSettings("pomodoro")}>Pomodoro</button>
                    <button className = "ui button green" onClick = {() => this.props.changeSettings("break")}>Short Break</button>
                    <button className = "ui button blue" onClick = {() => this.props.changeSettings("long")}>Long Break</button>
                </div>
            )            
        }
    }

    render() {
        return (
            <div className = "body content">
                <div className = "ui raised very padded text container segment">
                    {this.getContent(this.props.contentType)}
                </div>
            </div>
        )
    }
}

export default Content;