const express = require('express')
const db = require("./db")
require('dotenv').config()

const userRoute = require('./routes/userRoute')
const contactRoute = require('./routes/contactRoute')

//creating express app
const app = express()

//middleware
app.use(express.json())

port = process.env.PORT || 6000

app.get("/",(req,res)=>{
    console.log('welcome');

})
  
//routes
app.use('/user', userRoute)
app.use('/contacts', contactRoute)

app.listen(port, () => {
 console.log(`Listening on port: ${port}`);
});

