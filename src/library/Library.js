import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Container = styled.div`
    height: 100px;
    width: 100px;
    background-color: black;
    margin: 20px 20px 20px 20px;
    display: inline-block;
`

const songs = [
    {
        title: 'Ave Maria',
        path: 'avemaria'
    },
    {
        title: 'Nessun Dorma',
        path: 'nessundorma'
    },
    {
        title: 'Giant Steps',
        path: 'giantsteps'
    }
]

class Library extends Component {
    render() {
        return (
            <div>
                {songs.map((song, i) => (
                    <Container key={i}>
                        <Link to={`/song/${song.path}`}>
                            <Button>{song.title}</Button>
                        </Link>
                    </Container>
                ))}
            </div>
        )
    }
}

export default Library
