import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Link } from 'react-router-dom'

let NavContainer = styled.div`
  background-color: black;
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 100vw;
  margin-bottom: 1rem;

  /* ${({ fixed }) =>
      fixed &&
      `
    left: 0;
    position: fixed;
    top: 0;
    z-index: 2;
  `} */
`

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavContainer>
                    <Button
                        style={{
                            color: 'white',
                            paddingTop: '1rem',
                            paddingLeft: '2rem'
                        }}
                    >
                        <Link
                            to="/library"
                            style={{ color: 'black', textDecoration: 'none' }}
                        >
                            Musely
                        </Link>
                    </Button>
                    <Button style={{ marginLeft: 'auto' }}>
                        <Link
                            to="/songs"
                            style={{ color: 'black', textDecoration: 'none' }}
                        >
                            Notes
                        </Link>
                    </Button>
                </NavContainer>
            </div>
        )
    }
}

export default NavBar
