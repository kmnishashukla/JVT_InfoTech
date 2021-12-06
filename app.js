const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
require('dotenv').config()
const app = express();
const cors = require("cors");

const product = require('./route/product');

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello JVT Infotech"
    })
})

app.use(cors());
app.use(express.json()) 

app.use('/product',product);

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
   
}).then(console.log('DB CONNECTED')).catch(error=>{
    console.log(error);
});

let port = process.env.PORT || 4000
app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`);
})