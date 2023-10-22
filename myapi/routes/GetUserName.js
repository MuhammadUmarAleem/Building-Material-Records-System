const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{
    console.log(req.query.ProductId);
    var query=`SELECT CONCAT(FirstName,' ', LastName) as Name from Customer Where UserId = ${req.query.UserId}`;
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