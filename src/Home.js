import React from 'react';
import Masonry from 'react-masonry-css';
import TakeNote from './TakeNote'
const Home = ({state, styles, ...actions}) => {
    return(
        <div>
        <TakeNote  />
        {/* <div className="popup" >
            <p className="text" >
              <span className="edit-title"><input /> <button ><img className="pin" src="./push-pin.png"/></button></span>
              <input  className="edit-input" />
              <button  className="close">close</button>
              <button className="delete">delete</button>
            </p>
        </div> */}
       
        <ul>
          <Masonry
            breakpointCols={4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
              <li key='asdasd' className="list-item" >
                <span className="span1">'title' <button className="pin-button" ><img className="pin" src=""/></button></span> 
                <span className="span2">'input'</span> 
                <button className="list-button" >Edit</button>
                <button className="list-button" >Delete</button></li>
          </Masonry>
        </ul>
        </div>
    );
}

export default Home;