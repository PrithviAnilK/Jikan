import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
    render() {
        return (
            <div className = "ui menu">
                    <div className = "header item"><Link to = "/" style = {{color: "black"}}>Jikan</Link></div>
                <div className = "right menu">
                    <Link className = "header item" to = "/description">What is Jikan?</Link>
                    <Link className = "header item" to = "/Settings"><i className="settings icon"></i></Link>
                    <a className = " header item" href = "https://github.com/PrithviAnilK/Jikan"><i className="github icon large"></i></a>
                </div>
            </div>
        )
    }
}

export default Menu;