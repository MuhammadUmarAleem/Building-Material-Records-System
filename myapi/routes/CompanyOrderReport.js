const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{
    const query = `SELECT CONCAT(Dealer.FirstName,' ',Dealer.LastName) AS DealerName,
    Products.ProductName,
    Date(DealersOrder.OrderDate) AS OrderDate,
    DealersOrderInfo.Quantity,
    DealersOrderInfo.Price,
    (DealersOrderInfo.Quantity * DealersOrderInfo.Price) AS TotalPrice
FROM DealersOrder
JOIN DealersOrderInfo ON DealersOrder.OrderId = DealersOrderInfo.OrderId
JOIN Products ON Products.ProductId = DealersOrderInfo.ProductId
JOIN Users ON Users.UserId = DealersOrder.UserId
JOIN Dealer ON Dealer.UserId = Users.UserId
JOIN Companies ON Companies.CompanyId = Products.CompanyId
WHERE Companies.UserId = ${req.query.UserId}
ORDER BY DealersOrder.OrderDate DESC
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