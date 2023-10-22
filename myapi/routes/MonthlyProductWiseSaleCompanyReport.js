const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{

    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    
    const now = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    
    var query=`SELECT P.ProductName,P.ProductCategory,SUM(D.Quantity) AS Quantity,P.UnitPrice,Sum(D.Quantity*D.Price) AS TotalSale FROM DealersOrderInfo D JOIN Products P ON P.ProductId = D.ProductId JOIN Companies C ON C.CompanyId = P.CompanyId JOIN DealersOrder DO ON DO.OrderId = D.OrderId  WHERE C.UserId = ${req.query.UserId} and DATEDIFF(DO.OrderDate, '${now}') <= 30 GROUP BY D.ProductId,P.ProductName,P.ProductCategory,P.UnitPrice`;
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