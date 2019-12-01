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

    render() {

        const song_name = "Ave Maria"

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

        const notes = notes_data.map(elem => {
            return <Note title={elem.title} text={elem.text} time={elem.time}/>
        })

        return(
            <div>
                {/* <Header as="h1">Hello World</Header> */}
                <SongHeader>{song_name}</SongHeader>
                <SongHeader>Notes</SongHeader>
                <NoteContaienr>
                    {notes}
                    {/* <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note /> */}
                </NoteContaienr>
                
            </div>
        );
    }
}

export default SongContainer;