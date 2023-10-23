const express = require('express')
const router = express.Router()


//URIS DEL BOOTCAMP

//consulta general

router.get('/',function (req,res) {
    res.json({
        success:true,
        msg:"Se traeran todos los bootcamps"
    })
})

//consulta especifica

router.get('/:id',function (req,res) {
    res.json({
        success:true,
        msg:`Se traeran el bootcamp: ${req.params.id}`
    })
})

//ingreso o creacion de bootcamps
router.post('/',function (req,res) {
    res.json({
        success:true,
        msg:`Aqui se creara los bootcamp`
    })
})

//se creara a metodo PUT para cambiar o editar los atributos
router.put('/:id',function (req,res) {
    res.json({
        success:true,
        msg:`Se editara el bootcamp: ${req.params.id}`
    })
})

// se eliminara con metodo delete 

router.delete('/:id',function (req,res) {
    res.json({
        success:true,
        msg:`Se eleminara el bootcamp: ${req.params.id}`
    })
})

module.exports = router