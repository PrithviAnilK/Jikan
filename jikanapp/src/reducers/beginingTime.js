import {
    CHANGE_POMODORO,
    CHANGE_SHORT_BREAK,
    CHANGE_LONG_BREAK
} from '../actions/types'

const beginingTime = {
    pomodoro: {
        minutes: 25,
        seconds: "00"
    },
    
    shortbreak: {
        minutes: 5,
        seconds: "00"
    },
    
    longbreak: {
        minutes: 15,
        seconds: "00"
    }
}

export default (state = beginingTime, action) => {
    switch(action.type)
    {
        case CHANGE_POMODORO:
            return {...state, pomodoro: action.payload}
            
        case CHANGE_SHORT_BREAK:
            return {...state, shortbreak: action.payload}
                
        case CHANGE_LONG_BREAK:
            return {...state, longbreak: action.payload}
        
        default: 
            return state
    }
}