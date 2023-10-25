const express = require('express')
const router = express.Router()


//URIS DEL USER

//consulta general

router.get('/',function (req,res) {
    res.json({
        success:true,
        msg:"Se traeran todos los usuarios"
    })
})

//consulta especifica

router.get('/:id',function (req,res) {
    res.json({
        success:true,
        msg:`Se traera al usuario: ${req.params.id}`
    })
})

//ingreso o creacion de bootcamps
router.post('/',function (req,res) {
    res.json({
        success:true,
        msg:`Aqui se creara un nuevo usuario`
    })
})

//se creara a metodo PUT para cambiar o editar los atributos
router.put('/:id',function (req,res) {
    res.json({
        success:true,
        msg:`Se editara un usuario: ${req.params.id}`
    })
})

// se eliminara con metodo delete 

router.delete('/:id',function (req,res) {
    res.json({
        success:true,
        msg:`Se eleminara al usuario: ${req.params.id}`
    })
})

module.exports = router