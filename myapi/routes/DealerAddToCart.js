const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res)=>{
    try {

    console.log(req.query.ProductId)
    console.log(req.query.UserId)
    console.log(parseInt(req.query.quantity)+parseInt(req.body.ProdThreshold))
    var Query = `Insert into Cart values (${req.query.UserId},${req.query.ProductId})`
    console.log(Query);
    console.log(Query);
    connection.query(Query, (err, result) => {
        if (err) throw err;
        console.log('Data inserted successfully!');
        console.log(result);
        // send a response to the client
        console.log("inserted");
        res.redirect(`https://buildingsrecordsystem.netlify.app/DealerSpecificProduct?ProductId=${req.query.ProductId}`);
        });
    // res.redirect(`https://buildingsrecordsystem.netlify.app/DealerSpecificProduct?ProductId=${req.query.ProductId}`);
} catch (error) {
    // code to handle the error
    console.error("An error occurred: ", error);
    res.redirect(`https://buildingsrecordsystem.netlify.app/DealerSpecificProduct?ProductId=${req.query.ProductId}`);
}
}) 

module.exports = router;