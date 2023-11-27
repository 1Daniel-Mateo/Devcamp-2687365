const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
})

userSchema.pre('save', async function(next){
    //generar la sal para generar el  password encriptado
    const sal = await bcryptjs.genSalt(12)
    //crear la clave encriptada con la sal
    //y se asiganara al password de la entidad

    this.password = await bcryptjs.hash(this.password, sal)
})

userSchema.methods.compararPassword = async function (password) {
    return await bcryptjs.compare(password,this.password)
}

module.exports = mongoose.model('User', userSchema)

