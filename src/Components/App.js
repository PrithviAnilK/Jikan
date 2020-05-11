import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from '../history'
import Timer from './Timer'
import Menu from './Menu'
import '../Styles/App.css'
import Description from './Description'
import Settings from './Settings'


const App = () => {
    return(
        <div>
            <Router history = {history}>
                <div>
                    <Menu />
                    <Route path="/Jikan" exact component={Timer} />
                    <Route path="/Jikan/description" exact component={Description} />
                    <Route path="/Jikan/settings" exact component={Settings} />
                </div>
            </Router>
        </div>
    )
}

export default App;