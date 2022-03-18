const mongoose = require('mongoose')
const url = 'mongodb://localhost/db_apis'
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar al MongoDB'))
db.once('open', function callback() {
    console.log("Exclente MongoDB!")
})
module.exports = db