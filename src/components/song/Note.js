import React, { Component } from 'react';
import styled from 'styled-components';
import WindowTime from './WindowTime'
import { Button, Icon, TextArea, Form} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const EditNoteWrapper = styled.div`
    width: 95%;
    margin: auto;
    height: 22rem;
    /* border-radius: 10px; */
    border-width: 2px;
    border-color: black;
    /* background-color: rgb(161, 161, 161); */

    padding: 10px 10px 10px 10px;
`

const SideBySideWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 85%;
`

const TextFieldWrapper = styled.div`
    padding-bottom: 10px;
    width: 100rem;
    height: 100%;
`

const OptionsWrapper = styled.div`
    width: 100%;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
`

const EditNoteTitle = styled.h2``

const OptionsText = styled.h2`
    width: auto;
`

const OptionsButton = styled.button`
    background-color: ${props => props.background};
`

const ButtonWrapper = styled.div`
    bottom: 1rem;
    left: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 50%;
`

export default class Note extends Component {
	constructor(props) {
		super(props)
  } 
  
  render(){  

    const {
      handleSave,
      handleTagChange,
      handleTextChange,
      handleTimeChange
     } = this.props
    const { start_time, end_time } = this.props

    return(

      <EditNoteWrapper>
                <EditNoteTitle>Edit Note</EditNoteTitle>
                <SideBySideWrapper>
                    <TextFieldWrapper>
                        <Form>
                            <TextArea
                                placeholder="Edit Note here..."
                                onChange={handleTextChange}
                                style={{
                                    height: 240,
                                    resize: 'none',
                                    paddingLeft: 20,
                                    paddingTop: 20,
                                    paddingRight: 20,
                                    paddingBottom: 20,
                                    fontSize: 20
                                }}
                            />
                        </Form>
                    </TextFieldWrapper>

                    <OptionsWrapper>
                        <ButtonWrapper>
                            <Button size="huge" animated>
                                <Button.Content visible>Discard</Button.Content>
                                <Button.Content hidden>
                                    <Icon name="trash" />
                                </Button.Content>
                            </Button>

                            <Button
                                positive
                                size="huge"
                                animated
                                onClick={handleSave}
                            >
                                <Button.Content visible>Save</Button.Content>
                                <Button.Content hidden>
                                    <Icon name="save" />
                                </Button.Content>
                            </Button>
                        </ButtonWrapper>
                    </OptionsWrapper>
                </SideBySideWrapper>
            </EditNoteWrapper>
    );
  }
}