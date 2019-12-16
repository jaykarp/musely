import { combineReducers } from 'redux'
import annotations from './annotations'
import notes from './notes'
import tags from './tags'
import toggle from './toggle'
import song from './song'

export default combineReducers({
    annotations: annotations,
    notes: notes,
    tags: tags,
    toggle: toggle,
    song: song
})
