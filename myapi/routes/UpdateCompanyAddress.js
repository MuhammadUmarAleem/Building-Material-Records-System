const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.post('/',(req,res,next)=>{
  try {

console.log(req.query.AddressId);
console.log(req.query.AddressId === 'null');
    if (req.query.AddressId === 'null')
    {
        const userdata = {
            address : req.body.address,
            City : req.body.City,
            Country : req.body.Country,
        }

        connection.query('INSERT INTO Address SET ?', userdata, (err, result) => {
            if (err) throw err;
            console.log('Data inserted successfully!');
            console.log(result);
            // send a response to the client
            console.log("inserted");
            // res.redirect("https://buildingsrecordsystem.netlify.app/?register=true");
          });

          const query = `SELECT AddressId FROM Address Where address ='${req.body.address}' and City = '${req.body.City}' and Country = '${req.body.Country}'`;
          var AddressId = 0;
          connection.query(query, (error, results, fields) => {
            if (error) {
              console.error('Error retrieving data from MySQL database:', error);
              return;
            }
            else{
                console.log(results);
                AddressId = results[0].AddressId;
        
                connection.query(`Update Companies SET AddressId = ${AddressId}`,(err, result) => {
                    if (err) throw err;
                    console.log('Data inserted successfully!');
                    console.log(result);
                    // send a response to the client
                    console.log("inserted");
                    res.redirect(`https://buildingsrecordsystem.netlify.app/CompanysProfile`);
                  });
                console.log(results[0].AddressId);
            }
            console.log('Data retrieved from MySQL database:', results);
          });
    }
    else
    {
        query=`Update Address SET address  = '${req.body.address}' , City   = '${req.body.City}', Country   = '${req.body.Country}' WHERE AddressId = ${req.query.AddressId}`;
        console.log(query);
        connection.query(query, (err, result) => {
			if (err) throw err;
			console.log('Data Updated successfully!');
			console.log(result);
			// send a response to the client
			console.log("Updated");
			res.redirect("https://buildingsrecordsystem.netlify.app/CompanysProfile");
      	});
    }
  } catch (error) {
    // code to handle the error
    console.error("An error occurred: ", error);
    res.redirect("https://buildingsrecordsystem.netlify.app/CompanysProfile");
  }
})

module.exports = router;