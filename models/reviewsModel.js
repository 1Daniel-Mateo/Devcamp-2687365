const mongoose = require("mongoose");

//MODELOS CON LIBRERIAS
//MODELO SOLO PARA MONGO
//los modelos se llaman esquemas que son plantillas
// mongoose.shema es para crear esquemas de la crud

const reviewsShema = new mongoose.Schema({
  title: {
    //se extiende el atributo
    type: String,
    unique: true,
    required: [true, "se requiere titulo"],
    maxlength: [20, "Máximo 20 caracteres"],
  },
  text: {
    type: String,
    required: [true, "Texto requerido"],
    maxlength: [50, "Máximo 50 caracteres"],
  },
  rating: {
    type: Number,
    required: [true, "La calificacion es requerida"],
    maxlength: [10, "Una calificación puede ir de 1 a 10 únicamente"],
  },
  bootcamp_id: {
    type: String,
    required: [true, "El id del bootcamp debe existir en la tabla bootcamps, en el campo id"],
  },
  user_id: {
    type: String,
    required: [true, "El id del usuario debe existir en la tabla usuarios, en el campo id"],
  },
  
});

const Reviews = mongoose.model("reviews", reviewsShema);
module.exports = Reviews;
