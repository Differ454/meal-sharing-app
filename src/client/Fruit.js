import React from 'react';
import "./Fruit.css";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Axios from 'axios';


export function Fruit() {
    const [fruit, setFruit] = useState ([])
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
          const response = await fetch ('/api/meals/4');
          const jsonResponse = await response.json();
          //console.log(jsonResponse);
          setFruit( prev => {
              return jsonResponse;
          })
        })();
    },[])

  
 
        return (
            <div className="riceContent">
              <header> <h1>Fruit Salad</h1></header>
              
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
                   <li><Link to="/meals/1">Rice</Link></li>
                   <li><Link to="/meals/2">Soup</Link></li>
                   <li><Link to="/meals/3">Duck</Link></li>
                   <li><Link to="/reservations">Reservations</Link></li>
                   </ul>
                    
                    
                 
               {
                fruit.map(meal => {
                return (
                <div className="meals">
                    
                 <li>{meal.title}</li> <br></br><br></br>
                 <li>{meal.description}</li> 
                </div>)
            })}
            
            <p>Fruit salad is a dish consisting of various kinds of fruit,
              sometimes served in a liquid, either their own juices or a syrup.
              In different forms, fruit salad can be served as an appetizer, 
              a side salad, or a dessert. When served as an appetizer or dessert,
              a fruit salad.</p>
                </right>
</div>
           
            
        );
    }