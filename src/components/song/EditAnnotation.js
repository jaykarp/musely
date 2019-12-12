import React, { Component } from 'react'
import styled from 'styled-components'
import WindowTime from './WindowTime'
import { Button, Icon, TextArea, Form, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import {
	useSelector, useDispatch, connect
} from 'react-redux'

import {
    addNote,
    addAnnotation,
    updateNote,
    updateAnnotation
} from '../../actions'


const EditAnnotationWrapper = styled.div`
	width: 95%;
	margin: auto;
	height: 22rem;
	/* border-radius: 10px; */
	border-width: 2px;
	border-color: black;
	/* background-color: rgb(161, 161, 161); */

	padding: 10px 10px 10px 10px;
`

const SideBySideWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: 85%;
`

const TextFieldWrapper = styled.div`
	padding-bottom: 10px;
	width: 100rem;
	height: 100%;
`

const OptionsWrapper = styled.div`
	width: 100%;
	padding-left: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	position: relative;
`

const EditAnnotationTitle = styled.h2``

const OptionsText = styled.h2`
    width: auto;
`

const OptionsButton = styled.button`
	background-color: ${props => props.background};
`

const WindowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const TagsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 2.5em;
`

const ButtonWrapper = styled.div`
	position: absolute;
	bottom: 1rem;
	left: 2rem;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	width: 50%;
`

const DropDownBox = styled.div`
	margin-right: 5px;
	margin-left: 1.5em;
`

class EditAnnotation extends Component {
	constructor(props) {
		super(props)
		const { dispatch } = this.props

		this.state = {
			text: 'YEET',
			start_minute: '00',
			start_second: '00',
			end_minute: '00',
			end_second: '00',
			tag: ''
		}
	}

	handleSave = () => {
		var hasAnnotation = false
		if (hasAnnotation) {
			// TODO: Implement update annotation
		} else {
			const startTime = (parseInt(this.state.start_minute) * 60) + parseInt(this.state.start_second)
			const endTime = (parseInt(this.state.end_minute) * 60) + parseInt(this.state.end_second)
			this.props.dispatch(
				addAnnotation({
					text: this.state.text,
					start_time: startTime,
					end_time: endTime,
					tag: this.state.tag
				})
			)
			
		}
	}

	handleTagChange = (e, data) => {
		// e.preventDefault();
		console.log(data.value)
		this.setState({
			tag: data.value
		})
	}

	handleInputUpdateStartMinute = (e) => {
		var data = e.target.value
		if (data.length < 2)
			data = '0' + data
		this.setState({
			start_minute: data
		})
	}

	handleInputUpdateStartSecond = (e) => {
		var data = e.target.value
		if (data.length < 2)
			data = '0' + data
		this.setState({
			start_second: data
		})
	}

	handleInputUpdateEndMinute = (e) => {
		var data = e.target.value
		if (data.length < 2)
			data = '0' + data
		this.setState({
			end_minute: data
		})
	}

	handleInputUpdateEndSecond = (e) => {
		var data = e.target.value
		if (data.length < 2)
			data = '0' + data
		this.setState({
			end_second: data
		})
	}

	render() {

        const countryOptions = [
			{ key: 'af', value: 'Afghanistan', flag: 'af', text: 'Afghanistan' },
            { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
            { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
            { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
            { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
            { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
            { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
            { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
            { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
            { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
            { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
            { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
            { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
            { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
            { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
            { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
            { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
            { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
            { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
            { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
            { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
            { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
            { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
        ]
        
		return (
			<EditAnnotationWrapper>
				<EditAnnotationTitle>Edit Annotation</EditAnnotationTitle>
				<SideBySideWrapper>
					<TextFieldWrapper>
						<Form>
							<TextArea
								placeholder="Edit annotation here..."
								onChange={(e, data) => {
									e.preventDefault()
									this.setState({
										text: data.value
									})
								}}
								style={{
									height: 240,
									resize: 'none',
									paddingLeft: 20,
									paddingTop: 20,
									paddingRight: 20,
									paddingBottom: 20,
									fontSize: 20
								}}
							/>
						</Form>
					</TextFieldWrapper>

					<OptionsWrapper>
                        <WindowWrapper>
                            <OptionsText>Window</OptionsText>
                            <WindowTime
								startMinute={this.state.start_minute}
								startSecond={this.state.start_second}
								endMinute={this.state.end_minute}
								endSecond={this.state.end_second}
								startMinuteUpdate={this.handleInputUpdateStartMinute}
								startSecondUpdate={this.handleInputUpdateStartSecond}
								endMinuteUpdate={this.handleInputUpdateEndMinute}
								endSecondUpdate={this.handleInputUpdateEndSecond}
							/>
                        </WindowWrapper>
						
                        <TagsWrapper>
                            <OptionsText>Tag</OptionsText>
                            <DropDownBox>
                                <Dropdown
                                    placeholder="Add Tag"
                                    search
                                    selection
                                    clearable
                                    options={countryOptions}
                                    onChange={
                                        this.handleTagChange
                                    }
                                />
                            </DropDownBox>
                        </TagsWrapper>
						


						<ButtonWrapper>
							<Button size="huge" animated>
								<Button.Content visible>Discard</Button.Content>
								<Button.Content hidden>
									<Icon name="trash" />
								</Button.Content>
							</Button>

							<Button positive size="huge" animated onClick={this.handleSave}>
								<Button.Content visible>Save</Button.Content>
								<Button.Content hidden>
									<Icon name="save" />
								</Button.Content>
							</Button>
						</ButtonWrapper>
					</OptionsWrapper>
				</SideBySideWrapper>
			</EditAnnotationWrapper>
		)
	}
}

const mapDispatchToProps = {
	addNote,
    addAnnotation,
    updateNote,
    updateAnnotation
}

export default connect()(EditAnnotation)
// null,mapDispatchToProps