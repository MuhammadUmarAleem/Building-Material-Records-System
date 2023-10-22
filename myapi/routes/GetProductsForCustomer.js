const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{
    console.log(req.query.Category);
    var query=`Select * From GetProductsForCustomer 
    WHERE GetProductsForCustomer.ProductCategory LIKE '%${req.query.Category}%' 
    `;
    connection.query(query, (error, results, fields) => {
        if (error) {
          console.error('Failed to execute the query:', error);
          return;
        }
        console.log(results);
        console.log("OK?")
        res.send(results);
      });
    })

module.exports = router;