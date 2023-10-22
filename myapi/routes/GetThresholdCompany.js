const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{
    const query = `SELECT Companies.CompanyName,Products.ProductId,Products.LaunchedAt,Products.ProductName,Products.Unit,Products.Quantity,Products.UnitPrice,Products.ProductCategory,Products.ProductDescription,Products.ThresholdQuantity,Products.ProductPic,Products.StatusId FROM Products JOIN Companies ON Companies.CompanyId = Products.CompanyId WHERE Companies.UserId = ${req.query.UserId} and Products.Quantity <= Products.ThresholdQuantity`;
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