import React,{useEffect, useState} from 'react';
import colorIcon from '../assets/color.png';
import listIcon from '../assets/listIcon.png';

const TakeNote = (props) => {



  
   const [note,setNote]=useState({
     title: null,
     noteText: null,

   })
   
   const clearInput=()=>{
         setNote({
          title: '',
          noteText: '',
         })
         console.log(note)
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
        const text = event.target.value
        setNote(prevState=>{
          return{
             ...prevState,
             noteText: event.target.value
   
          }
        })
      
    }
    
  
}

    return(
        <div>
        {
        props.visible === false
            ?
            <div className="take-notes1">
              <input  type="text" onClick={()=>props.clicked()} placeholder="Take a note..." className="initial" onChange={()=>null}/>
              <img className='trash' src={listIcon} alt="list"/>
            </div>
            :
            <div className="take-notes2">
              <input value={note.title} type="text" placeholder="Title" className="title"  onChange={(event)=>inputChangedHandler(event,'title')}/><br></br>
              <input value={note.noteText}  type="text" placeholder="Take a note..." className="take-note" autoFocus="autofocus " onChange={(event)=>inputChangedHandler(event,'text')}/> 
              <div className='actions'>
              <img src={colorIcon} className="trash" alt="color"/>
              <button onClick={() => {
                props.clicked();
                if(note.title && note.noteText){
                  props.addNote(note);
                  clearInput();
                }
                 }
                }
                 >
                   close
                 </button>
              </div>
            </div>
    
        }
        </div>
    );
}

export default TakeNote;