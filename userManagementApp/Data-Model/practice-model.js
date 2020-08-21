const mongoose = require('mongoose');
const { strict } = require('assert');

const tourSchema = new mongoose.Schema({
    name: {
        type=String,
        required: [true, 'A app should have name field'],
        unique: true,
        trim: true
    },
    address: {
        type:String,
        trim:true
    },
    state: {
        type: String,
        trim: true,
        default:'New-Delhi'
    },
    postal_Code:{
        type:Number,
        required: [true,'must have postal code']
    },
    email: {
        type: String,
        trim: true,
        unique: true
    }
});

// const tours = 