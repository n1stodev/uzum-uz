import { combineReducers } from "redux";
import heart from "./heart";
import dropdown from './dropdown'
import cart from './cart'

const rootReducer = combineReducers({
    water() { return 'Redux water' },
    heart,
    dropdown,
    cart
})

export default rootReducer