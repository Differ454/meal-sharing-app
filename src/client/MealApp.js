import React from 'react';
import "./MealApp.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";



export function MealApp() {    
 
        return (
            <>
            <div className="content">
                <header id="header"> <br></br><br></br>
                            <p>mealApp</p> 
                         <h1>welcome to this food page, meal sharing is you best option</h1> <br></br><br></br>
                          
                        <ul>
                        <li><Link to="/">Main</Link></li>
                        <li><Link to="/meals">Meals</Link></li>
                        <li><Link to="/reservations">Reservations</Link></li>
                        <li><a href="#button">contact</a></li>    
                        </ul>
                </header>
                <body>
                    <div className="left">
                         <h1>Rice Pudding</h1><br></br><br></br>
                         <p>Rice pudding is a dish made from rice mixed with water
                              or milk and other ingredients such as cinnamon, vanilla 
                              and raisins. Variants are used for either 
                             desserts or dinners. When used as a dessert, it is
                              commonly combined with a sweetener such as sugar.
                         </p>

                         <h1>Soup Meat</h1><br></br><br></br>
                         <p>The best cuts of meat to use are chuck roast, chuck shoulder, 
                             chuck-eye roast or top chuck. These cuts will result in meltingly
                              tender beef that you can cut with a spoon. Using beef
                              stew meat is not recommended. It is a combination of cuts of
                               meat that right for this soup.</p>
                         
                     
                    </div>
                    <div className="right">
                         <h1>Duck with Onion</h1><br></br><br></br>
                         <p>Duck and Onion Chutney Canapes
                            Easy and quick to prepare, these duck
                            and onion chutney canapes are a new tasty
                           appetizer ideas to serve for a classy brunch,
                           these duck and onion chutney canapes are a new tasty
                           appetizer ideas to serve for a classy brunch.</p>


                         <h1>Fruit salad</h1><br></br><br></br>
                         <p>Fruit salad is a dish consisting of various kinds of fruit,
                              sometimes served in a liquid, either their own juices or a syrup.
                               In different forms, fruit salad can be served as an appetizer, 
                               a side salad, or a dessert. When served as an appetizer or dessert,
                                a fruit salad. 
                                </p>

                    </div>
                </body>
                <footer>
                <ul className="img">
                          <h1><div id="button" href="#"> Copyright meal Sharing app Diego Ruiz  Phone:XXXX</div> </h1>
                          
                        </ul>
                </footer>
           </div>
            
                   
                  
         </>
           
            
        );
    }