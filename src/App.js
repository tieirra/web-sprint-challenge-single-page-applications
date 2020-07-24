
import React from "react"
import axios from 'axios';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
import Confirmation from "./Components/Confirmation";
import PizzaForm from "./Components/PizzaForm"
import HomePage from "../src/Components/HomePage";


const App = () => {

  
  return (
    <div className = "App">
     
     <Router>
    <PizzaForm>
      <h1>Lambda Eats</h1>
      <Link to ="/"><button
      className="buttonOne">Home Page</button></Link>
    <Route exact path="/pizza">
    
    </Route>

    <Route exact path="/pizza/confirmation">

      <Confirmation/>

        </Route>

        <Route exact path="/"><HomePage /></Route>
        </PizzaForm>
    </Router>
     
    </div>
  );
};
export default App;
