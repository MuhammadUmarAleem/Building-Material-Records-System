const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res)=>{
    try {

    console.log(req.query.ProductId);
    console.log(req.query.UserId);
    var Query = `Delete from CustomerCart Where UserId = ${req.query.UserId} and StockId = ${req.query.StockId}`
    console.log(Query);
    connection.query(Query, (err, result) => {
        if (err) throw err;
        console.log('Data inserted successfully!');
        console.log(result);
        // send a response to the client
        console.log("inserted");
        res.redirect(`https://buildingsrecordsystem.netlify.app/CustomerCart`);
        });
        // res.redirect(`https://buildingsrecordsystem.netlify.app/DealerCart`);
    } catch (error) {
        // code to handle the error
        console.error("An error occurred: ", error);
        res.redirect(`https://buildingsrecordsystem.netlify.app/CustomerCart`);
      }
}) 

module.exports = router;