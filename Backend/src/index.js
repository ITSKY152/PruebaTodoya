const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')

require("dotenv").config()
// config
const { PORT } = require('./config')

//Database
require("./database").connect()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());


var AuthRoute = require("./router/authRouter")
var FolderRoute = require("./router/folderRouter")
var FilesRoute = require("./router/filesRouter")

app.use('/api/auth', AuthRoute)
app.use('/api/folder', FolderRoute)
app.use('/api/files', FilesRoute)

app.listen(PORT, (err) => {
    if (err) {
        console.log(`Algo salio mal, ${err}`)
    }
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})