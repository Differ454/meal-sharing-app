const express = require("express");
const router = express.Router();
const knex = require("../database");

//--------------------THIS IS THE RESERVATIONS ROUTER------------------------------------------------//

//router to post the a reservation
  
  router.post("/add", async (request, response) => {
    try {
      console.log(request.body);
      const newReservation = await knex("reservations").insert({
        "name":request.body.name,
        "phone":request.body.phone, 
        "email":request.body.email,
        "guests":request.body.guests
    });
      response.json(newReservation)
    } catch (error) {
      throw error;
    }
  });

  //create an api to get the reservations items from the database
  
router.get("/", async (request, response) => {
    try {  
      // knex syntax for selecting things. Look up the documentation for knex for further info
      const reservas = await (await knex("reservations").select("name").select("phone").select("email").select("guests"));
      response.json(reservas);  
      
    } catch (error) {    
      throw error;
  
    }
  });







module.exports = router;