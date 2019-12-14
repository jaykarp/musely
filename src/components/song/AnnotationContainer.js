import React, { Component } from 'react'
import styled from 'styled-components'
import Annotation from './Annotation'
import 'semantic-ui-css/semantic.min.css'
// import { useSpring, useTransition, animated } from "react-spring"
import { Keyframes, animated } from 'react-spring/renderprops'
import { connect } from 'react-redux'
import './AnnotationContainer.css'

const AnnotationWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    &::after {
        flex: auto;
    }
`

const SelectedAnnotationWrapper = styled.div`
    /* background-color: blue; */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    &::after {
        flex: auto;
    }
`

const Container = styled.div`
    overflow-y: auto;
    height: 100%;
    padding: 30px 50px 30px 50px;
`

const Sidebar = Keyframes.Spring({
    // single items,
    full: { x: 0, w: 100 },
    half: { x: 0, w: 51 },
    // or async functions with side-effects
    close: { x: -100, w: 50 }
})

class AnnotationContainer extends Component {
    state = { annoOpen: true, noteOpen: true }

    render() {

        var annotationGroups = {
            selected: [],
            unselected: []
        }
        this.props.annotations.forEach((el, i) => {
            if (this.props.selectedTag && this.props.selectedTag === el.tag) {
                annotationGroups['selected'].push(el)
            } else {
                annotationGroups['unselected'].push(el)
            }
        })

        console.log(annotationGroups)

        let state = 'close'
        if (this.props.isOpen) {
            if (this.props.notesOpen) state = 'half'
            else state = 'full'
        }
        return (
            <div>
                <Sidebar native state={state}>
                    {props => (
                        <animated.div
                            className="anno_sidebar"
                            style={{
                                transform: props.x.interpolate(
                                    x => `translate3d(${x}%,0,0)`
                                ),
                                width: props.w.interpolate(w => `${w}rem`)
                            }}
                        >
                            <Container>
                                <SelectedAnnotationWrapper>
                                    {annotationGroups.selected.map((el, i) => {
                                        return (
                                            <Annotation
                                                    key={i}
                                                    startTime={el.start_time}
                                                    endTime={el.end_time}
                                                    text={el.text}
                                                    tag={el.tag}
                                                    color={'green'}
                                                    isSelected={true}
                                                />
                                        )
                                    })}
                                </SelectedAnnotationWrapper>

                                <AnnotationWrapper>
                                    {annotationGroups.unselected.map((el, i) => {
                                        return (
                                            <Annotation
                                                    key={i}
                                                    startTime={el.start_time}
                                                    endTime={el.end_time}
                                                    text={el.text}
                                                    tag={el.tag}
                                                    color={'grey'}
                                                    isSelected={false}
                                                />
                                        )
                                    })}
                                </AnnotationWrapper>
                                {/* {this.props.annotations.map((el, i) => {
                                    if (this.props.selectedTag && this.props.selectedTag === el.tag) {
                                        // put selected annotations in a separate div up top
                                        return (
                                            <SelectedAnnotationWrapper>
                                                <Annotation
                                                    key={i}
                                                    startTime={el.start_time}
                                                    endTime={el.end_time}
                                                    text={el.text}
                                                    tag={el.tag}
                                                    color={'grey'}
                                                    isSelected={true}
                                                />
                                            </SelectedAnnotationWrapper>
                                        )

                                    } else {
                                        // put the rest of the tags below
                                        return (
                                            <AnnotationWrapper>

                                                <Annotation
                                                    key={i}
                                                    startTime={el.start_time}
                                                    endTime={el.end_time}
                                                    text={el.text}
                                                    tag={el.tag}
                                                    color={'grey'}
                                                    isSelected={false}
                                                />
                                            </AnnotationWrapper>
                                        )
                                    }
                                })} */}
                                
                            </Container>
                            
                        </animated.div>
                    )}
                </Sidebar>
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

export default connect(mapStateToProps)(AnnotationContainer)
