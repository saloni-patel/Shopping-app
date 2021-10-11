import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import {BrowserRouter as Router,
   Route, Switch} from "react-router-dom";
import CreateItems from './Components/CreateItems';
import Items from './Components/Items';
import Cart from './Components/Cart';

function App () {
return(
  <Router>
  <div className="App">
  <Nav />
    
      <Route exact path='/createItems' component={ CreateItems } />
      {/* <Route exact path='/editItems' component={ CreateItems } /> */}

      <Route exact path='/Items' component={ Items } />
      <Route exact path='/cart' component={ Cart } />
  </div>
  </Router>
);
}
export default App;