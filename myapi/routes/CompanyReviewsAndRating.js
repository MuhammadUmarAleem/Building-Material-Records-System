const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');
const  {CompanyRating} = require('./Classes/CompanyRating');
const  {CompanyReviews} = require('./Classes/CompanyReview');
const strftime = require('strftime');


router.post('/',(req,res)=>{
  try {
    connection.beginTransaction();
    const dated = new Date();
    const now = strftime('%Y-%m-%d %H:%M:%S', dated);
    console.log(req.query.ProductId)
    console.log(req.query.rating)
    console.log(req.query.UserId)
    console.log(req.body.Review)
    if(req.query.rating != 0){
        const query = `SELECT * FROM CompanyRating Where ProductId =${req.query.ProductId} and UserId = ${req.query.UserId}`;
          connection.query(query, (error, results, fields) => {
            if (error) {
              console.error('Error retrieving data from MySQL database:', error);
              return;
            }
            else{
                console.log(results.length);
                if(results.length === 0){
                    const CompanyRatings = new CompanyRating(req.query.ProductId,req.query.rating,now,req.query.UserId)
                    var Query = `Insert into CompanyRating (ProductId,Rate,RatingOn,UserId) values (${CompanyRatings.ProductId},${CompanyRatings.Rate},'${CompanyRatings.RatingOn}',${CompanyRatings.UserId})`
                    console.log(Query);
                    connection.query(Query, (err, result) => {
                    if (err) throw err;
                    console.log('Data inserted successfully!');
                    console.log(result);
                    // send a response to the client
                    console.log("inserted");
                    // res.redirect(`https://buildingsrecordsystem.netlify.app/DealerSpecificProduct?ProductId=${req.query.ProductId}`);
                    });

                }
                else{
                    connection.query(`Update CompanyRating SET Rate = ${req.query.rating} Where ProductId =${req.query.ProductId} and UserId = ${req.query.UserId}`,(err, result) => {
                    if (err) throw err;
                    console.log('Data inserted successfully!');
                    console.log(result);
                    // send a response to the client
                    console.log("inserted");
                    // res.redirect(`https://buildingsrecordsystem.netlify.app/CompanysProfile`);
                  });
                }
            }
            console.log('Data retrieved from MySQL database:', results);
          });















        
    }
    if(req.body.Review != ''){
        const CompanyReview = new CompanyReviews(req.query.ProductId,req.body.Review,now,req.query.UserId)
        var Query = `Insert into CompanyReviews (ProductId,Review,CreatedOn,UserId) values (${CompanyReview.ProductId},'${CompanyReview.Review}','${CompanyReview.CreatedOn}',${CompanyReview.UserId})`
        console.log(Query);
        connection.query(Query, (err, result) => {
            if (err) throw err;
            console.log('Data inserted successfully!');
            console.log(result);
            // send a response to the client
            console.log("inserted");
            // res.redirect(`https://buildingsrecordsystem.netlify.app/DealerOrders?ProductId=${req.query.ProductId}`);
            });
        }
        connection.commit(); 
        res.redirect(`https://buildingsrecordsystem.netlify.app/DealerOrders?ProductId=${req.query.ProductId}`);
    // res.redirect(`https://buildingsrecordsystem.netlify.app/DealerSpecificProduct?ProductId=${req.query.ProductId}`);
  } catch (error) {
    // code to handle the error
    connection.rollback();
    console.error("An error occurred: ", error);
    res.redirect(`https://buildingsrecordsystem.netlify.app/DealerOrders?ProductId=${req.query.ProductId}`);
  }
}) 

module.exports = router;