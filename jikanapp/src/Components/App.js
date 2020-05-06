import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Timer from './Timer'
import Menu from './Menu'
import '../Styles/App.css'


const App = () => {
    return(
        <div>
            <Router>
                <div>
                    <Menu />
                    <Route path="/" exact component={Timer} />
                </div>
            </Router>
        </div>
    )
}

export default App;