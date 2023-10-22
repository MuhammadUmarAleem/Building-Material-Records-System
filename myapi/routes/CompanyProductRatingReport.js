const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{
    const query = `SELECT p.ProductName, p.ProductCategory,
    SUM(CASE WHEN cr.Rate = 5 THEN 1 ELSE 0 END) AS Rating_5,
    SUM(CASE WHEN cr.Rate = 4 THEN 1 ELSE 0 END) AS Rating_4,
    SUM(CASE WHEN cr.Rate = 3 THEN 1 ELSE 0 END) AS Rating_3,
    SUM(CASE WHEN cr.Rate = 2 THEN 1 ELSE 0 END) AS Rating_2,
    SUM(CASE WHEN cr.Rate = 1 THEN 1 ELSE 0 END) AS Rating_1
    FROM CompanyRating AS cr Right JOIN Products AS p
ON p.ProductId = cr.ProductId
JOIN Companies C On p.CompanyId = C.CompanyId
WHERE C.UserId = ${req.query.UserId}
GROUP BY p.ProductName, p.ProductCategory,p.ProductId;
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