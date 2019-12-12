// WindowTime.js

import React, { Component, StyleSheet } from 'react';
import styled from 'styled-components';

const WTWrapper = styled.div`
    /* display: block; */
    height: auto;
    float: right;
`

const RowLayout = styled.div`
    display: flex;
    flex-direction: row;
`

const singleInput = {
    textAlign : 'center',
    border: '0',
    fontSize: '25px'
}

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

// const lineBreak = {
//     display: 'block',
//     marginTop: '0.5em',
//     marginBottom: '0.5em',
//     marginLeft: 'auto',
//     margin-right: auto;
//     border-style: inset;
//     border-width: 1px;
// }
// const SingleInputField = styled.input`
    
// `

export default class WindowTime extends Component {

    handleStartMinuteChange = () => {

    }

    render() {
        return(
            <WTWrapper>
                <RowLayout>

                
                <input 
                    defaultValue='00'
                    maxlength="2"
                    size="2"
                    style={singleInput}
                    onChange={this.handleStartMinuteChange}
                />
                <Colon>:</Colon>
                <input 
                    value='00'  
                    maxlength="2"
                    size="2"
                    style={singleInput}
                />
                <Colon>:</Colon>
                <input
                    value='00' 
                    maxlength="2"
                    size="2"
                    style={singleInput}
                />

                <Line />

                <input 
                    value='00'
                    maxlength="2"
                    size="2"
                    style={singleInput}
                />
                <Colon>:</Colon>
                <input 
                    value='00'
                    maxlength="2"
                    size="2"
                    style={singleInput}
                />
                <Colon>:</Colon>
                <input
                    value='00' 
                    maxlength="2"
                    size="2"
                    style={singleInput}
                />
                

                </RowLayout>
            </WTWrapper>
        )
    }
}




