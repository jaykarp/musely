import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Icon, TextArea, Form, Dropdown, Card} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


export default class Note extends Component {
	constructor(props) {
		super(props)
  } 
  render(){  
    return(
        <Card color = 'red'>
          <Card.Content header='Add Tag Here' />

            <Form>
                <TextArea placeholder='Add Note Here' style={{ minHeight: 200}} />
            </Form>
          <Card.Content extra>
            <div>
                <Button className="buttonStyle" animated>
                <Button.Content visible>Exit</Button.Content>
                <Button.Content hidden>
                    <Icon name='arrow right' />
                </Button.Content>
                </Button>
            </div>
          </Card.Content>
        </Card>
    );
  }
}


