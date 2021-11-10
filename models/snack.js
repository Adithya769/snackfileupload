const express = require('express');
const mongoose = require('mongoose');
const snackschema = mongoose.Schema({
    snackname:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        brand:{
            type:String,
            required:true
        },
        manufacture:{
            type:String,
            required:true
        },
        snackdescr:{
            type:String,
            required:true
        }

    }

})
module.exports=mongoose.model('Snack',snackschema);
