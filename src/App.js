
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
import Confirmation from "./Components/Confirmation";
import PizzaForm from "./Components/PizzaForm";
import * as Yup from 'yup';
import HomePage from "../src/Components/HomePage";

import formSchema from '../validation/formSchema';

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
