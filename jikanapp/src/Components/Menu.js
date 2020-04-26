import React from 'react'
import '../Styles/Menu.css'

class Menu extends React.Component {
    render() {
        return (
            <div className = "ui menu">
                <div className = "header item"><a href = "/" style = {{color: "black"}}>Jikan</a></div>
                <div onClick = {() => this.props.changeContent(1)} className = "header item">What is the Pomodoro Technique?</div>
                <div className = "right menu">
                    <div onClick = {() => this.props.changeContent(2)} className = "header item">Stats</div>
                    <div onClick = {() => this.props.changeContent(3)} className = "header item">Settings</div>
                </div>
                <a className = " header item" href = "https://github.com/PrithviAnilK/Jikan">Github</a>
            </div>
        )
    }
}

export default Menu;