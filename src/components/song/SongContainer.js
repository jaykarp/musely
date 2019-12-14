import React, { Component } from 'react'
import styled from 'styled-components'
import 'semantic-ui-css/semantic.min.css'
// import Note from './Note'
import Waveform from './Waveform'
import AnnotationContainer from './AnnotationContainer'
import NotesContainer from './NotesContainer'
import EditAnnotation from './EditAnnotation'
import TimelineTag from './TimelineTag'
import { connect } from 'react-redux'
import { addAnnotation, addTag } from '../../actions'

const SongHeader = styled.h1`
    padding-left: 3rem;
    padding-top: 2rem;
    font-size: 50px;
    color: black;
`

const SongWrapper = styled.div`
    position: relative;
    height: 100%;
    background-color: rgb(233, 233, 233);
`

const TagTimelineWrapper = styled.div`
    width: 80%;
    height: auto;
    margin: auto;
`

class SongContainer extends Component {
    constructor(props) {
        super(props)
        this.handleCursor = this.handleCursor.bind(this)
        this.handleCursorMove = this.handleCursorMove.bind(this)
        this.handleRegion = this.handleRegion.bind(this)
        this.handlePlay = this.handlePlay.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleTagChange = this.handleTagChange.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.getSongDuration = this.getSongDuration.bind(this)

        this.state = {
            playing: false,
            annotationDrawerIsOpen: true,
            notesDrawerIsOpen: true,
            text: '',
            start_time: 0,
            end_time: 0,
            cursorTime: 0,
            currentTime: 0,
            tag: '',
            songDuration: 1,
            selectedTag: 'Afghanistan'
        }
    }

    handleCursor = data => {
        let curr = parseInt(data.currentTime)
        if (data.region) {
            this.setState({
                currentTime: curr
            })
        } else {
            this.setState({
                start_time: curr,
                end_time: curr + 10,
                currentTime: curr
            })
        }
    }

    handleCursorMove = currentTime => {
        let curr = parseInt(currentTime)
        this.setState({
            cursorTime: curr
        })
    }

    handleRegion = ({ start, end }) => {
        this.setState({
            start_time: start,
            end_time: end
        })
    }

    handlePlay = currentTime => {
        this.setState({
            currentTime: currentTime
        })
    }

    handleTogglePlay = () => {
        this.setState({
            playing: !this.state.playing
        })
    }

    handleSave = () => {
        let hasAnnotation = false
        const { dispatch } = this.props
        if (hasAnnotation) {
            // TODO: Implement update annotation
        } else {
            dispatch(
                addAnnotation({
                    text: this.state.text,
                    start_time: this.state.start_time,
                    end_time: this.state.end_time,
                    tag: this.state.tag
                })
            )
            dispatch(
                addTag({
                    name: this.state.tag
                })
            )
        }
    }

    handleTagChange = (e, data) => {
        this.setState({
            tag: data.value
        })
    }

    handleTextChange = (e, data) => {
        e.preventDefault()
        this.setState({
            text: data.value
        })
    }

    getSongDuration = data => {
        this.setState({
            songDuration: data
        })
    }

    render() {
        const { name } = this.props.match.params
        return (
            <SongWrapper>
                <SongHeader>{name}</SongHeader>
                <Waveform
                    //src={`/${name}.mp3`}
                    src={'/jeneregretterien.mp3'}
                    currentTime={this.state.currentTime}
                    cursorTime={this.state.cursorTime}
                    handlePlay={this.handlePlay}
                    handleCursor={this.handleCursor}
                    handleCursorMove={this.handleCursorMove}
                    handleRegion={this.handleRegion}
                    getSongDuration={this.getSongDuration}
                />
                <TagTimelineWrapper>
                    <TimelineTag duration={this.state.songDuration} />
                </TagTimelineWrapper>
                <EditAnnotation
                    handleSave={this.handleSave}
                    handleTagChange={this.handleTagChange}
                    handleTextChange={this.handleTextChange}
                    start_time={this.state.start_time}
                    end_time={this.state.end_time}
                />
                <SongHeader>Notes</SongHeader>
                <button
                    onClick={() => {
                        this.setState({
                            annotationDrawerIsOpen: !this.state
                                .annotationDrawerIsOpen
                        })
                    }}
                >
                    Open Annotations
                </button>

                <button
                    onClick={() => {
                        this.setState({
                            notesDrawerIsOpen: !this.state.notesDrawerIsOpen
                        })
                    }}
                >
                    Open Note
                </button>

                <div
                    style={{
                        display: 'inline-flex',
                        marginTop: '10px',
                        width: '100%'
                    }}
                >
                    <AnnotationContainer
                        isOpen={this.state.annotationDrawerIsOpen}
                        notesOpen={this.state.notesDrawerIsOpen}
                        selectedTag={this.state.selectedTag}
                    />
                    <NotesContainer
                        isOpen={this.state.notesDrawerIsOpen}
                        annoOpen={this.state.annotationDrawerIsOpen}
                    />
                </div>
            </SongWrapper>
        )
    }
}
const mapStateToProps = state => {
    return {
        notes: state.notes,
        annotations: state.annotations,
        tags: state.tags
    }
}

export default connect(mapStateToProps)(SongContainer)
