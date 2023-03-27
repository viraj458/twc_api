const express = require('express')
const knex = require("knex")
require('dotenv').config()

//creating express app
const app = express()


//create connection with mysql
const db = knex({
    client: 'mysql',
    connection: {
      host : process.env.DB_HOST,
      port : process.env.DB_PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_DATABASE
    }
  });



  port = process.env.PORT || 6000

  app.get("/",(req,res)=>{
      res.send("Welcome to api")
  })
  
  //start the server
  app.listen(port,()=>{
      console.log(`Listening on port:${port}`)
  })