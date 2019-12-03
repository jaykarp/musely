// components/waveform.js
import React from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'
import styled from 'styled-components';

const WaveContainer = styled.div`
    width: 80%;
    margin: auto;
    height: 15rem;
`

export default class Waveform extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    this.$el = ReactDOM.findDOMNode(this)
    this.$waveform = this.$el.querySelector('.wave')
    this.wavesurfer = WaveSurfer.create({
      container: this.$waveform,
      waveColor: 'violet',
      progressColor: 'purple',
      height: 200,
      barHeight: 1,
      barRadius: 5,
      barWidth: 5,
    })
    this.wavesurfer.load(this.props.src)
  }
  componentWillUnmount() {

  }
  render() {
    return (
      <WaveContainer>
        <div className='wave' />
      </WaveContainer>
        
    )
  }
}

Waveform.defaultProps = {
  src: ""
}