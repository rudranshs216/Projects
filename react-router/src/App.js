import React from 'react';
import About from './about';
import Contact from './contact';
import { Switch , Route } from "react-router-dom";
import Menu from './Menu';


function App() {
  function Error(){
    return(<h1>Ooops, Page doesnot Exist</h1>)
  } 
  return ( <>
     <Menu />
     <Switch >
       <Route exact path="/about" component={About}/>
       <Route exact path="/contact" component={Contact}/>
       <Route component={Error}/>
     </Switch>
  </>)
}

export default App;
