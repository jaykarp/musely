import React from 'react';
import EditAnnotation from './components/song/EditAnnotation';
import Note from './components/song/Note';
import MiniWindowTime from './components/song/MiniWindowTime';

export default {
	title: 'Edit Annotation'
};

export const editor = () => (
    <EditAnnotation />
);

export const note = () => (
    <Note />
);
export const miniTime = () => (
    <MiniWindowTime start_time={250.38} end_time={316.37666666666667} />
)
