import React from 'react'
import Modal from './Modal';
import history from '../history'


const Description = () => {
    return (
        <Modal 
            onDismiss={() => history.goBack()}
        />
    )
}

export default Description;