const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');
const  {Product} = require('./Classes/Product');
var multer=require("multer");
const {storage}=require('../multer/upload')
var upload = multer({ storage });

router.post('/',upload.single("img"),(req,res)=>{
  try {
    
    console.log(req.query.UserId);
    console.log(req.body.prodPicture);
    const image=req.file.filename;
    console.log(image);
    const query = `SELECT CompanyId FROM Companies Where UserId = ${req.query.UserId}`;
          var companyId = 0;
          connection.query(query, (error, results, fields) => {
            if (error) {
              console.error('Error retrieving data from MySQL database:', error);
              return;
            }
            else{
                console.log(results);
                const currentDate = new Date();
                companyId = results[0].CompanyId;
                const product = new Product(companyId,currentDate,req.body.prodName,req.body.prodUnit,req.body.ProdQuantity,req.body.ProdPrice,req.body.prodCategory,req.body.prodDescription,req.body.ProdThreshold,req.file.filename,1);
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
                connection.query('INSERT INTO Products SET ?', userdata, (err, result) => {
                    if (err) throw err;
                    console.log('Data inserted successfully!');
                    console.log(result);
                    // send a response to the client
                    console.log("inserted");
                    res.redirect("https://buildingsrecordsystem.netlify.app/CompanyAddProduct");
                    });
            }
        });
      } 
      catch (error) {
        // code to handle the error
        console.error("An error occurred: ", error);
        res.redirect("https://buildingsrecordsystem.netlify.app/CompanyAddProduct");
        }
}) 

module.exports = router;


