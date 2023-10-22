const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{
    var query=`Select Stock.ProductId,Stock.Threshold,Stock.Quantity,Stock.UnitPrice,Status.StatusId,Products.ProductName,Products.ProductPic From Stock Join Products ON Products.ProductId = Stock.ProductId JOIN Status ON Status.StatusId = Stock.StatusId WHERE Stock.UserId = ${req.query.UserId} and Stock.Quantity <= Stock.Threshold`;
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