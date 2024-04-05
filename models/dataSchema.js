const mongoose = require('mongoose');

const ReactFormDataSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phonenumber:{
        type:Number,
        required: true,
    },
    password:{
        type:String,
        required:true,

    }
});

const User = mongoose.model('User', ReactFormDataSchema);
module.exports = User;