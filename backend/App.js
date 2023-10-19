const express = require('express')
const homeRoute = require('./routes/home')
const app = express()
const PORT = 5000;

app.use('', homeRoute)

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`)
})