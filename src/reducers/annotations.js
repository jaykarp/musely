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
        default:
            return state
    }
}

export default annotations
