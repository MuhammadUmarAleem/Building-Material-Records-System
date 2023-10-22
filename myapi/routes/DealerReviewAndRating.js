const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');
const  {DealerRating} = require('./Classes/DealerRating');
const  {DealerReviews} = require('./Classes/DealerReviews');
const strftime = require('strftime');


router.post('/',(req,res)=>{
  try {

    connection.beginTransaction();
    const dated = new Date();
    const now = strftime('%Y-%m-%d %H:%M:%S', dated);
    console.log(req.query.ProductId)
    console.log(req.query.rating)
    console.log(req.query.DealerId)
    console.log(req.query.UserId)
    console.log(req.body.Review)
    if(req.query.rating != 0){
        const from = '`From`'
        const to = '`To`'
        const query = `SELECT * FROM DealerRating Where ProductId =${req.query.ProductId} and ${from} = ${req.query.UserId} and ${to} = ${req.query.DealerId}`;
          connection.query(query, (error, results, fields) => {
            if (error) {
              console.error('Error retrieving data from MySQL database:', error);
              return;
            }
            else{
                console.log(results.length);
                if(results.length === 0){
                    const CompanyRatings = new DealerRating(req.query.ProductId,req.query.rating,now,req.query.UserId,req.query.DealerId)
                    var Query = `Insert into DealerRating (ProductId,Rate,RatingOn,${from},${to}) values (${CompanyRatings.productId},${CompanyRatings.rate},'${CompanyRatings.ratingOn}',${CompanyRatings.from},${CompanyRatings.to})`
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
                    connection.query(`Update DealerRating SET Rate = ${req.query.rating} Where ProductId =${req.query.ProductId} and ${from} = ${req.query.UserId}  and ${to} = ${req.query.DealerId}`,(err, result) => {
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
        const from = '`From`'
        const to = '`To`'
        const CompanyReview = new DealerReviews(req.query.ProductId,req.body.Review,now,req.query.UserId,req.query.DealerId)
        var Query = `Insert into DealerReviews (ProductId,Review,CreatedOn,${from},${to}) values (${CompanyReview.productId},'${CompanyReview.review}','${CompanyReview.createdOn}',${CompanyReview.from},${CompanyReview.to})`
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
        res.redirect(`https://buildingsrecordsystem.netlify.app/CustomerOrders?ProductId=${req.query.ProductId}`);
    // res.redirect(`https://buildingsrecordsystem.netlify.app/DealerSpecificProduct?ProductId=${req.query.ProductId}`);
  } catch (error) {
    connection.rollback();
    // code to handle the error
    console.error("An error occurred: ", error);
    res.redirect(`https://buildingsrecordsystem.netlify.app/CustomerOrders?ProductId=${req.query.ProductId}`);
  }
}) 

module.exports = router;