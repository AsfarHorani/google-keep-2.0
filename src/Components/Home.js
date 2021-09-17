import React, { Fragment, useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import TakeNote from './TakeNote';
import * as actions from '../store/action/actions'
import {connect} from 'react-redux';
import pinIcon from '../assets/pin.png'

const Home = (props) => {

 const [editMode,setEditMode] = useState(false)

 const [ednote,setNote]=useState({})
 const [visible,setVisible] = useState(false)
 let notesList =null
 let searchResultList= null
 let pinnedNotesList = null
let hedis= {marginInlineStart : '40px',display: 'none'};
let lindis = {
          height: 2,
  width: '70%',
  display: 'none'
}

const setVisibleHandler=()=>{
 
  setVisible(prevState=>{
    return{visible : !prevState.visible}
  })
}


const inputChangedHandler=(event,identifier)=>
{

 if(identifier==='title')
 {
  setNote(prevState=>{

    return{
       ...prevState,
       title: event.target.value

    }
    
  })
  
 }
 if(identifier==='text')
 {
  console.log(ednote,"ednote")
     setNote(prevState=>{
       return{
          ...prevState,
          noteText: event.target.value

       }
     })
   
 }
 

}


 const editHandler =(noteId)=>{
   setEditMode(true)
    props.onEditHandler(noteId)
 }

 const finishEditHandler=()=>{
   setEditMode(false)
   props.onFinishEdit(ednote)
 }


if(props.pinnedNotes && props.pinnedNotes.length>0){
  pinnedNotesList =  props.pinnedNotes.map(note=>{
  hedis= {marginInlineStart : '40px',display: 'block'}
  lindis = {
    height: 2,
width: '70%',
display: 'block'
}
    return (<li key={note.id} className="list-item" >
    <span onClick={()=>props.onRemovePinNote(note.id)} className="span1">{note.title}<button className="pin-button" ><img className="pin" src={pinIcon}/></button></span> 
    <span className="span2">{note.noteText}</span> 

  
    </li>)
  })


}
if(props.notes && props.notes.length>0){
  notesList =  props.notes.map(note=>{
    return (<li key={note.id} className="list-item" >
    <span onClick={()=>props.onPinNote(note.id)} className="span1">{note.title}<button className="pin-button" ><img className="pin" src={pinIcon}/></button></span> 
    <span className="span2">{note.noteText}</span> 
    <button className="list-button" onClick={()=>editHandler(note.id)}>Edit</button>
    <button className="list-button" onClick={()=>props.onDeleteNote(note.id)} >Delete</button>
    <button onClick={()=>props.onAddToArchieve(note)} className="list-button" >Archieve</button>
    </li>)
  })
}

if(props.searchResult && props.searchResult.length>0){
  console.log(props.searchResult)
  searchResultList =  props.searchResult.map(note=>{
    return (<li key={note.id} className="list-item" >
    <span onClick={()=>props.onPinNote(note.id)} className="span1">{note.title}<button className="pin-button" ><img className="pin" src={pinIcon}/></button></span> 
    <span className="span2">{note.noteText}</span> 
    <button className="list-button" onClick={()=>editHandler(note.id)}>Edit</button>
    <button className="list-button" onClick={()=>props.onDeleteNote(note.id)} >Delete</button>
   
    </li>)
  })
}

let editComp = null
if(editMode)
{
  editComp =   <div className="popup" style={ {display: 'flex'}}>
  <p className="text" >
    <span className="edit-title">
      <input onChange={(e)=>inputChangedHandler(e,'title')} defaultValue={ednote.title}
     /> 
       <button ><img className="pin" src="../assests/push-pin.png"/>
       </button></span>
    <input onChange={(e)=>inputChangedHandler(e,'text')} defaultValue={ednote.noteText}  className="edit-input" />
    <button onClick={finishEditHandler} className="close">close</button>
    <button onClick={e=>props.onDeleteNote(props.editedNode.id)} className="delete">delete</button>
  </p>
</div>

}

 
   if(searchResultList){
        return (
          <Fragment>
             {editComp}
          <Masonry
          breakpointCols={4}
          style={ {marginTop: '10px'}}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          
          {searchResultList}
         </Masonry>
         </Fragment>
          )
     } 
      
    return(
 
     
      <Fragment>
        
        <TakeNote visible={visible} clicked = {setVisibleHandler} addNote={props.onNoteAdd}/>
       {editComp}
           <ul >
             
           <h3  style={hedis} >Pinned Notes</h3>
          <Masonry
            breakpointCols={4}
            style={ {marginTop: '10px'}}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            
           {pinnedNotesList}
           </Masonry>
        </ul>
        <hr
        style={lindis}
    />
        <ul>
          <Masonry
            breakpointCols={4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
           {notesList}
       
          </Masonry>
        </ul>
      
        </Fragment>
     
    );
} 

const mapStateToProps=(state)=>{

  return {notes : state.notes,
    editedNode: state.editedNode,
    pinnedNotes: state.pin,
  searchResult: state.searchResult}
}
const mapDispatchToProps=(dispatch)=>{

  return {
    onDeleteNote: (noteId)=>dispatch(actions.deleteNote(noteId)),
    onNoteAdd : (note)=> dispatch(actions.addNote(note)),
    onEditHandler: (noteId) => dispatch(actions.editHandler(noteId)),
    onFinishEdit: (note) => dispatch(actions.finishEdit(note)),
    onAddToArchieve:(note)=>dispatch(actions.addToArchieve(note)),
    onPinNote: (noteId)=>dispatch(actions.pinNote(noteId)),
    onRemovePinNote: (noteId=>dispatch(actions.removePinNote(noteId))),
    
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(Home);