const mongoose = require("mongoose");

//MODELOS CON LIBRERIAS
//MODELO SOLO PARA MONGO
//los modelos se llaman esquemas que son plantillas
// mongoose.shema es para crear esquemas de la crud

const coursesShema = new mongoose.Schema({
  title: {
    //se extiende el atributo
    type: String,
    unique: true,
    required: [true, "se requiere titulo de curso"],
    maxlength: [30, "el titulo no puede ser superior a 30 caracteres"],
    minlength: [10, "el titulo no puede ser inferior a 10 caracteres"],
  },
  description: {
    type: String,
    required: [true, "la descripcion es requerida"],
    maxlength: [10, "el titulo no puede ser inferior a 10 caracteres"],
  },
  weeks: {
    type: Number,
    required: [true, "el numero de semanas es requerido"],
    maxlength: [9, "El número máximo de semanas para un curso es 9"],
  },
  enroll_cost: {
    type: Number,
    required: [true, "ingresa el costo de inscripcion"],
  },
  minimum_skill: {
    type: [String],
    enum: ["Beginner", "Intermediate", "Advanced", "Expert"],
  },
});

const Courses = mongoose.model("Courses", coursesShema);
module.exports = Courses;
