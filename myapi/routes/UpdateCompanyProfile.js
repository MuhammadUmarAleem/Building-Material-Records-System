const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');
var multer=require("multer");
const {storage}=require('../multer/upload')
var upload = multer({ storage });

router.post('/',upload.single("productimg"),(req,res,next)=>{
    try {

    console.log("athe");
    // console.log(req.file.filename)
    var UserId = req.query.UserId;
    var query="";
    
    if(req.file){
        console.log("athe");
        var image = req.file.filename;
        query=`Update Companies SET CompanyMission  = '${req.body.Mission}' , CompanyHistory   = '${req.body.History}' , ProductsAndServices    = '${req.body.ProductsAndServices}' , CompanyName = '${req.body.CompanyName}', company_contact = '${req.body.company_contact}', ownername = '${req.body.ownername}' , Picture = '${image}' WHERE UserId = ${UserId}`;
    }
    else{
        console.log("othe");
        query=`Update Companies SET CompanyMission  = '${req.body.Mission}' , CompanyHistory   = '${req.body.History}' , ProductsAndServices    = '${req.body.ProductsAndServices}' , CompanyName = '${req.body.CompanyName}', company_contact = '${req.body.company_contact}', ownername = '${req.body.ownername}' WHERE UserId = ${UserId}`;
    }
    console.log(query);
    connection.query(query, (err, result) => {
        if (err) throw err;
        console.log('Data Updated successfully!');
        console.log(result);
        // send a response to the client
        console.log("Updated");
         res.redirect("https://buildingsrecordsystem.netlify.app/CompanysProfile");
      });
    } catch (error) {
        // code to handle the error
        console.error("An error occurred: ", error);
        res.redirect("https://buildingsrecordsystem.netlify.app/CompanysProfile");
    }
})

module.exports = router;