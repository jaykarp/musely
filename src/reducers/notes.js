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
            const id = state.findIndex(e => e.id === action.id)
            if (id === -1) {
                throw Object.assign(
                    new Error('Must assign ID to update note'),
                    { code: 406 }
                )
            }
            state[id] = {
                id: action.id,
                text: action.text
            }
            return state
        default:
            return state
    }
}

export default notes
