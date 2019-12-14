const tags = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TAG':
            if (state.findIndex(tag => tag.name === action.name) === -1) {
                return [
                    ...state,
                    {
                        count: 1,
                        name: action.name
                    }
                ]
            }
            return state.map(tag => {
                if (tag.name === action.name) {
                    return {
                        count: ++tag.count,
                        name: action.name
                    }
                }
                return tag
            })
        case 'DELETE_TAG':
            return state
                .filter(tag => {
                    if (tag.name === action.name) {
                        if (tag.count === 1) {
                            return false
                        }
                        if (tag.count > 1) {
                            return true
                        }
                    }
                    return true
                })
                .map(tag => {
                    if (tag.name === action.name) {
                        return {
                            count: --tag.count,
                            name: action.name
                        }
                    }
                    return tag
                })
        default:
            return state
    }
}

export default tags
