const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{
    var UserId = req.query.UserId;
    console.log(req.query.UserId);
    console.log(UserId);
    var query=`SELECT Users.Email,Companies.CompanyMission ,CompanyType.Type, Companies.CompanyHistory ,Companies.ProductsAndServices ,Companies.CompanyName ,Companies.Picture ,Companies.company_contact  ,Companies.ownername,Companies.AddressId ,Companies.CompanyTypeId,Companies.AccountId ,Address.address,Address.City,Address.Country,Account.AccountBank,Account.AccountNumber,Account.AccountTitle  from Users JOIN Companies  ON Users.UserId = Companies.UserId LEFT JOIN Address ON Address.AddressId = Companies.AddressId LEFT JOIN Account ON Account.AccountId = Companies.AccountId JOIN CompanyType ON CompanyType.CompanyTypeId = Companies.CompanyTypeId WHERE Users.UserId = ${UserId}`;
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