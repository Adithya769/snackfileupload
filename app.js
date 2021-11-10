const express=require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const snacksRoutes = require('./routes/snacks');
app.use('/snacks',snacksRoutes);

const uploadRoutes = require('./routes/uploads');
app.use('/uploads', uploadRoutes);

//database connect
mongoose.connect("mongodb://localhost:27017/abcdeDb",()=>{
    console.log("Database Connected")
});

app.listen(7070);