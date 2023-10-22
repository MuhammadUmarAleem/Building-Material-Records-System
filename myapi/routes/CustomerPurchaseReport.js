const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{
    const query = `SELECT Products.ProductName,Products.ProductCategory,CustomersOrderInfo.Quantity,CustomersOrderInfo.Price,(CustomersOrderInfo.Quantity*CustomersOrderInfo.Price) AS TotalPrice FROM CustomersOrder Join CustomersOrderInfo ON CustomersOrder.OrderId = CustomersOrderInfo.OrderId Join Products ON Products.ProductId = CustomersOrderInfo.ProductId JOIN Users ON Users.UserId = CustomersOrder.UserId Where Users.UserId =${req.query.UserId} ORDER BY CustomersOrder.OrderDate DESC;`;
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