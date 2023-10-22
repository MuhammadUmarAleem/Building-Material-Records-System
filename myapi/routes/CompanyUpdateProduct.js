const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');
const  {Product} = require('./Classes/Product');
var multer=require("multer");
const {storage}=require('../multer/upload')
var upload = multer({ storage });

router.post('/',upload.single("img"),(req,res)=>{
    try {

    console.log(req.query.ProductId);
    console.log(req.body.prodPicture);
    var product = 0;
    if(req.file !== undefined){
        product = new Product(null,null,req.body.prodName,req.body.prodUnit,null,req.body.ProdPrice,req.body.prodCategory,req.body.prodDescription,req.body.ProdThreshold,req.file.filename,1);
    }
    else{
        product = new Product(null,null,req.body.prodName,req.body.prodUnit,null,req.body.ProdPrice,req.body.prodCategory,req.body.prodDescription,req.body.ProdThreshold,null,1);
    }
    console.log(product)
    const userdata = {
        CompanyId :parseInt(product.companyId),
        LaunchedAt : product.launchedAt,
        ProductName : product.productName,
        Unit:product.unit,
        Quantity:parseInt(product.quantity),
        UnitPrice:parseInt(product.unitPrice),
        ProductCategory:product.productCategory,
        ProductDescription:product.productDescription,
        ThresholdQuantity:product.thresholdQuantity,
        ProductPic:product.productPic,
        StatusId:product.statusId,
    }
    console.log(userdata)
    var Query = "";
    if(req.file){
        Query = `Update Products SET ProductName = '${userdata.ProductName}',UnitPrice = ${userdata.UnitPrice},ProductCategory  = '${userdata.ProductCategory}',ProductDescription  = '${userdata.ProductDescription}',ThresholdQuantity  = ${userdata.ThresholdQuantity},Unit  = '${userdata.Unit}',  ProductPic = '${req.file.filename}' WHERE ProductId = ${req.query.ProductId}`
    }
    else{
        Query = `Update Products SET ProductName = '${userdata.ProductName}',UnitPrice = ${userdata.UnitPrice},ProductCategory  = '${userdata.ProductCategory}',ProductDescription  = '${userdata.ProductDescription}',ThresholdQuantity  = ${userdata.ThresholdQuantity},Unit  = '${userdata.Unit}' WHERE ProductId = ${req.query.ProductId}`
    }
    console.log(Query);
    connection.query(Query, (err, result) => {
        if (err) throw err;
        console.log('Data inserted successfully!');
        console.log(result);
        // send a response to the client
        console.log("inserted");
        res.redirect(`https://buildingsrecordsystem.netlify.app/CompanySpecificProduct?ProductId=${req.query.ProductId}`);
        });
    // res.redirect(`https://buildingsrecordsystem.netlify.app/CompanySpecificProduct?ProductId = ${req.query.ProductId}`);
} catch (error) {
    // code to handle the error
    console.error("An error occurred: ", error);
    res.redirect(`https://buildingsrecordsystem.netlify.app/CompanySpecificProduct?ProductId=${req.query.ProductId}`);
}
}) 

module.exports = router;


