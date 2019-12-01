import React from 'react'
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

const LoaderExampleLoader = () => (
  <Grid centered columns={2}>
    <Grid.Column>
      <Header as="h2" textAlign="center">
        Login
      </Header>
      <Segment>
        <Form size="large">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Email address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
          <Button color="blue" fluid size="large">
            Login
          </Button>
        </Form>
      </Segment>
      <Message>
        Not registered yet? <a href="#">Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default LoaderExampleLoader