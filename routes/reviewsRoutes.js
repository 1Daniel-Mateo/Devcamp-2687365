const express = require('express')
const router = express.Router()


//URIS DEL REVIEWS

//consulta general

router.get('/',function (req,res) {
    res.json({
        success:true,
        msg:"Se traeran todos las opiniones"
    })
})

//consulta especifica

router.get('/:id',function (req,res) {
    res.json({
        success:true,
        msg:`Se traera la opinion del: ${req.params.id}`
    })
})

//ingreso o creacion de bootcamps
router.post('/',function (req,res) {
    res.json({
        success:true,
        msg:`Aqui se creara un nueva opinion`
    })
})

//se creara a metodo PUT para cambiar o editar los atributos
router.put('/:id',function (req,res) {
    res.json({
        success:true,
        msg:`Se editara la opinion es: ${req.params.id}`
    })
})

// se eliminara con metodo delete 

router.delete('/:id',function (req,res) {
    res.json({
        success:true,
        msg:`Se eleminara la opinion: ${req.params.id}`
    })
})

module.exports = router