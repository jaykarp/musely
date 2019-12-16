const song = (state = null, action) => {
    switch (action.type) {
        case 'SET_CURRENT_SONG':
            return action.name
        default:
            return state
    }
}

export default song
