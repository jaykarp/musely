// WindowTime.js

import React, { Component } from 'react'
import styled from 'styled-components'

const WTWrapper = styled.div`
    /* display: block; */
    height: auto;
    float: right;
`

const RowLayout = styled.div`
    display: flex;
    flex-direction: row;
`
const Line = styled.hr`
    display: block;
    width: 3rem;
    margin-top: 1em;
    margin-bottom: 0.5em;
    margin-left: 1em;
    margin-right: 1em;
    border-style: inset;
    border: 1px solid black;
`

const Colon = styled.p`
    font-size: 25px;
    /* padding-bottom: 0.5em; */
    margin: 0;
`

const TimeField = styled.div`
    font-size: 30px;
    padding: 5px;
`

export default class WindowTime extends Component {
    sec_toMS = time => {
        if (Number.isNaN(time)) return 0
        let curr = parseInt(time)
        let minutes = Math.floor(curr / 60)
        let seconds = curr - minutes * 60
        let min_str = minutes.toString()
        if (min_str.length < 2) min_str = '0' + min_str
        let sec_str = seconds.toString()
        if (sec_str.length < 2) sec_str = '0' + sec_str
        return { minutes: min_str, seconds: sec_str }
    }

    render() {
        const { start_time, end_time } = this.props
        return (
            <WTWrapper>
                <RowLayout>
                    <TimeField>{this.sec_toMS(start_time).minutes}</TimeField>
                    <Colon>:</Colon>
                    <TimeField>{this.sec_toMS(start_time).seconds}</TimeField>
                    <Line />

                    <TimeField>{this.sec_toMS(end_time).minutes}</TimeField>
                    <Colon>:</Colon>
                    <TimeField>{this.sec_toMS(end_time).seconds}</TimeField>
                </RowLayout>
            </WTWrapper>
        )
    }
}
