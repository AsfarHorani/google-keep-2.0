import React from 'react';
import Masonry from 'react-masonry-css';
import * as actions from '../store/action/actions'
import {connect} from 'react-redux';
import deleteIcon from '../assets/del1.png'

const Trash = (props) => {
   console.log(props.trash,'trash props')
  let trashItems=null
  if(props.trash)
  {trashItems = props.trash.map((item)=>(<li key={item.id} className="trash-item" >
      <span className="span1">{item.title}</span> 
      <span className="span2">{item.input}</span> 
      <button className="delete-forever" onClick={()=>props.onDeleteForever(item.id)} ><img className="del-forever" alt='delete' src={deleteIcon}/></button>
    </li>))}



    return(
        <div>
        <ul>
          <Masonry
            breakpointCols={4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
       {trashItems}
          </Masonry>
        </ul>
        </div>
    );
}

const mapStateToProps=(state)=>{

  return {trash : state.trash}
}
const mapDispatchToProps=(dispatch)=>{

  return {
    onDeleteForever: (noteId)=>dispatch(actions.deleteForever(noteId)),
    onNoteAdd : (note)=> dispatch(actions.addNote(note))
  }

}



export default connect(mapStateToProps, mapDispatchToProps)(Trash);