import React from 'react';
import "./Rice.css";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Axios from 'axios';


export function Rice() {
  const [rice, setRice] = useState ([])
  const [name, setName] = useState ("");
  const [phone, setPhone] = useState ("");
  const [email, setEmail] = useState ("");
  const [guests, setGuests] = useState ("");
  const [showReservation, setShowReservation] = useState ([]);

  
  const addReservation = () =>{
      Axios.post('/api/reservations/add',
     {name:name, phone:phone, email:email, guests:guests}).then(()=>
     alert("Your reservation has been successfully added to our database. "))
     console.log(name+phone+email+guests)
    };

    const showResv = () =>{
      Axios.get('/api/reservations').then((response)=> {
     setShowReservation(response.data);
     console.log(showReservation)
    });
  };

    useEffect(()=>{
      (async () =>{
        const reserv = await fetch ('/api/reservations', );
        const jsonReserv = await reserv.json();
        //console.log(jsonResponse);
        setShowReservation( prev => {
            return jsonReserv;
        })
      })();
  },[])
 
   
  useEffect(()=>{
      (async () =>{
        const response = await fetch ('/api/meals/1', );
        const jsonResponse = await response.json();
        //console.log(jsonResponse);
        setRice( prev => {
            return jsonResponse;
        })
      })();
  },[])



      return (
          <div className="riceContent">
            <header> <h1>Rice Pudding</h1></header>
            
              <left id="left">
                 
               
               <p>Reservation</p><br></br><br></br>
              
               <label>Name:</label>
               <input type="text" onChange={(event) => {setName(event.target.value);
                  }} /> <br></br>
                  
               <label>Phone:</label>
               <input type="tel" onChange={(event) => {setPhone(event.target.value);
                  }}  /> <br></br>

               <label>email:</label>
               <input type="email" onChange={(event) => {setEmail(event.target.value);
                  }} /> <br></br>

               <label>number of guests:</label>
               <input type="number" onChange={(event) => {setGuests(event.target.value);
                  }} /> <br></br>      

               <button onClick={addReservation}>Add</button> <br></br>  

               <button onClick={showResv}>show</button>

               {showReservation.map((val, key) => {
                  return <div className="resv" >
                              <h3>RESERVATIONS</h3>  
                              <h3>NAME: {val.name}</h3>
                              <h3>PHONE: {val.phone}</h3>
                              <h3>EMAIL: {val.email}</h3>
                              <h3>GUESTS: {val.guests}</h3>
                  
                  </div>
                })}
               
              </left>

              <right id="right">
              
              <ul>
                   <li><Link to="/">main</Link></li>   
                   <li><Link to="/meals">meals</Link></li>
                   <li><Link to="/meals/2">Soup</Link></li>
                   <li><Link to="/meals/3">Duck</Link></li>
                   <li><Link to="/meals/4">Fruit</Link></li>
                   <li><Link to="/reservations">Reservations</Link></li>
                 </ul>
                  
                  
               
             {
              rice.map(meal => {
              return (
              <div className="meals">
                  
               <li>{meal.title}</li> <br></br><br></br>
               <li>{meal.description}</li> 
              </div>)
          })}
          
          <p>Rice pudding is a dish made from rice mixed with water
            or milk and other ingredients such as cinnamon, vanilla 
            and raisins. Variants are used for either 
            desserts or dinners. When used as a dessert, it is
            commonly combined with a sweetener such as sugar.</p>
              </right>
</div>
         
          
      );
}