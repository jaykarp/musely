import React, { Component } from 'react'
import styled from 'styled-components'
import 'semantic-ui-css/semantic.min.css'
// import Note from './Note'
import Waveform from './Waveform'
import AnnotationContainer from './AnnotationContainer'
import NotesContainer from './NotesContainer'
import EditAnnotation from './EditAnnotation'
import { connect } from 'react-redux'
import {
    addNote,
    addAnnotation,
    updateNote,
    updateAnnotation
} from '../../actions'

const SongHeader = styled.h1`
    padding-left: 3rem;
    padding-top: 2rem;
    font-size: 50px;
    color: black;
`

const SongWrapper = styled.div`
    position: relative;
    height: 100%;
`

class SongContainer extends Component {
    constructor(props) {
        super(props)
        const { dispatch } = this.props

        //Sample Dispatch
        dispatch(
            addNote({
                text: 'Hello World'
            })
        )
        dispatch(
            updateNote({
                text: 'Goodbye World',
                id: 0
            })
        )
        dispatch(
            addAnnotation({
                text: 'Hello Annotation',
                start_time: 110,
                end_time: 120,
                tag: 'Crescendo'
            })
        )
        dispatch(
            updateAnnotation({
                text: 'Goodbye Annotation',
                id: 0
            })
        )

        this.state = {
            selected_groups: [],
            playing: false,
            pos: 0,
            annotationDrawerIsOpen: false,
            notesDrawerIsOpen: false,
        }
    }

    handlePosChange = e => {
        this.setState({
            pos: e.originalArgs[0]
        })
    }

    handleTogglePlay = () => {
        this.setState({
            playing: !this.state.playing
        })
    }

    render() {
        const { name } = this.props.match.params

        return (
            <SongWrapper>
                <SongHeader>{name}</SongHeader>
                <Waveform
                    src={`/${this.props.match.params.name}.mp3`}
                    pos={this.state.pos}
                    onPosChange={this.handlePosChange}
                    playing={this.state.playing}
                />
                <SongHeader>Notes</SongHeader>
                <button onClick={() => {this.setState({annotationDrawerIsOpen: !this.state.annotationDrawerIsOpen})}}>Open Annotations</button>

                <button onClick={() => {this.setState({notesDrawerIsOpen: !this.state.notesDrawerIsOpen})}}>Open Note</button>


                <div style={{display: 'inline-flex', marginTop: '10px', width:'100%'}}>
                    <AnnotationContainer isOpen={this.state.annotationDrawerIsOpen} notesOpen={this.state.notesDrawerIsOpen}/>
                    <NotesContainer isOpen={this.state.notesDrawerIsOpen} annoOpen={this.state.annotationDrawerIsOpen} />
                </div>
                

                {/* <EditAnnotation /> */}
            </SongWrapper>
        )
    }
}
const mapStateToProps = state => {
    return {
        notes: state.notes,
        annotations: state.annotations
    }
}

export default connect(mapStateToProps)(SongContainer)
