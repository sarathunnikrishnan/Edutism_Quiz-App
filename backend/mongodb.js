//schema creation

const mongoose = require('mongoose')

const edutismSchema =new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    phoneNumber : String,
    birthDate : Date,
    state : String,
    password : String
},
{timestamps : true})

// model create

const edutismModel =  mongoose.model('user', edutismSchema)

module.exports = edutismModel;