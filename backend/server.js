
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const express = require('express')
const app = express()

app.use(cors())
app.use(session({
    secret: "This will be secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24}}));
    app.use(express.json());
//Test
app.use('/', (req, res) => {
    res.send("Hello Node!")
    })


//Server
app.listen(5000,() => {
    console.log("Server created!")
})