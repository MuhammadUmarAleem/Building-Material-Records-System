const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');
const  {Product} = require('./Classes/Product');
var multer=require("multer");
const {storage}=require('../multer/upload')
var upload = multer({ storage });

router.post('/',(req,res)=>{
    try {

    console.log(req.query.quantity)
    console.log(req.body.ProdThreshold)
    console.log(parseInt(req.query.quantity)+parseInt(req.body.ProdThreshold))
    var Query = `Update Products SET Quantity = '${parseInt(req.query.quantity)+parseInt(req.body.ProdThreshold)}' Where ProductId = ${req.query.ProductId}`
    console.log(Query);
    connection.query(Query, (err, result) => {
        if (err) throw err;
        console.log('Data inserted successfully!');
        console.log(result);
        // send a response to the client
        console.log("inserted");
        res.redirect(`https://buildingsrecordsystem.netlify.app/CompanyThresholdProducts?ProductId=${req.query.ProductId}`);
        });
    // res.redirect(`https://buildingsrecordsystem.netlify.app/CompanySpecificProduct?ProductId=${req.query.ProductId}`);
} catch (error) {
    // code to handle the error
    console.error("An error occurred: ", error);
    res.redirect(`https://buildingsrecordsystem.netlify.app/CompanyThresholdProducts?ProductId=${req.query.ProductId}`);
}

}) 

module.exports = router;