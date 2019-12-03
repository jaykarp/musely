import React, { Component } from 'react';
import styled from 'styled-components';
import {
    Button,
    Popup
  } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { NotesConsumer } from '../NotesContext';


const Background = styled.div`
    /* position: relative; */
    margin: 5px 5px 5px 5px;
    padding: 1rem 1rem 1rem 1rem;
    background-color: #EEEEEE;
    box-shadow: 5px 5px 5px;
    width: 30vw;
    height: 16vh;
`

const NoteTitle = styled.h3`
    /* padding-top: 1rem;
    padding-left: 0.5rem; */
    color: black;
    margin: 0 0 0 0;
`

const TimeStamp = styled.h3`
    color: black;
    margin: 0 0 0 0;
`

const NoteHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.5rem;
`

const NoteButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`


class Note extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <NotesConsumer>
                    {data => (
                        <Background>
                            <NoteHeader>
                                <NoteTitle>{this.props.title}</NoteTitle>
                                <TimeStamp>{this.props.time}</TimeStamp>
                            </NoteHeader>
                
                            <p>{this.props.text}</p>
                            <NoteButtonContainer>
                                <Popup content='Add note to group' trigger={<Button icon='add' />} />
                            </NoteButtonContainer>
                        </Background>
                    )}  
                </NotesConsumer>
            </div>
            
        );
    }
}

export default Note;
