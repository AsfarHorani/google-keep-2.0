import * as actionTypes from '../action/actionTypes';
import uuid from 'react-uuid'



const initialState={
    notes:[],
    trash:[],
    archieve: [],
    editedNode: null,
    pin:[],
    searchResult:[]


}


const reducer = ( state = initialState, action ) =>{


    switch(action.type){
        case actionTypes.ADD_NOTE : return addNote(state, action)

        case actionTypes.REMOVE_ARCHIEVE_HANDLER: return removeArchieve(state,action)
        case actionTypes.DELETE_NOTE: return deleteNote(state,action)
        case actionTypes.ADD_TO_ARCHIEVE : return addToArchieve(state,action)

        case actionTypes.DELETE_NOTE_FOREVER: return deleteNoteForever(state,action)

        case actionTypes.EDIT_HANDLER: return editHandler(state,action)
        case actionTypes.FINISH_EDIT_HANDLER: return finishEdit(state,action)
        case actionTypes.PIN_NOTE: return pinNotes(state,action)
        case actionTypes.REMOVE_PIN_NOTE: return removePinNote(state,action)
        case actionTypes.SEARCH_NOTE : return searchNote(state,action)
        default:
        return state
    }

}

const addToArchieve=(state,action)=>{
    
    let updatedArchieve= state.archieve
    let newNote = {...action.note}
    updatedArchieve.push(newNote)
    let updatedNotes = state.notes.filter(note=>note.id!==action.note.id)
     return {
        ...state,
         archieve: updatedArchieve,
         notes: updatedNotes
    }
  
}

const removeArchieve=(state,action)=>{


    
    let unarchievedNote = state.notes.find(note=> note.id===action.noteId)
    let updatedArchieve = state.archieve.filter(note=>note.id!==action.noteId)
    let updatedNotes = state.notes
    updatedNotes.push(unarchievedNote)
    return {
        ...state,
         archieve: updatedArchieve,
         notes:updatedNotes
    }
}

const pinNotes =( state,action)=>{
  
    let pinnedNote = state.notes.find(note=> note.id===action.noteId)
   let updatedPin= state.pin
   
    updatedPin.push(pinnedNote)
    let updatedNotes = state.notes.filter(note=>note.id!==action.noteId)
     return {
        ...state,
        pin: updatedPin,
         notes: updatedNotes
    }
}

const removePinNote=(state,action)=>{
 console.log(action.noteId)
    let pinnedNote = state.pin.find(note=> note.id===action.noteId)
    let updatedPin = state.pin.filter(note=>note.id!==action.noteId)
    let updatedNotes = state.notes
    console.log(pinnedNote)
    updatedNotes.push(pinnedNote)
    return {
        ...state,
          pin: updatedPin,
         notes:updatedNotes
    }
}

const editHandler=(state,action)=>{
    console.log(action)
  const enote = state.notes.find(note=> note.id===action.noteId)
     return {
        ...state,
         editedNode: enote
    }
}

const finishEdit=(state,action)=>{
     let updatedNotes = state.notes
    const noteInd = state.notes.findIndex(note=>note.id === action.note.id)
    updatedNotes[noteInd] = action.note
    return{
        ...state,
           notes: updatedNotes
    }


}

const deleteNoteForever=(state,action)=>{
    console.log(action, 'delete forever')
    let updatedTrash = state.trash.filter(note=>note.id!==action.noteId)
    return {
        ...state,
         trash: updatedTrash
    }
  
}

const searchNote=(state,action)=>{
    let result =[];
    if(action.query.length===0 || action.query.length===null)
    {
            
    return {...state,
        searchResult: []}
    }
    
    result =[...result,...state.notes.filter(note=> note.title.toLowerCase().includes(action.query.toLowerCase()))] 
    result = [...result,...state.archieve.filter(note=> note.title.toLowerCase().includes(action.query.toLowerCase()))]
    result = [...result,...state.pin.filter(note=> note.title.toLowerCase().includes(action.query.toLowerCase()))]
    
    if(result.length===0)
    {
        return {...state,
            searchResult: -1} 
    }
    return {...state,
    searchResult: result}
}

const addNote=(state,action)=>{


  let updatedNotes= state.notes
  let updatedNote = {...action.note}
  updatedNote = {...updatedNote, id:uuid()}
  updatedNotes.push(updatedNote)
 
  return {
      ...state,
       notes: updatedNotes
  }


}

const deleteNote=(state,action)=>{
    let deletedNote = state.notes.find(note=> note.id===action.noteId)
    let updatedTrash = state.trash
    updatedTrash.push(deletedNote)
    let updatedNotes = state.notes.filter(note=>note.id!==action.noteId)
    return {
        ...state,
    trash:updatedTrash,
    notes: updatedNotes}
}

export default reducer