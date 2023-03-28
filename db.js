const knex = require("knex")
require('dotenv').config()

//database connection
 const db = knex({
    client: 'mysql2',
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      database : process.env.DB_DATABASE
    }
  });

  //check the connection
  db.raw("SELECT VERSION()").then(()=>{
    console.log('knex successfull');
  }).catch((err)=>{
    console.error(err.message);
  })

  module.exports = db