const express = require("express");
const router = express.Router();
const knex = require("../database");

//--------------------THIS IS THE ROUTER------------------------------------------------//

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await (await knex("meals_org").select("title"));
    response.json(titles);
  } catch (error) {
    throw error;

  }
});

//router to post the new meal in the api

router.post("/add", async (request, response) => {
  try {
    console.log(request.body);
    const newMeal = await knex("meals_org").insert({
      "title":request.body.title,
      "description":request.body.description
  });
    response.json(newMeal)
  } catch (error) {
    throw error;
  }
});


router.get("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info

    const meals_id = await (await knex("meals_org")).filter(content => content.id === parseInt(request.params.id));
    response.json(meals_id);
  } catch (error) {
    throw error;
  }
});

// router to show the new  api meal added

router.get("/show", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await (await knex("meals_org").select("title"));
    response.json(titles);
  } catch (error) {
    throw error;

  }
});



module.exports = router;
