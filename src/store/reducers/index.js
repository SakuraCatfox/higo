import {combineReducers} from 'redux'
import detail from './detail'
let initState = {
    count: 0
}
let reducer = (state = initState, action) => {
    if (action.type == 'ADD') {
        return {count: state.count + 1}
    } else {
        return {count: state.count - 1}
    }
    return state
}
export default combineReducers({
    detail,
    reducer
})