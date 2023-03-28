const express = require('express')
const db = require("./db")
require('dotenv').config()


//creating express app
const app = express()

port = process.env.PORT || 6000

app.get("/",(req,res)=>{
    console.log('welcome');
})
  

app.listen(port, () => {
 console.log(`Listening on port: ${port}`);
});

