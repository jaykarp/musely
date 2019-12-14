const toggle = (state = {}, action) => {
    switch (action.type) {
        case 'TOGGLE_ANNOTATION':
            return Object.assign(
                {},
                {
                    isEditing: action.isEditing,
                    id: action.id
                }
            )
        default:
            return state
    }
}

export default toggle
