import React from'react'
import ReactDom from 'react-dom'
import '../Styles/Modal.css'

const Modal = (props) => {
    const renderModal = () => {
        return (
            <>
                <div className = "content">
                    <h1>Jikan is a Pomodoro Timer made in React.js and Redux</h1>
                    <p>
                        The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student - <a href = "https://en.wikipedia.org/wiki/Pomodoro_Technique">Wikipedia</a>
                    </p>
                    <p>
                        I use the pomodoro technique everyday of my life to stay more productive and I think it has worked wonders for me. So when I learnt React JS, I decided to make a small Pomodoro Timer web app.
                    </p>
                    <h1>
                        How to use the Pomodoro Technique in Jikan?
                    </h1>
                    <ul>
                        <li>Decide on the task to be done.</li>
                        <li>Set the pomodoro timer to Pomodoro mode (25 Minutes)</li>
                        <li>Work on the task.</li>
                        <li>Once the timer is up take a short break (5 Minutes). Once done, start a new task.</li>
                        <li>After four pomodoros, take a long break (15 Minutes).</li>
                        <li>Repeat</li>
                    </ul>
                </div>
            </>
        )
    }

    return ReactDom.createPortal(
        <div className = "ui dimmer modals visible active" onClick = {() => props.onDismiss()}> 
            <div className = "ui standard modal visible active" onClick = {(event) => event.stopPropagation()}>
                {renderModal()}
            </div>
        </div>,       
        document.querySelector("#modal") 
    );
}

export default Modal;