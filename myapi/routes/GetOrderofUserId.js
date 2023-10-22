const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{
    const query = `SELECT Products.ProductPic,Products.ProductId,Products.ProductCategory,Products.ProductName,Products.Unit,DealersOrderInfo.Quantity,DealersOrderInfo.Price FROM DealersOrder Join DealersOrderInfo ON DealersOrder.OrderId = DealersOrderInfo.OrderId Join Products ON Products.ProductId = DealersOrderInfo.ProductId JOIN Users ON Users.UserId = DealersOrder.UserId Where Users.UserId =${req.query.UserId} ORDER BY DealersOrder.OrderDate DESC;`;
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