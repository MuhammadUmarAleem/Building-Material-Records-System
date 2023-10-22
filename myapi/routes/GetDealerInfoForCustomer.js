const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{
    const query = `Select Dealer.UserId,Dealer.FirstName, Dealer.LastName,Dealer.Picture,Dealer.ProductsAndServices,Dealer.contact FROM Stock JOIN Dealer ON Dealer.UserId = Stock.UserId Where Stock.StockId = ${req.query.StockId}`;
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