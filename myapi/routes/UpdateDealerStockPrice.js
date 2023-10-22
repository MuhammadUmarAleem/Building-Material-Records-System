const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.post('/',(req,res,next)=>{
    try {

    console.log(req.query.ProductId)
    console.log(req.query.UserId)
    console.log(req.query.Price)
    query=`Update Stock SET UnitPrice  = ${req.query.Price} WHERE UserId = ${req.query.UserId} and ProductId = ${req.query.ProductId}`;
    console.log(query);
    connection.query(query, (err, result) => {
        if (err) throw err;
        console.log('Data Updated successfully!');
        console.log(result);
        // send a response to the client
        console.log("Updated");
         res.redirect(`https://buildingsrecordsystem.netlify.app/DealerStockSpecificProduct?ProductId=${req.query.ProductId}`);
      });
    } catch (error) {
        // code to handle the error
        console.error("An error occurred: ", error);
        res.redirect(`https://buildingsrecordsystem.netlify.app/DealerStockSpecificProduct?ProductId=${req.query.ProductId}`);
    }
})

module.exports = router;