const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{
    console.log(req.query.StockId);
    var query=`CALL calculate_rating(${req.query.UserId});`;
    connection.query(query, (error, results, fields) => {
        if (error) {
          console.error('Failed to execute the query:', error);
          return;
        }
        console.log(results[0]);
        res.send(results[0]);
      });
    })

module.exports = router;