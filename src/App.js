import React, { useState, useEffect } from 'react'; from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
import * as Yup from 'yup';
import formSchema from '../validation/formSchema';

const initialFormValues = {
 
  name: '',
  pizzasize: '',
 
}

const initialFormErrors = {
  name: '',
  pizzasize: '',
  
}

const App = () => {
const [pizza , setPizza] = useState({name: 'name' , pizzasize: 'size'});
const [formValues, setFormValues] = useState(initialFormValues); // object
const [formErrors, setFormErrors] = useState(initialFormErrors); // object

useEffect(() => {
  setPizza = ({ name: 'Tieirra', pizzasize: 'Large'});
});
    	  
      .then(response => {	   
        setPizza(response);	          
      })
      .catch(error => {	        
        console.error('Server Error', error);	         
      });	 
  }	    
  pizza();	 
}, []);	 

  return (
   
    <Router>
      <Route>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    
    </Route>
    </Router>
  );
};
export default App;
