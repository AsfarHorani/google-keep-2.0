import React from 'react';

const TakeNote = (props) => {
    return(
        <div>
        {
        props.visible === false
            ?
            <div className="take-notes1">
              <input type="text" placeholder="Take a note..." className="initial" onChange={()=>null}/>
            </div>
            :
            <div className="take-notes2">
              <input type="text" placeholder="Title" className="title" /><br></br>
              <input type="text" placeholder="Take a note..." className="take-note" autoFocus="autofocus " /> 
              <button >close</button>
              
            </div>
        }
        </div>
    );
}

export default TakeNote;