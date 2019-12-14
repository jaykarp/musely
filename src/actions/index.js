import uuid from 'uuid'

export const addNote = data => ({
    type: 'ADD_NOTE',
    id: uuid.v4(),
    text: data.text
})

export const updateNote = data => ({
    type: 'UPDATE_NOTE',
    id: data.id,
    text: data.text
})

export const addAnnotation = data => ({
    type: 'ADD_ANNOTATION',
    id: uuid.v4(),
    text: data.text,
    start_time: data.start_time,
    end_time: data.end_time,
    tag: data.tag
})

export const updateAnnotation = data => ({
    type: 'UPDATE_ANNOTATION',
    id: data.id,
    text: data.text,
    start_time: data.start_time,
    end_time: data.end_time,
    tag: data.tag

})

export const addTag = data => ({
    type: 'ADD_TAG',
    name: data.name
})

export const deleteTag = data => ({
    type: 'DELETE_TAG',
    name: data.name
})
