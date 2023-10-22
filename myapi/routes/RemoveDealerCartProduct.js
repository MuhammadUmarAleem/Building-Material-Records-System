const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res)=>{
    try {

    console.log(req.query.ProductId);
    console.log(req.query.UserId);
    var Query = `Delete from Cart Where UserId = ${req.query.UserId} and ProductId = ${req.query.ProductId}`
    console.log(Query);
    connection.query(Query, (err, result) => {
        if (err) throw err;
        console.log('Data inserted successfully!');
        console.log(result);
        // send a response to the client
        console.log("inserted");
        res.redirect(`https://buildingsrecordsystem.netlify.app/DealerCart`);
        });
        // res.redirect(`https://buildingsrecordsystem.netlify.app/DealerCart`);
    } catch (error) {
        // code to handle the error
        console.error("An error occurred: ", error);
        res.redirect(`https://buildingsrecordsystem.netlify.app/DealerCart`);
      }
}) 

module.exports = router;