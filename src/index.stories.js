import React from 'react';
import EditAnnotation from './components/song/EditAnnotation';
import Note from './components/song/Note';

export default {
	title: 'Edit Annotation'
};

export const editor = () => (
    <EditAnnotation />
);

export const note = () => (
    <Note />
);
