const express = require('express');
const snack = require('../models/snack');

// const mongoose = require('mongoose');
const router = express.Router();
const Snack= require('../models/snack')


router.post('/',(req,res)=>{
    const snack = new Snack({
        snackname:req.body.snackname,
        price:req.body.price,
        description:{
            brand:req.body.description.brand,
            manufacture: req.body.description.manufacture,
            snackdescr:req.body.description.snackdescr
        }
    });
    snack.save().
    then(data=>{
        res.json(data);
    }).catch(err=>{
        res.json({message:err});
    })
})
// get display all etails
router.get('/', async(req,res) =>{ 
    try{ 
        const snacks = await snack.find(); 
        res.json(snacks); 
    }catch(err){ 
        res.json({message:err}); 
    } 
});
// getting a post by id
router.get('/:snackid', async(req,res) =>{ 
    try{ 
        const snack = await Snack.findById(req.params.snackid); 
        res.json(snack); 
    }catch(err){ 
        res.json({message:err}); 
    } 
});
// deleting a row 
router.delete('/:snackid', async(req,res) =>{ 
    try{ 
        const snack = await Snack.findByIdAndDelete({_id: req.params.snackid});
        res.json(snack); 
        }catch(err){
             res.json({message:err}); 
            }
         } ); 
//  updating the details
router.patch('/:snackid', async(req,res) =>{ 
    try{ 
        const snack = await Snack.findOne({_id: req.params.snackid}); 
        
        if(req.body.snackname){
            snack.snackname=req.body.snackname;
        }
        if(req.body.price){
            snack.price=req.body.price
        }
        if(req.body.description){
            if(req.body.description.brand){
                snack.description.brand=req.body.description.brand;
            }
            if(req.body.description.manufacture){
                snack.description.manufacture = req.body.description.manufacture;
            }
            if(req.body.description.snackdescr){
                snack.description.snackdescr= req.body.description.snackdescr;
            }
        }

        await snack.save();
        res.json(snack);
       }catch(err){ 
           res.json({message:err}); 
       } });
module.exports= router;