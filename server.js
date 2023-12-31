const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const conectarDB = require('./config/db')

//dependencia de rutas
const bootcampsRoutes= require('./routes/bootcampsRoutes')
const coursesRoutes = require('./routes/coursesRoutes')
const usersRoutes = require('./routes/usersRoutes')
const reviewsRoutes = require('./routes/reviewsRoutes')

//configuracion de variables de entorno
dotenv.config(
    { path:'./config/.env'}
)

//coneccion a mongose
conectarDB()

//constuir el objeto app
const app = express()

app.use(express.json())

//vincular las rutas del proyecto
app.use('/bootcamps', bootcampsRoutes)
app.use('/courses', coursesRoutes)
app.use('/users', usersRoutes)
app.use('/reviews', reviewsRoutes)

//prueba de url

app.get('/prueba', function(req, res){
    res.send('Hola capullos')
})

//prueba de ruta parametrizada:

app.get('/prueba/:id', function(req, res){
    res.send(`parametro enviado: ${req.params.id}`)
})

//tomar una variable de puerto del entorno
const puerto = process.env.PUERTO

//servidor de desarrollo
app.listen(puerto, function () {
    console.log(`servidor ejecutado...💪🏻:${puerto}`.bgBlack.yellow.inverse)
})

