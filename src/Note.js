import React, { Component } from 'react';
import styled from 'styled-components';
import {
    Container,
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
    Image,
    Menu,
    Dimmer,
    Loader
  } from 'semantic-ui-react';
  import 'semantic-ui-css/semantic.min.css';


const Background = styled.div`
    margin: 5px 5px 5px 5px;
    background-color: #EEEEEE;
    box-shadow: 5px 5px 5px;
    max-width: 20vw;
`


class Note extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Background>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus, cursus convallis aliquet enim enim in tincidunt. Elementum enim dis vitae varius dui faucibus id nunc purus. Tincidunt purus pharetra adipiscing ridiculus feugiat cursus ullamcorper nulla dignissim. At at id bibendum egestas molestie in. Molestie dictum in posuere proin mi eget tincidunt hendrerit posuere. Elit mauris nullam...</p>
            </Background>
        );
    }
}

export default Note;