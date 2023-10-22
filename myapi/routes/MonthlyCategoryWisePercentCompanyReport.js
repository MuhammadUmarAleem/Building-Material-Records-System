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
    
    var query=`SELECT 
    P.ProductCategory,
    (SELECT SUM(D.Quantity) as Total 
     FROM DealersOrderInfo D 
     JOIN DealersOrder DO ON DO.OrderId = D.OrderId 
     JOIN Products P ON P.ProductId = D.ProductId 
     JOIN Companies C ON C.CompanyId = P.CompanyId 
     WHERE C.UserId = ${req.query.UserId} and DATEDIFF(DO.OrderDate, '${now}')) AS TotalQuantity,
    SUM(D.Quantity) AS SoldQuantity,
    ROUND(SUM(D.Quantity)*100/(SELECT SUM(D.Quantity) as Total 
                                FROM DealersOrderInfo D 
                                JOIN DealersOrder DO ON DO.OrderId = D.OrderId 
                                JOIN Products P ON P.ProductId = D.ProductId 
                                JOIN Companies C ON C.CompanyId = P.CompanyId 
                                WHERE C.UserId = ${req.query.UserId} and DATEDIFF(DO.OrderDate, '${now}')), 2) AS Percentage 
  FROM DealersOrderInfo D 
  JOIN Products P ON P.ProductId = D.ProductId 
  JOIN DealersOrder DO ON DO.OrderId = D.OrderId 
  JOIN Companies C ON C.CompanyId = P.CompanyId 
  WHERE C.UserId = ${req.query.UserId} and DATEDIFF(DO.OrderDate, '${now}')
  GROUP BY P.ProductCategory`;
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