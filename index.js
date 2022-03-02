const express = require('express')
const app = express()
const cors = require('cors')
const prods_routes = require('./routes/shoes')
const mongoose = require('mongoose')
const userCreds = require('./config/config')

//Connects to ONLINE server
const port = 8000
mongoose.connect(`mongodb+srv://${userCreds.username}:${userCreds.password}@cluster0.9261n.mongodb.net/shoesDB?retryWrites=true&w=majority`)
.then( (result) => { app.listen(port, console.log('Server is running PORT: ', + port))})

app.use(express.json())
app.use(cors())
app.use('/api/prod/', prods_routes)

require('./config/config')

