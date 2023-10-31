const express = require('express')
const BootcampModel = require('../models/bootcampModel')
const router = express.Router()


//URIS DEL BOOTCAMP

//consulta general

router.get('/', async(req,res)=> {
    //find:es para traer arreglos de entidades
    //son promesas
    //trae todos lo bootcamps
    const bootcamps = await BootcampModel.find()
    res.json({
        success:true,
        data: bootcamps
    })
})

//consulta especifica

router.get('/:id', async(req,res)=>{
    //Traer bootcamp por id
    const bootcamp = await BootcampModel.findById(req.params.id)
    res.json({
        success:true,
        data:bootcamp
    })
})

//ingreso o creacion de bootcamps
router.post('/', async(req,res)=>{
    //registrar nuevo bootcamp
    const NewBootcamp = await BootcampModel.create(req.body)
    
    res.json({
        success:true,
        data:NewBootcamp
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

router.delete('/:id',async(req,res)=>{
    //eliminar bootcamp
    const DeleteBootcamp = await BootcampModel.deleteOne(BootcampModel.findById(req.params.id))
    res.json({
        success:true,
        data:DeleteBootcamp,
        msg:`Se elimino el bootcamp: ${req.params.id}`
    })
})

module.exports = router