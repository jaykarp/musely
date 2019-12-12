// components/waveform.js
import React from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'
const WS = window.WaveSurfer;
import styled from 'styled-components'
import { Button, Icon } from 'semantic-ui-react'

const WaveContainer = styled.div`
	width: 80%;
	margin: auto;
	height: 15rem;
`

const MediaControlsContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
`

const ButtonBox = styled.div`
	width: 4rem;
`

export default class Waveform extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	componentDidMount() {
		this.$el = ReactDOM.findDOMNode(this)
		this.$waveform = this.$el.querySelector('.wave')
		this.wavesurfer = WaveSurfer.create({
			container: this.$waveform,
			waveColor: 'violet',
			progressColor: 'purple',
			// height: 200,
			// barHeight: 8,
			// barRadius: 1,
			// barWidth: 1,
			// cursorWidth: 3,
			// fillParent: true
			// scrollParent: false,
			plugins: [
				WS.regions.create({
					regions: [
						{
							start: 1,
							end: 3,
							loop: false,
							color: 'hsla(400, 100%, 30%, 0.5)'
						}, {
							start: 5,
							end: 7,
							loop: false,
							color: 'hsla(200, 50%, 70%, 0.4)'
						}
					],
					dragSelection: {
						slop: 5
					}
				})
			]
		})

		this.wavesurfer.load(this.props.src)
	}

	handlePlay = () => {
		this.wavesurfer.play()
	}

	handlePause = () => {
		this.wavesurfer.pause()
	}

	render() {
		return (
			<WaveContainer>
				<div className="wave" />
				<MediaControlsContainer>
					<ButtonBox>
						<Button
							icon
							color="green"
							fluid
							onClick={this.handlePlay}
						>
							<Icon name="play" />
						</Button>
					</ButtonBox>

					<ButtonBox>
						<Button
							icon
							color="red"
							fluid
							onClick={this.handlePause}
						>
							<Icon name="pause" />
						</Button>
					</ButtonBox>
				</MediaControlsContainer>
			</WaveContainer>
		)
	}
}

Waveform.defaultProps = {
	src: ''
}
