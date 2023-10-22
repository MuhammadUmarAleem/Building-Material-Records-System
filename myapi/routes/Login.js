const express = require('express');
var router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{
var query='SELECT * from Users';
connection.query(query, (error, results, fields) => {
    if (error) {
      console.error('Failed to execute the query:', error);
      return;
    }
    console.log(results);
    res.send(results);
  });
})
module.exports = router;