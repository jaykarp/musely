const notes = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ]
        case 'UPDATE_NOTE':
            return state.map(note => {
                if (note.id !== action.id) {
                    return note
                }
                return {
                    id: action.id,
                    text: action.text || note.text
                }
            })
        case 'DELETE_NOTE':
            return state.filter(note => {
                if (note.id === action.id) {
                    return false
                }
                return true
            })
        default:
            return state
    }
}

export default notes
