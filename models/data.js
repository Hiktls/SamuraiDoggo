const mongoose = require('mongoose')

const dataSchema = mongoose.Schema({
    name:String,
    nameID:String,
    count:Number
})

module.exports = mongoose.model('Data',dataSchema)