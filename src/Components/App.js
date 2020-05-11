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
                    <Route path="/" exact component={Timer} />
                    <Route path="/description" exact component={Description} />
                    <Route path="/settings" exact component={Settings} />
                </div>
            </Router>
        </div>
    )
}

export default App;