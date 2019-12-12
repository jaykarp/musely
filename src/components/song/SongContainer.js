import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Annotation from './Annotation'
import Waveform from './Waveform'
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
                start_time: 1,
                end_time: 2,
                tags: ['Crescendo', 'Famiglia']
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
            pos: 0
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
        const { notes, annotations } = this.props

        return (
            <div>
                <SongHeader>{name}</SongHeader>
                <Waveform
                    src={`/${this.props.match.params.name}.mp3`}
                    pos={this.state.pos}
                    onPosChange={this.handlePosChange}
                    playing={this.state.playing}
                />
                <SongHeader>Annotations</SongHeader>
                {annotations.map(ann => {
                    return (
                        <Annotation
                            key={ann.id}
                            title={ann.id}
                            time={ann.start_time}
                            text={ann.text}
                        />
                    )
                })}
            </div>
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
