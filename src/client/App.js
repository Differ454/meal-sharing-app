import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { MealApp } from "./MealApp.js";
import { MealsName } from "./MealsName.js";
import { Soup } from "./Soup.js";
import { Rice } from "./Rice.js";
import { Duck } from "./Duck.js";
import { Fruit } from "./Fruit.js";
import { Reservations } from "./Reservations.js";


function App() {
  return (
    <Router >
   
    
      <Route exact path="/" >
      <MealApp></MealApp>
      </Route> 

      <Route exact path="/meals">
      <MealsName></MealsName>
      </Route>  

      <Route exact path="/meals/1">
      <Rice></Rice>
      </Route>

      <Route exact path="/meals/2">
      <Soup></Soup>
      </Route>  

      <Route exact path="/meals/3">
      <Duck></Duck>
      </Route>  

      <Route exact path="/meals/4">
      <Fruit></Fruit>
      </Route>

      <Route exact path="/reservations">
      <Reservations></Reservations>
      </Route>      
      
    </Router>
  );
}

export default App;
