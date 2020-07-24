import React from 'react';
 import { Route, Link, Switch, NavLink } from "react-router-dom";

  export default function Home(){


    return(

 
        <header>
       <h1 className="Pizza Delivered">
         Your Pizza Is On Its Way!
       </h1>

        <Link to="/pizza">
         <button className="homeBtn">Want Pizza? Click Here!</button>
       </Link>
     </header>
     )
 } 