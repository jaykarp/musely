import React, { Component } from 'react'
import styled from 'styled-components'
import { Keyframes, Spring, animated } from 'react-spring/renderprops'
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
            colors: {},
            hovered: false,
            hoverIndex: 0,
        }
    }

    componentDidMount() {
        this.measure()
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.updateTagState(nextProps.tags)
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
        let tempColors = {}
        tags.forEach(tag => {
            if (colors[tag.name] === undefined) {
                tempColors[tag.name] = this.randomHSL()
                this.setState({
                    colors: Object.assign(colors, tempColors)
                })
                //colors[tag.name] = this.randomHSL()
            }
        })
    }

    render() {
        const { tags, annotations, duration } = this.props
        const { colors } = this.state

        let pixpersec = this.state.width / duration
        pixpersec = Number.isNaN(pixpersec) ? 0 : pixpersec
        //TODO fix this so that on window size change it still works
        return (
            <div ref={this.saveRef}>
                {tags.map((tag, i) => {
                    return (
                        <Spring 
                            from={{
                                height: '1rem',
                                width: '100%',
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: '0.5em',
                                backgroundColor: `${colors[tag.name].bar}`,
                                borderRadius: '30px',
                            }}
                            to={{
                                height: this.state.hovered && this.state.hoverIndex === i ? '3rem' : '1rem',
                                width: '100%',
                                marginLeft: 0,
                                marginRight: 0,
                                marginBottom: '0.5em',
                                backgroundColor: `${colors[tag.name].bar}`,
                                borderRadius: '30px',
                            }}
                        >
                        {props => (
                            <animated.div 
                                style={{...props}} 
                                onMouseOver={() => {this.setState({
                                    hovered: true,
                                    hoverIndex: i
                                })}}
                                onMouseOut={() => {this.setState({
                                    hovered: false,
                                    hoverIndex: i,
                                })}}
                                key={i}
                            >
                            {annotations.map((ann, i) => {
                                const {
                                    start_time,
                                    end_time,
                                    tag: anntag
                                } = ann
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
                                return null
                            })}
                            </animated.div>
                        )}
                        </Spring>
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
