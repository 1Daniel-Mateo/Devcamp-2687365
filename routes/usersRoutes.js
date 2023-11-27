const express = require('express')
const UserModel = require('../models/userModel');
const router = express.Router()


router.post('/register', async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        res.status(201).json({
            success: true,
            data: user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: `Error interno de servidor${error.message}`,
        });
    }
})

//login
router.post('/login', async (req, res) => {
    try {
        //separar email y password en varibles
        const {email, password} = req.body
        

        //buscar el usuario con ese email
        const user = await UserModel.findOne({email}).select("+password")
        if (!user) {
            res.status(404).json({
                success:false,
                message:'User no found'
            })
        } else {
            //compara password
            const isMatch = await user.compararPassword(password)
            if (isMatch) {
                res.status(200).json({
                    success: true,
                    msg: "usuario valido"
                });
            }else{
                res.status(200).json({
                    success: true,
                    msg: "credenciales invalidas"
                });
            }
        }
        console.log(user)
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: `${error.message}`
        });
    }
})



module.exports = router

//URIS DEL USER

//consulta general

// router.get('/',function (req,res) {
//     res.json({
//         success:true,
//         msg:"Se traeran todos los usuarios"
//     })
// })

// //consulta especifica

// router.get('/:id',function (req,res) {
//     res.json({
//         success:true,
//         msg:`Se traera al usuario: ${req.params.id}`
//     })
// })

// //ingreso o creacion de bootcamps
// router.post('/',function (req,res) {
//     res.json({
//         success:true,
//         msg:`Aqui se creara un nuevo usuario`
//     })
// })

// //se creara a metodo PUT para cambiar o editar los atributos
// router.put('/:id',function (req,res) {
//     res.json({
//         success:true,
//         msg:`Se editara un usuario: ${req.params.id}`
//     })
// })

// // se eliminara con metodo delete

// router.delete('/:id',function (req,res) {
//     res.json({
//         success:true,
//         msg:`Se eleminara al usuario: ${req.params.id}`
//     })
// })

