import React, { Component } from 'react'
import styled from 'styled-components'
import MiniWindowTime from './MiniWindowTime'
import { Button, Icon, Label, Modal, RatingIcon } from 'semantic-ui-react'

import DotDotDot from 'react-dotdotdot'
import { connect } from 'react-redux'
import { toggleAnnotation, updateAnnotation } from '../../actions'
import 'semantic-ui-css/semantic.min.css'
import toggle from '../../reducers/toggle'

const Background = styled.div`
	position: relative;
	margin: 5px 5px 5px 5px;
	padding: 0.7rem 0.7rem 0.7rem 0.7rem;
	background-color: #eeeeee;
	/* box-shadow: 5px 5px 5px; */
	width: 20rem;
	height: 13rem;

	border-radius: 5px;
	${props =>
		props.isSelected && {
			borderRadius: '3px',
			borderColor: props.color,
			borderStyle: 'solid'
		}}
`

const NoteHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 0.2rem;
`

const TagWrapper = styled.div`
	height: auto;
	width: auto;
	margin-left: 0.5em;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	padding: 5px;
	background-color: ${props => props.color};
	border-radius: 2px;
`

const ModalTagWrapper = styled.div`
	padding: 5px;
	max-width: 6rem;
	background-color: ${props => props.color};
	border-radius: 2px;
`

const ModalTag = styled.div`
	margin: auto;
	font-size: 15px;
	font-weight: bold;
	color: white;
`

const ModalText = styled.p`
	font-size: 20px;
`

const Tag = styled.div`
	margin: auto;
	font-size: 10px;
	font-weight: bold;
	color: white;
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

const ModalHeaderFlex = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

class Annotation extends Component {
	handleEdit = () => {
		const { dispatch, id, toggle } = this.props
		dispatch(
			toggleAnnotation({
				isEditing: !toggle.isEditing,
				id: id
			})
		)
	}

	saveRef = ref => (this.containerNode = ref)

	render() {
		const {
			isSelected,
			color,
			id,
			startTime,
			endTime,
			tag,
			tags,
			text
		} = this.props
		let tagColor = tags.find(t => t.name === tag).color

		return (
			<React.Fragment>
				<div ref={this.saveRef}>
					<Background
						isSelected={isSelected}
						color={tagColor.bubble || 'blue'}
					>
						<NoteHeader>
							<TagWrapper color={tagColor.bubble || 'blue'}>
								<Tag>{tag}</Tag>
							</TagWrapper>
							<MiniWindowTime
								style={{ float: 'right' }}
								start_time={startTime}
								end_time={endTime}
							/>
						</NoteHeader>
						<TextDisplay>
							<DotDotDot clamp={6}>
								<p style={{wordBreak: 'break-all'}}>{text}</p>
							</DotDotDot>
						</TextDisplay>
						<NoteButtonContainer>
							{/* <Popup
                            content="Add note to group"
                            trigger={<Button icon="add" />}
                        /> */}
							<Modal
								size="tiny"
                                dimmer='inverted'
								closeIcon
								trigger={
									<Button
										icon
										size="mini"
										labelPosition="right"
									>
										View
										<Icon name="expand" />
									</Button>
								}
							>
								<Modal.Content>
									<Modal.Header>
										<ModalHeaderFlex>
											<ModalTagWrapper
												color={
													tagColor.bubble || 'blue'
												}
											>
												<ModalTag>{tag}</ModalTag>
											</ModalTagWrapper>

											<MiniWindowTime
												start_time={startTime}
												end_time={endTime}
											/>
										</ModalHeaderFlex>
									</Modal.Header>
									<Modal.Description>
										<ModalText>{text}</ModalText>
									</Modal.Description>
								</Modal.Content>
							</Modal>
							<Button
								icon
								onClick={this.handleEdit}
								size="mini"
								labelPosition="right"
							>
								Edit
								<Icon name="edit" />
							</Button>
						</NoteButtonContainer>
					</Background>
				</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => {
	return {
		toggle: state.toggle,
		tags: state.tags
	}
}

export default connect(mapStateToProps)(Annotation)
