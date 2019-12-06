import React, { Component } from 'react'
import { NotesData } from './NotesData'

const NotesContext = React.createContext()

class NotesProvider extends Component {
    state = {
        notes: {},
        current_group: ''
    }

    componentDidMount() {
        console.log('CONTEXT DID MOUNT')
        this.resetNotes()
    }

    resetNotes = () => {
        let incomingNotes = {}
        Object.keys(NotesData).forEach(song => {
            // Get the name of the song from data
            const keyName = song
            // Make an object with key value equal to variable `keyName`
            const target = { [keyName]: NotesData[song] }
            // append that object to `incomingNotes` object
            incomingNotes = Object.assign(target, incomingNotes)
        })
        this.setState({
            notes: incomingNotes
        })
    }

    render() {
        return (
            <NotesContext.Provider
                value={{
                    ...this.state
                }}
            >
                {this.props.children}
            </NotesContext.Provider>
        )
    }
}

// Consumer is implemented in components

const NotesConsumer = NotesContext.Consumer

export { NotesProvider, NotesConsumer }

