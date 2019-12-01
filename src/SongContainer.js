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
`


class SongContainer extends Component {

    render() {

        const song_name = "Ave Maria"

        return(
            <div>
                {/* <Header as="h1">Hello World</Header> */}
                <SongHeader>{song_name}</SongHeader>
                <SongHeader>Notes</SongHeader>
                <NoteContaienr>
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                    <Note />
                </NoteContaienr>
                
            </div>
        );
    }
}

export default SongContainer;