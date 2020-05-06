import React from 'react'
import Modal from './Modal';
import history from '../history'


const Description = () => {
    return (
        <Modal 
            type = "description"
            onDismiss={() => history.push('/')}
        />
    )
}

export default Description;