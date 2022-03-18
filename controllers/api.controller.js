//funcion de api
const Api = require('../model/Api')

//Mostrar GET
module.exports.mostrar = (req, res)=>{
   word.find({}, (error, word)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando en word'
            })
        }
        return res.render('index', {word: word})
    })
}

//Crear POST
module.exports.crear = (req, res)=>{
   
    const dateCreated = new dateCreated({
        fecha: req.body.fecha
    })
    dateCreated.save(function(error,dateCreated){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el dateCreated'
            })
        }
        res.redirect('/')
    })
}

//Modificar PUT
module.exports.editar = (req,res)=>{
    const id = req.body.id_modificar
    const nombre = req.body.nombre_modificar
    lastDateUpdated.findByIdAndUpdate(id, {nombre}, (error, lastDateUpdated)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el lastDateUpdated'
            })
        }
        res.redirect('/')
    })
}

//Eliminar DELETE
module.exports.eliminar = (req, res)=>{
    const id = req.params.id
    dateDeleted.findByIdAndRemove(id, (error, dateDeleted)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el dateDeleted'
            })
        }
        res.redirect('/')
    })
}