const express = require('express')
const router = express.Router()


//URIS DEL BOOTCAMP

//consulta general

router.get('/',function (req,res) {
    res.json({
        success:true,
        msg:"Se traeran todos los cursos"
    })
})

//consulta especifica

router.get('/:id',function (req,res) {
    res.json({
        success:true,
        msg:`Se traera el curso: ${req.params.id}`
    })
})

//ingreso o creacion de bootcamps
router.post('/',function (req,res) {
    res.json({
        success:true,
        msg:`Aqui se creara un curso`
    })
})

//se creara a metodo PUT para cambiar o editar los atributos
router.put('/:id',function (req,res) {
    res.json({
        success:true,
        msg:`Se editara el curso: ${req.params.id}`
    })
})

// se eliminara con metodo delete 

router.delete('/:id',function (req,res) {
    res.json({
        success:true,
        msg:`Se eleminara el curso: ${req.params.id}`
    })
})

module.exports = router