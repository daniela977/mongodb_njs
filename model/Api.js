const mongoose = require('mongoose')
const Schema = mongoose.Schema
const apiSchema = new Schema ({
    nombre: String,
    fecha:Number
}, {versionKey:false})
module.exports = mongoose.model('api', apiSchema)