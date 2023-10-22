const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{
    console.log(req.query.ProductId);
    var query=`CALL calculate_ratings(${req.query.ProductId});`;
    connection.query(query, (error, results, fields) => {
        if (error) {
          console.error('Failed to execute the query:', error);
          return;
        }
        console.log(results);
        res.send(results[0]);
      });
    })

module.exports = router;