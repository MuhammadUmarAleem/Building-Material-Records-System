const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{
    var UserId = req.query.UserId;
    console.log(req.query.UserId);
    console.log(UserId);
    var query=`Select Stock.ProductId,Stock.Quantity,Stock.UnitPrice,Status.StatusId,Products.ProductName,Products.ProductPic From Stock Join Products ON Products.ProductId = Stock.ProductId JOIN Status ON Status.StatusId = Stock.StatusId WHERE Stock.UserId = ${UserId}`;
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