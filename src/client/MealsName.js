import React from 'react';
import "./MealsName.css";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Axios from 'axios';


export function MealsName() {

    const [meals, setMeals] = useState ([])
    const [title, setTilte] = useState ("");
    const [description, setDescription] = useState ("");
    const [showList, setShowList] = useState ([]);
    
    const addMeal = () =>{
      Axios.post('/api/meals/add',
     {title:title, description:description}).then(()=>
     alert("Your new meal has been successfully added to our database."))
     console.log(addMeal)
    };
     //heroku example
     const showMelas = () =>{
      Axios.get('/api/meals').then((response)=> {
     setShowList(response.data);
     console.log(showList)
    });
  };


   useEffect(()=>{
        (async () =>{
          const response = await fetch ('/api/meals', );
          const jsonResponse = await response.json();
          //console.log(jsonResponse);
          setMeals( prev => {
              return jsonResponse;
          })
        })();
    },[])
 
        return (
            <div className="content">
              
           
              <h4>our meals</h4>

             <ul className="menu">
              <li><Link to="/">main</Link></li>   
              <li><Link to="/reservations">Reservations</Link></li>
              <li><Link to="meals/1">Rice</Link></li>
              <li><Link to="/meals/2">Soup</Link></li>
              <li><Link to="meals/3">Duck</Link></li>
              <li><Link to="/meals/4">Fruit</Link></li>
             </ul>

             <ul>
               {
                meals.map(meal => {
                return (
                <div className="meals">
                    <h3>-------</h3>
                 <li>{meal.title}</li> <br></br><br></br>
                </div>)
            })}
            </ul> 
            
            <div className="Addmeal">

                <h5>Add New Meal</h5>
                 <div className="CreateMeal">
                  <label>Title:</label>
                  <input type="text" onChange={(event) => {setTilte(event.target.value);
                    }} /> <br></br><br></br>


                  <label>Description:</label>
                  <input type="text" onChange={(event) => {setDescription(event.target.value);
                    }} />
                  <button onClick={addMeal}>Add Meal</button>
                  <button onClick={showMelas}>show meals</button>

                  {showList.map((val, key) => {
                    return <div className="newMeals"><h3>{val.title}</h3></div>
                  })}

                 </div>
              </div>

         </div>
           
            
        );
    }