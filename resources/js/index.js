import React from 'react';
import './App.css';
import ReactDom from 'react-dom';
import Landing from './components/Landing';
import Sign from './components/Sign'
// import { Link } from 'react-router-dom';
import Main from './components/Main';
import ReactMDL from 'react-mdl';
import AddVehicleInfo from './components/AddVehicleInfo'
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Main />
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter> , document.getElementById('example'));
//export default App;
