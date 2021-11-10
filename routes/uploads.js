const express = require('express');
// const multer = require('multer');
const router= express.Router();
const upload= require('../models/upload')


router.post('/',upload.single('image'),(req,res) =>{    
    try{     
        const file = req.file;  
        res.send({message:"Upload successfull"});   
        console.log(file);    
    }catch(err){        
        console.log({message:err});    
    }     
}); 

module.exports= router;