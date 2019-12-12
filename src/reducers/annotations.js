const annotations = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ANNOTATION':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    start_time: action.start_time,
                    end_time: action.end_time,
                    tags: action.tags
                }
            ]
        case 'UPDATE_ANNOTATION':
            const id = state.findIndex(e => e.id === action.id)
            if (id === -1) {
                throw Object.assign(
                    new Error('Must assign ID to update annotation'),
                    { code: 406 }
                )
            }
            state[id] = {
                id: action.id,
                text: action.text || state[id].text,
                start_time: action.start_time || state[id].start_time,
                end_time: action.end_time || state[id].end_time,
                tags: action.tags || state[id].tags
            }
            return state
        default:
            return state
    }
}

export default annotations
