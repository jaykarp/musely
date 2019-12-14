import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'

const TimelineTagWrapper = styled.div`
    height: 3rem;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0.5em;
    background-color: ${props => props.color};
    border-radius: 30px;
`

const TimelineBubble = styled.div`
    width: ${props => props.width}px;
    position: absolute;
    margin-left: ${props => props.position}px;
    height: 3rem;
    background-color: ${props => props.color};
    border-radius: 30px;
`

class TagTimeline extends Component {
    constructor(props) {
        super(props)

        this.state = {
            width: null,
            colors: {}
        }
    }

    componentDidMount() {
        this.measure()
    }

    saveRef = ref => (this.containerNode = ref)

    measure = () => {
        const { clientWidth } = this.containerNode

        this.setState({
            width: clientWidth
        })
    }

    randomHSL = () => {
        const random = Math.floor(Math.random() * (360 - 10 + 1)) + 10
        return {
            bar: `hsla(${~~random},70%,60%,1)`,
            bubble: `hsla(${~~random},70%,80%,1)`
        }
    }

    updateTagState = tags => {
        let colors = this.state.colors
        tags.forEach(tag => {
            if (colors[tag.name] === undefined) {
                colors[tag.name] = this.randomHSL()
            }
        })
    }

    addColorForTag = () => {}

    render() {
        const { tags, annotations, duration } = this.props
        const { colors } = this.state
        this.updateTagState(tags)
        let pixpersec = this.state.width / duration
        pixpersec = Number.isNaN(pixpersec) ? 0 : pixpersec
        return (
            <div ref={this.saveRef}>
                {tags.map((tag, i) => {
                    return (
                        <TimelineTagWrapper
                            key={i}
                            color={colors[tag.name].bar}
                        >
                            {annotations.map((ann, i) => {
                                const {
                                    start_time,
                                    end_time,
                                    tag: anntag
                                } = ann
                                console.log(tag, anntag, tag === anntag)
                                if (tag.name === anntag) {
                                    return (
                                        <TimelineBubble
                                            key={i}
                                            position={start_time * pixpersec}
                                            width={
                                                (end_time - start_time) *
                                                pixpersec
                                            }
                                            color={colors[tag.name].bubble}
                                        />
                                    )
                                }
                            })}
                        </TimelineTagWrapper>
                    )
                })}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        annotations: state.annotations,
        tags: state.tags
    }
}

export default connect(mapStateToProps)(TagTimeline)
