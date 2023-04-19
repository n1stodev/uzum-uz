import { combineReducers } from "redux";
import heart from "./heart";
import dropdown from './dropdown'

const rootReducer = combineReducers({
    water() { return 'Redux water' },
    heart,
    dropdown,
})

export default rootReducer