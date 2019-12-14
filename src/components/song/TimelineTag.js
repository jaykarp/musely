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
    background-color: ${props =>
        `rgb(${props.red}, ${props.green}, ${props.blue})`};
    border-radius: 30px;
`

const TimelineBubble = styled.div`
    width: ${props => props.width}px;
    position: absolute;
    margin-left: ${props => props.position}px;
    height: 3rem;
    background-color: ${props =>
        `rgb(${props.red}, ${props.green}, ${props.blue})`};
    border-radius: 30px;
`

class TagTimeline extends Component {
    constructor(props) {
        super(props)

        this.state = {
            width: null
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

    render() {
        const { tags, annotations, duration } = this.props
        let pixpersec = this.state.width / duration
        pixpersec = Number.isNaN(pixpersec) ? 0 : pixpersec
        //let annotations = [
        //{ start_time: 0, end_time: 10, tag: 'crescendo' },
        //{ start_time: 20, end_time: 40, tag: 'crescendo' }
        //]
        return (
            <div ref={this.saveRef}>
                {tags.map((tag, i) => {
                    return (
                        <TimelineTagWrapper
                            key={i}
                            red={212}
                            green={90}
                            blue={90}
                        >
                            {annotations.map((ann, i) => {
                                const {
                                    start_time,
                                    end_time,
                                    tag: anntag
                                } = ann
                                if (tag === anntag) {
                                    return (
                                        <TimelineBubble
                                            key={i}
                                            position={start_time * pixpersec}
                                            width={
                                                (end_time - start_time) *
                                                pixpersec
                                            }
                                            red={212}
                                            green={150}
                                            blue={150}
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
