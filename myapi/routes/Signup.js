const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');
const {Customer} = require('./Classes/Customer');
const  {User} = require('./Classes/user');
const  {Dealer} = require('./Classes/Dealer');




router.post('/',(req,res)=>{
  try {

    var role = req.query.role;
    if(role === 'Dealer')
    {
        const user = new User(req.body.email,req.body.password,2);
        console.log(req.body.email,req.body.password)
        console.log(user.email,user.password,user.roleId)
        const userdata = {
            email : user.email,
            password : user.password,
            roleId : user.roleId,
        }

        connection.query('INSERT INTO Users SET ?', userdata, (err, result) => {
            if (err) throw err;
            console.log('Data inserted successfully!');
            console.log(result);
            // send a response to the client
            console.log("inserted");
            // res.redirect("https://buildingsrecordsystem.netlify.app/?register=true");
          });

          const query = `SELECT UserId FROM Users Where Email ='${user.email}' and Password = '${user.password}'`;
          var userId = 0;
          connection.query(query, (error, results, fields) => {
            if (error) {
              console.error('Error retrieving data from MySQL database:', error);
              return;
            }
            else{
                console.log(results);
                userId = results[0].UserId;
                const dealer = new Dealer(req.body.firstname,req.body.lastname,userId);
                const dealerdata = {
                    firstName : dealer.firstName,
                    lastName : dealer.lastName,
                    picture : null,
                    productsAndServices : null,
                    contact : null,
                    userId : dealer.userId,
                    addressId : null,
                    accountId : null
                } 
        
                connection.query('INSERT INTO Dealer SET ?', dealerdata, (err, result) => {
                    if (err) throw err;
                    console.log('Data inserted successfully!');
                    console.log(result);
                    // send a response to the client
                    console.log("inserted");
                    res.redirect("https://buildingsrecordsystem.netlify.app/?register=true");
                  });
                console.log(results[0].UserId);
            }
            console.log('Data retrieved from MySQL database:', results);
          });
          
        


    }
    
    else{
        const user = new User(req.body.email,req.body.password,3);
        console.log(req.body.email,req.body.password)
        console.log(user.email,user.password,user.roleId)
        const userdata = {
            email : user.email,
            password : user.password,
            roleId : user.roleId,
        }


        connection.query('INSERT INTO Users SET ?', userdata, (err, result) => {
          if (err) throw err;
          console.log('Data inserted successfully!');
          console.log(result);
          // send a response to the client
          console.log("inserted");
          res.redirect("https://buildingsrecordsystem.netlify.app/?register=true");
        });

          const query = `SELECT UserId  FROM Users Where Email ='${user.email}' and Password = '${user.password}'`;
          let userId = 0;
          connection.query(query, (error, results, fields) => {
            if (error) {
              console.error('Error retrieving data from MySQL database:', error);
              return;
            }
            else{
              console.log(results);
              console.log(results[0].UserId);
              console.log(typeof results[0].UserId);
                userId = results[0].UserId;
                const customer = new Customer(req.body.firstname,req.body.lastname,userId);
        const customerdata = {
            firstName : customer.firstName,
            lastName : customer.lastName,
            userId : customer.userId
        } 

        connection.query('INSERT INTO Customer SET ?', customerdata, (err, result) => {
            if (err) throw err;
            console.log('Data inserted successfully!');
            console.log(result);
            // send a response to the client
            console.log("inserted");
            // res.redirect("https://buildingsrecordsystem.netlify.app/?register=true");
          });

            }
            console.log('Data retrieved from MySQL database:', results);
          });
        
    }
  } catch (error) {
    // code to handle the error
    console.error("An error occurred: ", error);
    res.redirect("https://buildingsrecordsystem.netlify.app/?register=true");
  }

}) 

module.exports = router;


