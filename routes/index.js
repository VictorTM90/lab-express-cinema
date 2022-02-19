const express = require("express");
const router = express.Router();
const Pelicula = require("../models/movie.model");
/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

//Get movies
router.get("/movies", (req, res, next) => {
  //buscar peli en db y devolverlas
  return Pelicula.find()
    .then((response) => {
      console.log(response);
      res.render("movies.hbs", { response });
    })
    .catch((err) => {
      return err;
    });
})



//Get details

module.exports = router
