import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import reducer from './store/reducer/reducer'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'

const Store = createStore(reducer);


ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={Store}>
      <BrowserRouter>
      <App />
    </BrowserRouter>
  
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
