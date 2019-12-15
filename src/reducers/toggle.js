const toggle = (state = { isEditing: false, id: null }, action) => {
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
