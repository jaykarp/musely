import React, { Component } from 'react'
import styled from 'styled-components'
import Annotation from './Annotation'
import { Segment, Button, Icon, Label } from 'semantic-ui-react'
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
    padding: 20px 50px 30px 50px;
    box-sizing: border-box;
`

const TitleHeader = styled.div`
    padding-left: 3rem;
    padding-top: 2rem;
    font-size: 40px;
    color: black;
`

class AnnotationContainer extends Component {
    state = { annoOpen: true, noteOpen: true }

    render() {
        const { annotations } = this.props

        var annotationGroups = {
            selected: [],
            unselected: []
        }

        if (annotations.length > 0) {
            annotations.forEach((el, i) => {
                if (
                    this.props.selectedTag &&
                    this.props.selectedTag === el.tag
                ) {
                    annotationGroups['selected'].push(el)
                } else {
                    annotationGroups['unselected'].push(el)
                }
            })
        }

        let state = 'close'
        if (this.props.isOpen) {
            if (this.props.notesOpen) state = 'half'
            else state = 'full'
        }
        return (
            <div className={'anno_sidebar_' + state}>
                <Label attached="top" size="huge">
                    Annotations
                </Label>
                <Container>
                    <SelectedAnnotationWrapper>
                        {annotationGroups.selected.map(el => {
                            return (
                                <Annotation
                                    key={el.id}
                                    id={el.id}
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
                        {annotationGroups.unselected.map(el => {
                            return (
                                <Annotation
                                    key={el.id}
                                    id={el.id}
                                    startTime={el.start_time}
                                    endTime={el.end_time}
                                    text={el.text}
                                    tag={el.tag}
                                    color={'orange'}
                                    isSelected={false}
                                />
                            )
                        })}
                    </AnnotationWrapper>
                </Container>
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
