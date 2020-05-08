import {
    CHANGE_POMODORO,
    CHANGE_SHORT_BREAK,
    CHANGE_LONG_BREAK,
    CHANGE_COUNT
} from './types'


export const changePomodoro = (time) => {
    return {
        type: CHANGE_POMODORO,
        payload: {
            minutes: time,
            seconds: "00" 
        } 
    }
}

export const changeShortBreak = (time) => {
    return {
        type: CHANGE_SHORT_BREAK,
        payload: {
            minutes: time,
            seconds: "00" 
        }    
    }
}

export const changeLongBreak = (time) => {
    return {
        type: CHANGE_LONG_BREAK,
        payload: {
            minutes: time,
            seconds: "00" 
        }    
    }
}

export const changeCount = (count) => {
    return {
        type: CHANGE_COUNT,
        payload: count
    }
}
