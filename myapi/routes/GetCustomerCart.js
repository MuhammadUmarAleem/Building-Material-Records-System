const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{
    const query = `SELECT DISTINCT Stock.StockId,Companies.CompanyName,Products.ProductId,Products.LaunchedAt,Products.ProductName,Products.Unit,Products.Quantity,Products.UnitPrice,Products.ProductCategory,Products.ProductDescription,Products.ThresholdQuantity,Products.ProductPic,Products.StatusId FROM CustomerCart JOIN Customer ON Customer.UserId = CustomerCart.UserId JOIN Stock ON Stock.StockId = CustomerCart.StockId JOIN Products ON Products.ProductId = Stock.ProductId JOIN Companies On Companies.CompanyId = Products.CompanyId WHERE Customer.UserId = ${req.query.UserId}`;
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