import React, { Component } from 'react';
import styled from 'styled-components';
import {
    Container,
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
    Image,
    Menu,
    Dimmer,
    Loader
  } from 'semantic-ui-react';
  import 'semantic-ui-css/semantic.min.css';
import Note from './Note';
import { NotesConsumer } from '../NotesContext.js';


const SongHeader = styled.h1`
    padding-left: 3rem;
    padding-top: 2rem;
    font-size: 50px;
    color: black;
`

const NoteContaienr = styled.div`
    display: flex;
    flex-wrap: wrap;             
    justify-content: space-around;
    width: 95%;
    margin: auto;
`


class SongContainer extends Component {

    componentDidMount() {
        console.log(NotesConsumer);
    }

    render() {

        const song_name = "Song_Name"

        const notes_data = [
            {
                title: "This Note",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus, cursus convallis aliquet enim enim in tincidunt.",
                time: "00:23-01:06"
            },
            {
                title: "This Note",
                text: "Lorem ipsum dolor sit amet.",
                time: "00:23-01:06"
            },
            {
                title: "This Note",
                text: "Lorem ipsum dolor sit amet.",
                time: "00:23-01:06"
            },
            {
                title: "This Note",
                text: "Lorem ipsum dolor sit amet.",
                time: "00:23-01:06"
            },
            {
                title: "This Note",
                text: "Lorem ipsum dolor sit amet.",
                time: "00:23-01:06"
            },
            {
                title: "This Note",
                text: "Lorem ipsum dolor sit amet.",
                time: "00:23-01:06"
            },
        ]

        const notes = notes_data.map((elem, i) => {
            return <Note key={i} title={elem.title} text={elem.text} time={elem.time}/>
        })

        const USR_NOTES = "user_notes"

        return(
            <div>
                {/* <Header as="h1">Hello World</Header> */}
                <SongHeader>{song_name}</SongHeader>
                <SongHeader>Notes</SongHeader>
                <NoteContaienr>
                    <NotesConsumer>
                        {data => {
                            
                            const cur_song_notes = data.notes[song_name];
                            {/* console.log('Data', Object.getOwnPropertyNames(data) ); */}
                            console.log('THIS SONG', cur_song_notes && cur_song_notes.user_notes);

                            return cur_song_notes && cur_song_notes.user_notes.map( (elem, i) => {
                                console.log('ELEM', elem.title);
                                return <Note key={i} title={elem.title} text={elem.body} time={elem.start_time}/>
                            })
                        }}
                    </NotesConsumer>
                </NoteContaienr>
                    {/* {notes} */}
                    {/* <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note /> */}
                
                
            </div>
        );
    }
}

export default SongContainer;
