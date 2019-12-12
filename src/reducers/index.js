import { combineReducers } from 'redux'
import annotations from './annotations'
import notes from './notes'

export default combineReducers({
    annotations,
    notes
})
