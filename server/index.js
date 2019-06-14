require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')

let { CONNECTION_STRING, SERVER_PORT } = process.env

let app = express()

app.use(express.json())

massive( CONNECTION_STRING ).then(db => {
  console.log('DataBase is Secure')
  app.set('db', db)
  app.listen(SERVER_PORT, () => console.log(`Listening on Port ${SERVER_PORT}`))
})

app.get('/api/house', ctrl.getAllHouses)
app.post('/api/house', ctrl.createHouse)
app.delete('/api/house/:id', ctrl.deleteHouse)