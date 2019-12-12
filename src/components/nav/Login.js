import React, { Component } from 'react'
import styled from 'styled-components'

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    height: 300px;
    width: 200px;
    transform: translate(-50%, -50%);
    background-color: black;
    color: white;
`

const Fields = styled.p`
    margin: 0;
    position: relative;
    top: ${props => props.top}%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
`

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <Modal>
                <Fields top={10}>Welcome To Musely</Fields>
                <Fields top={30}>Username</Fields>
                <Fields top={60}>Password</Fields>
            </Modal>
        )
    }
}

export default Login
