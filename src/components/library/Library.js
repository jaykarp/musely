import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentSong } from '../../actions'

const songs = [
    {
        title: 'Non, Je Ne Regrette Rien',
        path: 'regretterien',
        by: {
            first_name: 'Edith',
            last_name: 'Paif'
        },
        period: 'Modern'
    },
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
    },
    {
        title: 'Lorem',
        path: 'Ipsum',
        by: {
            first_name: 'Dolor',
            last_name: 'Sit'
        },
        period: 'Medieval'
    },
    {
        title: 'Lorem',
        path: 'Ipsum',
        by: {
            first_name: 'Dolor',
            last_name: 'Sit'
        },
        period: 'Medieval'
    },
    {
        title: 'Lorem',
        path: 'Ipsum',
        by: {
            first_name: 'Dolor',
            last_name: 'Sit'
        },
        period: 'Medieval'
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
    width: 120px;
`

class Library extends Component {
    handleSelect = song => {
        const { dispatch } = this.props
        dispatch(
            setCurrentSong({
                name: song.title
            })
        )
    }

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
                        <SongBar onClick={() => this.handleSelect(song)}>
                            <Item fontSize={20}>{song.title}</Item>
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

const mapStateToProps = state => {
    return { song: state.song }
}

export default connect(mapStateToProps)(Library)
