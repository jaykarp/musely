// components/waveform.js
import React from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'
import styled from 'styled-components'
import { Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
const WS = window.WaveSurfer

const WaveContainer = styled.div`
    width: 80%;
    margin: auto;
    height: 15rem;
`

const MediaControlsContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const ButtonBox = styled.div`
    width: 4rem;
`

class Waveform extends React.Component {
    constructor(props) {
        super(props)
        this.wavesurfer = null
    }

    componentDidMount() {
        this.wavesurfer = this.buildWave()
    }

    buildWave() {
        const el = ReactDOM.findDOMNode(this)
        const waveform = el.querySelector('.wave')
        const wavesurfer = WaveSurfer.create({
            container: waveform,
            waveColor: 'grey',
            progressColor: 'black',
            height: 200,
            barHeight: 8,
            barWidth: 1,
            cursorWidth: 3,
            scrollParent: false,
            plugins: [
                WS.regions.create({
                    regions: []
                })
            ]
        })

        wavesurfer.load(this.props.src)
        return wavesurfer
    }

    handlePlay = () => {
        this.wavesurfer.play()
    }

    handlePause = () => {
        this.wavesurfer.pause()
    }

    buildEditableRegion = ({
        start_time = 0,
        end_time = 10,
        color = 'blue'
    }) => {
        this.wavesurfer.clearRegions()
        this.wavesurfer.addRegion({
            id: 0,
            start: start_time,
            end: end_time,
            color: color
        })
    }

    buildRegionsByTag = ({ tag = null }) => {
        const { annotations } = this.props
        this.wavesurfer.clearRegions()
        annotations.map(ann => {
            if (ann.tag === tag) {
                this.wavesurfer.addRegion({
                    id: ann.id,
                    start: ann.start_time,
                    end: ann.end_time,
                    drag: false,
                    resize: false,
                    color: ann.color || 'rgba(101, 145, 202, 0.87)'
                })
            }
        })
    }

    render() {
        return (
            <WaveContainer>
                <div className="wave" />
                <MediaControlsContainer>
                    <ButtonBox>
                        <Button
                            icon
                            color="green"
                            fluid
                            onClick={this.handlePlay}
                        >
                            <Icon name="play" />
                        </Button>
                    </ButtonBox>

                    <ButtonBox>
                        <Button
                            icon
                            color="red"
                            fluid
                            onClick={this.handlePause}
                        >
                            <Icon name="pause" />
                        </Button>
                    </ButtonBox>
                </MediaControlsContainer>
            </WaveContainer>
        )
    }
}

Waveform.defaultProps = {
    src: ''
}

const mapStateToProps = state => {
    return {
        annotations: state.annotations
    }
}

export default connect(mapStateToProps)(Waveform)
