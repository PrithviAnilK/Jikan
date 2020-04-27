import React from 'react'

class Menu extends React.Component {
    render() {
        return (
            <div className = "ui menu">
                <div className = "header item"><a href = "/" style = {{color: "black"}}>Jikan</a></div>
                <div className = "header item">What is the Pomodoro Technique?</div>
                <div className = "right menu">
                    <div className = "header item">Stats</div>
                    <div className = "header item">Settings</div>
                </div>
                <a className = " header item" href = "https://github.com/PrithviAnilK/Jikan">Github</a>
            </div>
        )
    }
}

export default Menu;