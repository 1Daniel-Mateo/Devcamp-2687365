const express = require('express')
const CoursesModel = require('../models/coursesModel');
const mongoose = require('mongoose');
const router = express.Router()


//URIS DEL BOOTCAMP

//consulta general

router.get('/', async (req,res) =>{
    try {
        const courses = await CoursesModel.find();
        //if de error
        if (courses.length === 0) {
          //codig de status 400 error en el  back end
          res.status(400).json({
            success: false,
            msg: "No hay cursos",
          });
        } else {
          res.status(200).json({
            success: true,
            data: courses,
          });
        }
      } catch (error) {
        res.status(500).json({
          success: false,
          msg: `Error interno de servidor${error.message}`,
        });
      }
})

//consulta especifica

router.get('/:id',async (req, res) =>{
    //Traer bootcamp por id
  try {
    //if de error que no existe ese id
    // validar si el id es valido para mongoose
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({
        success: false,
        msg: `id invalido`,
      });
    } else {
      const courses = await CoursesModel.findById(req.params.id);
      if (!courses) {
        //el bootcamp no existe
        res.status(400).json({
          success: false,
          msg: `No existe el curso ${req.params.id}`,
        });
      } else {
        //el bootcamp existe
        res.status(200).json({
          success: true,
          data: courses,
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: `Error interno de servidor${error.message}`,
    });
  }
})

//ingreso o creacion de bootcamps
router.post('/',async (req, res) =>{
    //registrar nuevo curso
  try {
    const NewCourses = await CoursesModel.create(req.body);
    res.status(201).json({
      success: true,
      data: NewCourses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: `${error.message}`,
    });
  }
})

//se creara a metodo PUT para cambiar o editar los atributos
router.put("/:id", async function (req, res) {
    try {
      //if de error que no existe ese id
      // validar si el id es valido para mongoose
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({
          success: false,
          msg: `id invalido`,
        });
      } else {
        const courseU = await CoursesModel.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );
        if (!courseU) {
          //no existe el bootcamp
          res.status(400).json({
            success: false,
            msg: `No existe el curso ${req.params.id}`,
          });
        } else {
          //si existe el bootcamp
          res.status(200).json({
            success: true,
            data: courseU,
          });
        }
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        msg: `Error interno de servidor${error.message}`,
      });
    }
  });

// se eliminara con metodo delete 

router.delete("/:id", async (req, res) => {
    //eliminar bootcamp
  
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({
          success: false,
          msg: `id invalido`,
        });
      } else {
        const DeleteCourse = await CoursesModel.deleteOne(
          CoursesModel.findById(req.params.id)
        );
        res.json({
          success: true,
          data: DeleteCourse,
          msg: `Se elimino el curso: ${req.params.id}`,
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        msg: `Error interno de servidor${error.message}`,
      });
    }
  });

module.exports = router