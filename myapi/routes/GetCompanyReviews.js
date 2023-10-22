const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{
    var ProductId = req.query.ProductId;
    console.log(req.query.ProductId);
    console.log(ProductId);
    var query=`SELECT *
    FROM GetCompanyReviews 
    WHERE GetCompanyReviews.ProductId = ${ProductId};    
    `;
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