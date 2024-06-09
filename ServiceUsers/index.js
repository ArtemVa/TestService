const express = require('express');
const app = express();
const pool = require('./db');
const userRoutes= require('./routes/user.routes');
require('dotenv').config();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/', userRoutes);

(async ()=>{
    try{
        await pool.connect()
        console.log('conn')
    }catch(err){
        console.log(err);
    }
})();


app.listen(PORT,()=>{
    console.log('start');
});





