import React from 'react';
import Masonry from 'react-masonry-css';
import * as actions from '../store/action/actions'
import {connect} from 'react-redux';
import archieveIcon from '../assets/unarchieve.png'

const archieve = (props) => {
   console.log(props.archieve,'archieve props')
  let archieveItems=null
  if(props.archieve)
  {archieveItems = props.archieve.map((item)=>(<li key={item.id} className="trash-item" >
      <span className="span1">{item.title}</span> 
      <span className="span2">{item.input}</span> 
      <button className="delete-forever" onClick={()=>props.onRemoveArchieve(item.id)} ><img className="del-forever" alt='delete' src={archieveIcon}/></button>
    </li>))}



    return(
        <div>
        <ul>
          <Masonry
            breakpointCols={4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
       {archieveItems}
          </Masonry>
        </ul>
        </div>
    );
}

const mapStateToProps=(state)=>{

  return {archieve : state.archieve}
}
const mapDispatchToProps=(dispatch)=>{

  return {
    onRemoveArchieve: (noteId)=>dispatch(actions.removeArchieve(noteId)),
  
  }

}



export default connect(mapStateToProps, mapDispatchToProps)(archieve);