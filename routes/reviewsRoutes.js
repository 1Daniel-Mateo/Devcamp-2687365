const express = require('express')
const ReviewsModel = require('../models/reviewsModel');
const mongoose = require('mongoose');
const router = express.Router()


//URIS DEL REVIEWS
//consulta general

router.get('/', async (req,res) =>{
    try {
        const reviews = await ReviewsModel.find();
        //if de error
        if (reviews.length === 0) {
          //codig de status 400 error en el  back end
          res.status(400).json({
            success: false,
            msg: "No hay reviews",
          });
        } else {
          res.status(200).json({
            success: true,
            data: reviews,
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
      const reviews = await ReviewsModel.findById(req.params.id);
      if (!reviews) {
        //el bootcamp no existe
        res.status(400).json({
          success: false,
          msg: `No existe el review ${req.params.id}`,
        });
      } else {
        //el bootcamp existe
        res.status(200).json({
          success: true,
          data: reviews,
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
    const NewReview = await ReviewsModel.create(req.body);
    res.status(201).json({
      success: true,
      data: NewReview,
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
        const reviewU = await ReviewsModel.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );
        if (!reviewU) {
          //no existe el bootcamp
          res.status(400).json({
            success: false,
            msg: `No existe el review ${req.params.id}`,
          });
        } else {
          //si existe el bootcamp
          res.status(200).json({
            success: true,
            data: reviewU,
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
        const DeleteReview = await ReviewsModel.deleteOne(
          ReviewsModel.findById(req.params.id)
        );
        res.json({
          success: true,
          data: DeleteReview,
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