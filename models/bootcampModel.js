const mongoose = require('mongoose')

//MODELOS CON LIBRERIAS
//MODELO SOLO PARA MONGO
//los modelos se llaman esquemas que son plantillas
// mongoose.shema es para crear esquemas de la crud

const bootcampShema = new mongoose.Schema({
    name:{
        //se extiende el atributo
        type: String,
        unique: true,
        required: [true, "el bootcamp esta repetido"],
        maxlength: [20, "el nombre no puede ser superior a 20 caracteres"]
    },
    phone:{
        type: Number,
        required: [true, "el bootcamp esta repetido"],
        maxlength: [10, "el telefono no puede ser superior a 10 caracteres"]
    },
    addres:{
        type: String,
        required: [true, "la direccion es requeridad"],
    },
    topics:{
        type: [String],
        enum: ["AI",
    "Backend",
"Frontend",
"Devops"
]
    },
    averageRating:Number,
    createdAt:{
        type:Date,
        required: [true, "la feha es requerida"]
    }
})

const Bootcamp = mongoose.model("Bootcamp",bootcampShema)
module.exports = Bootcamp