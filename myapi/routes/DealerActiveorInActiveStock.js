const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.get('/',(req,res,next)=>{ 
    try {

    if(parseInt(req.query.StatusId) === 1){
        query=`Update Stock Set StatusId = 2 WHERE ProductId = ${req.query.ProductId}`;
    }
    else{
        query=`Update Stock Set StatusId = 1 WHERE ProductId = ${req.query.ProductId}`;
    }
    console.log(query);
    connection.query(query, (err, result) => {
        if (err) throw err;
        console.log('Data Updated successfully!');
        console.log(result);
        // send a response to the client
        console.log("Updated");
         res.redirect("https://buildingsrecordsystem.netlify.app/DealerStock");
      });
    } catch (error) {
        // code to handle the error
        console.error("An error occurred: ", error);
        res.redirect("https://buildingsrecordsystem.netlify.app/DealerStock");
    }
})

module.exports = router;