import React, { Component } from 'react';
import { NotesData } from './NotesData';

const NotesContext = React.createContext();

class NotesProvider extends Component {
    state = {
        notes: {},
        current_group: ""
    }

    componentDidMount() {
        console.log('CONTEXT DID MOUNT');
        this.resetNotes();
    }

    resetNotes = () => {
        let incomingNotes = {};
        Object.keys(NotesData).forEach( song => {
            const keyName = song;                                   // Get the name of the song from data
            const target = { [keyName] : NotesData[song]};          // Make an object with key value equal to variable `keyName`
            incomingNotes = Object.assign(target, incomingNotes)    // append that object to `incomingNotes` object
        });
        this.setState({
            notes: incomingNotes
        });
    }

    render() {
        return(
            <NotesContext.Provider value={{
                ...this.state,
            }}>
                {this.props.children}
            </NotesContext.Provider>
        );
    }
}

// Consumer is implemented in components

const NotesConsumer = NotesContext.Consumer;

export { NotesProvider, NotesConsumer };