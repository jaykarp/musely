import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Icon, TextArea, Form, Dropdown, Card} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const ButtonWrapper = styled.div`
    float: right;
`
const options = [
  { key: 'Crescendo', text: 'Crescendo', value: 'Crescendo' },
  { key: 'Chord', text: 'Chord', value: 'Chord' },
  { key: 'Allegro', text: 'Allegro', value: 'Allegro' },
  { key: 'Cadence', text: 'Cadence', value: 'Cadence' },
]

export default class Note extends Component {
	constructor(props) {
		super(props)
  } 
  state = { options }

  handleAddition = (e, { value }) => {
    this.setState((prevState) => ({
      options: [{ text: value, value }, ...prevState.options],
    }))
  }

  handleChange = (e, { value }) => this.setState({ currentValue: value })

  render(){  
    const { currentValue } = this.state
    return(
 
        <Card color = 'red'>
          <Dropdown
            options={this.state.options}
            placeholder='Choose or Input Tag'
            search
            selection
            fluid
            allowAdditions
            value={currentValue}
            onAddItem={this.handleAddition}
            onChange={this.handleChange}
          />

            <Form>
                <TextArea placeholder='Add Note Here' 
                  style={{ 
                    minHeight: 200,
                    width: 290
                  }} />
            </Form>
          <Card.Content extra>
            <ButtonWrapper>
              <Button animated>
              <Button.Content visible>Exit</Button.Content>
              <Button.Content hidden>
                  <Icon name='arrow right' />
              </Button.Content>
              </Button>
            
            </ButtonWrapper>
          </Card.Content>
        </Card>

    );
  }
}