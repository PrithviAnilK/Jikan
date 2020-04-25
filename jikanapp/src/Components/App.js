import React from 'react'
import Timer from './Timer'
import Menu from './Menu'


class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <div><Timer /></div>
            </div>
        )
    }
}

export default App;