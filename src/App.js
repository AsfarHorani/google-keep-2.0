import React,{Component} from 'react';
import Home from './Home';

class App extends Component{


  render() {
    let styles = {
      inputStyle: {
        display: 'flex'
      }, 
      inputStyle1: {
        display: 'none'
      }
    };
    return(
     
      <div>
        <div className="header">
          <img src="./logo.png" />
          <h3>Keep</h3>
          <input className="search" type="text" placeholder="Search" />
        </div>
        <hr></hr>
        <div className="content">
        
             <Home  styles='flex' />
        
        </div>
       </div>
    );
  };
}

export default App;
