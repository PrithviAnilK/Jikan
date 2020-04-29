import React from 'react'

class Menu extends React.Component {
    render() {
        return (
            <div className = "ui menu">
                    <div className = "header item"><a href = "/" style = {{color: "black"}}>Jikan</a></div>
                <div className = "right menu">
                    <a className = " header item" href = "https://github.com/PrithviAnilK/Jikan">Github</a>
                </div>
            </div>
        )
    }
}

export default Menu;