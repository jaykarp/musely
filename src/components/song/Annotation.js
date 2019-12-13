import React, { Component } from 'react'
import styled from 'styled-components'
import MiniWindowTime from './MiniWindowTime'
import { Button, Icon, Popup } from 'semantic-ui-react'
import DotDotDot from 'react-dotdotdot'
import 'semantic-ui-css/semantic.min.css'

const Background = styled.div`
	position: relative;
	margin: 5px 5px 5px 5px;
	padding: 0.7rem 0.7rem 0.7rem 0.7rem;
	background-color: #eeeeee;
	/* box-shadow: 5px 5px 5px; */
	width: 20rem;
    height: 13rem;
    
    border-radius: 5px;
`

const NoteTitle = styled.h3`
	/* padding-top: 1rem;
    padding-left: 0.5rem; */
	color: black;
	margin: 0 0 0 0;
`

const TimeStamp = styled.h3`
	color: black;
	margin: 0 0 0 0;
`

const NoteHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	margin-bottom: 0.2rem;
`

const NoteButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	position: absolute;
	bottom: 5px;
	right: 5px;
`

const TextDisplay = styled.div`
    font-size: 15px;
    height: 65%;
    width: 85%;
    margin: 0 auto;
    /* overflow:hidden; */
    /* white-space:nowrap; */
    /* text-overflow:ellipsis; */
`

class Annotation extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log('TITLE:', this.props.text)
		return (
			<div>
				<Background>
					<NoteHeader>
						{/* <NoteTitle>{this.props.title}</NoteTitle> */}
						<MiniWindowTime start_time={this.props.startTime} end_time={this.props.endTime}/>
					</NoteHeader>
					<TextDisplay>
                        <DotDotDot clamp={6}>
                            <p>{this.props.text}</p>
                        </DotDotDot>
                    </TextDisplay>
					<NoteButtonContainer>
						{/* <Popup
                            content="Add note to group"
                            trigger={<Button icon="add" />}
                        /> */}
						<Button icon size='mini' labelPosition="right">
							Edit
							<Icon name="edit" />
						</Button>
					</NoteButtonContainer>
				</Background>
			</div>
		)
	}
}

export default Annotation
