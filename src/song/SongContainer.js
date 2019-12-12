
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
    Loader,
    Dropdown
  } from 'semantic-ui-react';
  import 'semantic-ui-css/semantic.min.css';

import Note from './Note';
import { NotesConsumer } from '../NotesContext.js';
import { thisExpression } from '@babel/types';
import Waveform from './MyWaveform';


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

const NotesOptionsButtonsContainer = styled.div`
    /* display: flex;
    flex-direction: row;
    text-align: right; */
    /* justify-content: flex-end;
    align-items: space-between; */
    position: relative;
    /* height: 5rem; */
    width: 95%;
    margin: auto;
    margin-bottom: 5rem;
`

const RightButtonsContainer = styled.div`
    position: absolute;
    right: 10px;
    display: flex;
    flex-direction: row;
`

const DropDownBox = styled.div`
    margin-right: 5px;
    margin-left: 5px;
`

class SongContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected_groups: [],
            playing: false,
            pos: 0
        };

        
    }

    componentDidMount() {
        console.log(NotesConsumer);
    }

    handleDropDownSelect = (e) => {
        console.log('EEEEEEE', e);
    }

    handlePosChange = (e) => {
        this.setState({
            pos: e.originalArgs[0]
        });
    }

    handleTogglePlay = () => {
        this.setState({
          playing: !this.state.playing
        });
    }

    handleSearchChange = (e, data) => {
        console.log(data.value);
        if (data.value.length > this.state.selected_groups.length) 
            this.setState({
                selected_groups: [...this.state.selected_groups, data.value[data.value.length-1]]
            })
        else {
            var array = [...this.state.selected_groups];
            var index = array.length-1;
            if (index !== -1) {
                array.splice(index, 1);
                this.setState({
                    selected_groups: array
                });
            }
            
        }
            
    }

    render() {

        

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

        const song_name = "Ave_Maria" // get it from props probably

        const countryOptions = [
            { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
            { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
        ]

        return(
            <div>
                {/* <Header as="h1">Hello World</Header> */}
                
                <SongHeader>{song_name}</SongHeader>

                <Waveform
                    src={`/${song_name}.mp3`}
                    pos={this.state.pos}
                    onPosChange={this.handlePosChange}
                    playing={this.state.playing}
                />

                
                
                <SongHeader>Notes</SongHeader>

                

                
                <NotesConsumer>
                    {data => {
                        
                        const cur_song_notes = data.notes[song_name];
                        console.log('THIS SONG', cur_song_notes && cur_song_notes.user_notes);
                        let group_options = [];
                        var groupSet = new Set();
                        cur_song_notes && cur_song_notes.user_notes.map((elem, i) => {
                            if (!groupSet.has(elem.group)) {
                                var option = { key: i, value: elem.group, text: elem.group}
                                group_options = [...group_options, option];
                                groupSet.add(elem.group);
                            }
                            
                        })

                        return (
                            <React.Fragment>
                            <NotesOptionsButtonsContainer>
                                <RightButtonsContainer>
                                    <Button color='blue'>Add Note</Button>
                                    <Button negative={true}>Remove Note</Button>
                                    <DropDownBox>
                                        <Dropdown
                                            placeholder='Display Group'
                                            search
                                            selection
                                            multiple
                                            options={group_options}
                                            onChange={this.handleSearchChange}
                                        />
                                    </DropDownBox>
                                    
                                    <DropDownBox>
                                        <Dropdown
                                            placeholder='Sort by'
                                            item={true}
                                            search
                                            selection
                                            options={countryOptions}
                                        />
                                    </DropDownBox>
                                </RightButtonsContainer>
                            </NotesOptionsButtonsContainer>
                            
                            <NoteContaienr>
                            
                            {cur_song_notes && cur_song_notes.user_notes.map( (elem, i) => {
                                console.log(this.state.selected_groups);
                                if (this.state.selected_groups.length == 0) {
                                    return <Note key={i} title={elem.title} text={elem.body} time={elem.start_time}/>
                                } else if (this.state.selected_groups.includes(elem.group)) {
                                    return <Note key={i} title={elem.title} text={elem.body} time={elem.start_time}/>
                                }
                                
                            })}

                            </NoteContaienr>
                            </React.Fragment>
                        ); // end return
                    }} 
                </NotesConsumer>
                
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
