const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{
  console.log(req.query.ProductId);
    const query = `SELECT Stock.UnitPrice,Stock.Quantity,Stock.Threshold,Companies.CompanyName,Products.ProductId,Products.ProductName,Products.Unit,Products.ProductCategory,Products.ProductDescription,Products.ProductPic,Products.StatusId FROM Products JOIN Companies ON Companies.CompanyId = Products.CompanyId JOIN Stock ON Stock.ProductId = Products.ProductId WHERE Stock.ProductId = ${req.query.ProductId} and Stock.UserId = ${req.query.UserId}`;
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