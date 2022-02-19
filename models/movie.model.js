const mongoose = require("mongoose") // requerimos a mongoose para crear un nuevo esquema 

const movieSchema = new mongoose.Schema({
    title: {
            type: String

    }, 
    director: {
        type: String
    },
    image: {
        type:String
    },
    description: {
        type: String
    },
    showtimes:[
        {type: String}
    ], 
})

const Pelicula = mongoose.model("Pelicula", movieSchema);

module.exports = Pelicula

