const express = require('express');
const app = express()
require('dotenv').config();
const historyRoutes = require('./routes/historyRoutes');
const pool = require('../ServiceUsers/db');
const PORT = process.env.PORT;

app.use(express.json());
app.use('/', historyRoutes);

(async ()=>{
    try{
        await pool.connect()
        console.log('conn')
    }catch(err){
        console.log(err);
    }
})();

app.listen(PORT, ()=>{
  console.log('start');
});


