import React,{Component} from 'react';
import Home from './Components/Home';
import noteLogo from './assets/note.png';
import delLogo from './assets/del.png';
import archLogo from './assets/archive.jpg';
import logo from './assets/logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Trash from './Components/Trash';
import Archieve from './Components/archieve';
import {connect} from 'react-redux';
import  * as actions from './store/action/actions'



class App extends Component{
 
  

  render() {
   
    return(
     
      <div>
        <div className="header">
          <img src={logo} />
          <h3>Keep</h3>
          <input onChange={(e)=>{this.props.onSearch(e.target.value)}} className="search" type="text" placeholder="Search" />
        </div>
        <hr></hr>


        <div className="content">
          <div className="navigation"> 

          <Link to="/" className="nav-home">
            
           <img alt="home" className="home" src={noteLogo}/>
            </Link>

            <Link to="/trash" className="nav-trash">
              <img alt="trash" className="trash" src={delLogo}/>
              </Link>

              <Link to="/archieve" className="nav-trash">
              <img alt="archieve" className="trash" src={archLogo}/>     
               </Link>
            
            </div>



             
               <Switch>
                 <Route   path='/trash' render={(props)=><Trash {...props} />}/>
                 <Route   path='/archieve' render={(props)=><Archieve {...props} />}/>
                 
                 <Route exact path='/' render={(props)=><Home {...props}  styles='flex' />}/>
               </Switch>
          
             
        </div>
       </div>
    );
  };
}

const mapStateToProps=(state)=>{
return{
  searchResult: state.searchResult

}
}
const mapDispatchToProps=(dispatch)=>{
return{
  onSearch:  (query)=>dispatch(actions.searchNote(query)),
}
}



export default connect(mapStateToProps,mapDispatchToProps)(App);
