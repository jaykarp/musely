let nextAnnotationId = 0
let nextNoteId = 0

export const addNote = data => ({
    type: 'ADD_NOTE',
    id: nextNoteId++,
    text: data.text
})

export const updateNote = data => ({
    type: 'UPDATE_NOTE',
    id: data.id,
    text: data.text
})

export const addAnnotation = data => ({
    type: 'ADD_ANNOTATION',
    id: nextAnnotationId,
    text: data.text,
    start_time: data.start_time,
    end_time: data.end_time,
    tags: data.tags
})

export const updateAnnotation = data => ({
    type: 'UPDATE_ANNOTATION',
    id: data.id,
    text: data.text,
    start_time: data.start_time,
    end_time: data.end_time,
    tags: data.tags
})
