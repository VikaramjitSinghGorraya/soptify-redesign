import React from 'react';
import './App.css';
import Body from './Components/Body.js'
import Discover from './Components/Discover.js'
import Join from './Components/Joinn.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
        <Router>
          <div className="App">
            <Route path="/Body.js" component ={Body}/>
            <Route path="/Discover.js" component={Discover}/>
            <Route path = "/Join.js" component = {Join}/>
          </div>
        </Router>
  );
}

export default App;
