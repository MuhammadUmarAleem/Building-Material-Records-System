const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');
var multer=require("multer");
const {storage}=require('../multer/upload')
var upload = multer({ storage });

router.post('/',upload.single("productimg"),(req,res,next)=>{
    try {

    console.log(req.file);
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var contact = req.body.contact;
    var productandservices = req.body.productandservices;
    var UserId = req.query.UserId;
    var query="";
    
    if(req.file){
        console.log("athe");
        var image = req.file.filename;
        query=`Update Dealer SET FirstName  = '${firstname}' , LastName   = '${lastname}' , contact    = '${contact}' , ProductsAndServices = '${productandservices}' , Picture = '${image}' WHERE UserId = ${UserId}`;
    }
    else{
        query=`Update Dealer SET FirstName  = '${firstname}' , LastName   = '${lastname}', contact    = '${contact}', ProductsAndServices = '${productandservices}'  WHERE UserId = ${UserId}`;
    }
    console.log(query);
    connection.query(query, (err, result) => {
        if (err) throw err;
        console.log('Data Updated successfully!');
        console.log(result);
        // send a response to the client
        console.log("Updated");
         res.redirect("https://buildingsrecordsystem.netlify.app/DealersProfile");
      });
    } catch (error) {
        // code to handle the error
        console.error("An error occurred: ", error);
        res.redirect("https://buildingsrecordsystem.netlify.app/DealersProfile");
    }
})

module.exports = router;