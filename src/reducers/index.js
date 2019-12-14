import { combineReducers } from 'redux'
import annotations from './annotations'
import notes from './notes'
import tags from './tags'

export default combineReducers({
    annotations: annotations,
    notes: notes,
    tags: tags
})
