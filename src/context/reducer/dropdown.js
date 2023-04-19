import { DROPDOWN } from '../action/actionType'

const dropdown = (state = false, action) => {
    switch (action.type) {
        case DROPDOWN:
            state = !state
            return state
        default:
            return state
    }
}

export default dropdown