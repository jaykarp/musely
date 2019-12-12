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
            //const id = state.findIndex(e => e.id === action.id)
            return state.map((ann, i) => {
                if (i !== action.id) {
                    return ann
                }
                return {
                    id: action.id,
                    text: action.text || ann.text
                }
            })
        default:
            return state
    }
}

export default notes
