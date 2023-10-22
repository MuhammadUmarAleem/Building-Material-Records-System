const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{
    var UserId = req.query.UserId;
    console.log(req.query.UserId);
    console.log(UserId);
    var query=`CALL get_company_rating(${UserId})`;
    connection.query(query, (error, results, fields) => {
        if (error) {
          console.error('Failed to execute the query:', error);
          return;
        }
        console.log(results);
        console.log(results[0])
        res.send(results[0]);
      });
    })

module.exports = router;