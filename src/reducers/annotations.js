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
                    tag: action.tag
                }
            ]
        case 'UPDATE_ANNOTATION':
            return state.map((ann, i) => {
                if (ann.id !== action.id) {
                    return ann
                }
                return {
                    id: action.id,
                    text: action.text || ann.text,
                    start_time: action.start_time || ann.start_time,
                    end_time: action.end_time || ann.end_time,
                    tag: action.tag || ann.tag
                }
            })
        case 'DELETE_ANNOTATION':
            return state.filter(a => a.id !== action.id)
        default:
            return state
    }
}

export default annotations
