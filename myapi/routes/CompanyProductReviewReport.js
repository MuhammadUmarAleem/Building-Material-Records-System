const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{
    const query = `SELECT p.ProductName, p.ProductCategory,COUNT(cr.Review) AS Count FROM CompanyReviews AS cr Right JOIN Products AS p ON p.ProductId = cr.ProductId Left JOIN Companies C On p.CompanyId = C.CompanyId WHERE C.UserId = ${req.query.UserId} GROUP BY p.ProductName, p.ProductCategory,p.ProductId
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