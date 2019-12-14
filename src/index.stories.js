import React from 'react'
import EditAnnotation from './components/song/EditAnnotation'
import Note from './components/song/Note'
import MiniWindowTime from './components/song/MiniWindowTime'
import Annotation from './components/song/Annotation'

export default {
	title: 'Edit Annotation'
}

export const editor = () => <EditAnnotation />

export const note = () => <Note />
export const miniTime = () => (
	<MiniWindowTime start_time={250.38} end_time={316.37666666666667} />
)

export const annotation = () => (
	<Annotation
		startTime={55.35}
		endTime={66.34}
		text={'Hello World, welcome to New York.'}
        tag={'Crescendo'}
	/>
)
