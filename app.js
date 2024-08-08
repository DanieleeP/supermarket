const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const database = require('./config/db')
const productRoutes = require('./routes/ProductRoutes')

app.use(bodyparser.json())

app.use(productRoutes)

database
    .authenticate()
    .then(() =>{
        console.log("Banco de dados conectado com secesso")
    }).catch((msgErro) =>{
        console.log(msgErro)
    })

module.exports = app