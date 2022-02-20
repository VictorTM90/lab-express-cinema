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

router.get ("/movies/:id", (req, res, next)=> {
  

  return Pelicula.findById(req.params.id) //=>  objeto que contiene el id del parámetro dinámico
  .then((response)=>{

   // console.log(response) => para comprobar objeto 

    res.render("movie-details.hbs", {response})

  })
  .catch((err)=>{
    console.log(err)
  })
})

//Get details

module.exports = router
