import React from 'react'
import Timer from './Timer'
import Menu from './Menu'
import '../Styles/App.css'
import Content from './Content'

class App extends React.Component {
    state = {
        contentType: 1,
        beginingTime : {
            beginMinutes : 25,
            beginSeconds : "00",
        },
        timer : "pomodoro"
    }

    changeContent = (option) => {
        this.setState({
            contentType: option
        });
    }

    changeSettings = (option) => {
        if(option === "pomodoro")
        {
            this.setState({
                beginingTime : {
                    beginMinutes: 25,
                    beginSeconds: "00",
                },
            })
        }
        else if(option === "break")
        {
            this.setState({
                beginingTime : {
                    beginMinutes: 5,
                    beginSeconds: "00",
                },
            })
        }
        else 
        {
            this.setState({
                beginingTime : {
                    beginMinutes: 15,
                    beginSeconds: "00",
                }
            })
        }
    }
    
    reset = () => {
        this.setState({
            beginingTime : {
                beginMinutes: this.state.beginingTime.beginMinutes,
                beginSeconds: this.state.beginingTime.beginSeconds,
            }
        })
    }

    render() {
        return (
            <div>
                <Menu 
                    changeContent = {this.changeContent}
                />
                <div>
                    <Timer 
                        beginingTime = {this.state.beginingTime}
                    />
                </div>
                <div>
                    <Content 
                        contentType = {this.state.contentType}
                        changeSettings = {this.changeSettings}
                    />
                </div>
            </div>
        )
    }
}

export default App;