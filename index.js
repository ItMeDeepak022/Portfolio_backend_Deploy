let express = require('express')
let mongoose = require('mongoose')
let App = express()

// Allow to acces env file data....
require('dotenv').config()

// To allow acces object from frontend 
App.use(express.json())

// To allow manges the differents ports like frontend and backned
let cors = require('cors')
const { userRoutes } = require('./routers/userRoutes')
App.use(cors())



App.use('/api', userRoutes)

App.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});



App.listen(process.env.Port, () => {
    console.log("backend Running....", process.env.Port);
})

















