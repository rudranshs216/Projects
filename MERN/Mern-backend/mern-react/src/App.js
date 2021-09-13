
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Error from "./components/Error";
import './App.css';
import Logout from "./components/Logout";
import Navbar from './components/Navbar';




const App = () => {
 

     
  return ( <>
  
    <Navbar />
    <Switch>
    <Route exact path="/">      
        <Home/>
    </Route>
    <Route exact path="/about">      
        <About />
    </Route>
    <Route exact path="/contact">      
        <Contact />
    </Route>
    <Route exact path="/signin">      
        <Signin  />
    </Route>
    <Route exact path="/signup">      
        <Signup />
    </Route>
    <Route exact path= "/logout">
        <Logout />
    </Route>
    <Route>
        <Error/>
    </Route>
    </Switch>
    
    

  </>
  )
  
}

export default App;
