const mongoose = require('mongoose')

const shoeSchema = new mongoose.Schema( 
    {
        name: {type: String},
        price: {type: Number},
        colors: {type: Array}
    })

module.exports = mongoose.model('shoe', shoeSchema)    