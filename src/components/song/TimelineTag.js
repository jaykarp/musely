import React, { Component } from 'react'
import styled from 'styled-components'
import 'semantic-ui-css/semantic.min.css'

const TimelineTagWrapper = styled.div`
    height: 3rem;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0.5em;
    background-color: red;
    border-radius: 30px;
`

const TimelineBubble = styled.div`
    width: 10%;
    margin-left: 20%;
    height: 3rem;
    background-color: blue;
    border-radius: 30px;
`


export default class TagTimeline extends Component {

    render() {
        return(
            <TimelineTagWrapper>
                <TimelineBubble/>
            </TimelineTagWrapper>
        );
    }
}