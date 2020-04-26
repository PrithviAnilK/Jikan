import React from 'react'

class Menu extends React.Component {
    render() {
        return (
            <div>
                <div className =" ui menu">
                    <div className = "header item"><a href = "/" style = {{color: "black"}}>Jikan</a></div>
                    <div className = "ui dropdown item right">                        
                        <span>
                            Options
                        </span>
                        <i className = "dropdown icon"></i>
                        <div className = "menu">
                            <a className = "item" href = "/">What is the Pomodoro Technique?</a>
                            <div className = "divider"></div>
                            <a className = "item" href = "/">Stats</a>
                            <a className = "item" href = "/">Settings</a>
                            <div className = "divider"></div>
                            <a className = "item" href = "https://github.com/PrithviAnilK/Jikan">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;