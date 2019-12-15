import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const songs = [
    {
        title: 'Ave Maria',
        path: 'avemaria',
        by: {
            first_name: 'Josquin',
            last_name: 'des Prez'
        },
        period: 'Renaissance'
    },
    {
        title: 'Messiah',
        path: 'messiah',
        by: {
            first_name: 'George',
            last_name: 'Handle'
        },
        period: 'Baroque'
    },
    {
        title: 'Ornithology',
        path: 'ornithology',
        by: {
            first_name: 'Charlie',
            last_name: 'Parker'
        },
        period: '21st Century'
    }
]

const LibraryWrapper = styled.div`
    width: 100%;
    padding: 2rem;
`
const Bar = styled.div`
    height: 4rem;
    display: flex;
    align-items: center;
    margin: 1rem;
`
const SongBar = styled.div`
    height: 4rem;
    border: 1px solid #ccc !important;
    border-radius: 16px;
    display: flex;
    align-items: center;
    margin: 1rem;
    box-shadow: 0;
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0 0 3px #515151;
    }
`

const Item = styled.div`
    flex-grow: 1;
    text-align: center;
    font-size: ${props => props.fontSize || 15}px;
    color: black;
`

class Library extends Component {
    render() {
        return (
            <LibraryWrapper>
                <Bar>
                    <Item fontSize={30}> Song Title </Item>
                    <Item fontSize={30}> Composer </Item>
                    <Item fontSize={30}> Period </Item>
                </Bar>
                {songs.map((song, i) => (
                    <Link key={i} to={`/song/${song.path}`}>
                        <SongBar>
                            <Item fontSize={25}>{song.title}</Item>
                            <Item>
                                {song.by.first_name + ' ' + song.by.last_name}
                            </Item>
                            <Item>{song.period}</Item>
                        </SongBar>
                    </Link>
                ))}
            </LibraryWrapper>
        )
    }
}

export default Library
