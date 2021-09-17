import * as actionTypes from './actionTypes';


export const pinNote=(noteId)=>{
return {
    type: actionTypes.PIN_NOTE,
    noteId: noteId
}
}

export const removePinNote=(noteId)=>{
    return {
        type: actionTypes.REMOVE_PIN_NOTE,
        noteId: noteId
    }
    }


    export const searchNote=(query)=>{
        return{
            type: actionTypes.SEARCH_NOTE,
            query: query
    }
}

export const deleteForever=(noteId)=>{
    return {
        type: actionTypes.DELETE_NOTE_FOREVER,
        noteId: noteId
    }
}

export const addToArchieve=(note)=>{
    return {
        type: actionTypes.ADD_TO_ARCHIEVE,
        note: note
    }
}

export const removeArchieve=(id)=>{
    return {
        type: actionTypes.REMOVE_ARCHIEVE_HANDLER,
        noteId: id
    }
}

export const finishEdit=(note)=>{
    return {
        type: actionTypes.FINISH_EDIT_HANDLER,
        note: note
    }
}

export const addNote=(note)=>{

 
return{
    type: actionTypes.ADD_NOTE,
    note: note 
}
}


export const deleteNote=(noteId)=>{
console.log(noteId)
    return{
        type: actionTypes.DELETE_NOTE,
        noteId: noteId
    }
}

export const editHandler=(noteId)=>{
return{
    type: actionTypes.EDIT_HANDLER,
    noteId: noteId
}
}