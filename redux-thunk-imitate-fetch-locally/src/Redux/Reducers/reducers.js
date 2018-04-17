import {GETEMPLOYES} from '../Constants/constants'

const initState = {
    users: []
}

const reducers = (state = initState, action) => {
    switch(action.type) {
        case GETEMPLOYES: return {users: action.payload}
        default: return state
    }
}

export default reducers