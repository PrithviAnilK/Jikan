import React from 'react'
import Modal from './Modal';
import history from '../history'

class Settings extends React.Component {
    render() {
        return (
            <Modal 
                type = "settings"
                onDismiss={() => history.push('/')}
            />
        )
    }
}

export default Settings;