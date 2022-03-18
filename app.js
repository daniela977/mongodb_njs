const express = require('express')
const app = express()

const db = require('./db')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))



app.get('/', (req, res)=>{
    res.send('Bienvenido')
})

app.listen(3000, ()=>{
    console.log('Conexion correcta en http://localhost:3000')
})