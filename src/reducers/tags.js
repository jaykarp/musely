const tags = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TAG':
            return [
                ...state,
                {
                    tag_name: action.tag_name,
                    count: 0
                }
            ]
        case 'INCREMENT_TAG':
            return state.map((tag) => {
                if (tag.tag_name !== action.tag_name) {
                    return tag
                }
                return {
                    tag_name: action.tag_name || tag.tag_name,
                    count: tag.count + 1 || 0
                }
            })
        case 'DECREMENT_TAG':
            return state.map((tag) => {
                if (tag.tag_name !== action.tag_name) {
                    return tag
                }
                return {
                    tag_name: action.tag_name || tag.tag_name,
                    count: tag.count - 1 || 0
                }
            })
        case 'DELETE_TAG':
            return state.filter((tag) => tag.tag_name !== action.tag_name)
        default:
                return state
    }
}