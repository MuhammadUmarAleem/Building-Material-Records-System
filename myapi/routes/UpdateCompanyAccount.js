const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');

router.post('/',(req,res,next)=>{
  try {

console.log(req.query.AccountId);
console.log(req.query.AccountId === 'null');
    if (req.query.AccountId === 'null')
    {
        const userdata = {
            AccountBank : req.body.AccountBank,
            AccountNumber : (req.body.AccountNumber),
            AccountTitle : req.body.AccountTitle,
        }

        connection.query('INSERT INTO Account SET ?', userdata, (err, result) => {
            if (err) throw err;
            console.log('Data inserted successfully!');
            console.log(result);
            // send a response to the client
            console.log("inserted");
            // res.redirect("https://buildingsrecordsystem.netlify.app/?register=true");
          });

          const query = `SELECT AccountId FROM Account Where AccountBank ='${req.body.AccountBank}' and AccountNumber = '${req.body.AccountNumber}' and AccountTitle = '${req.body.AccountTitle}'`;
          var AccountId = 0;
          connection.query(query, (error, results, fields) => {
            if (error) {
              console.error('Error retrieving data from MySQL database:', error);
              return;
            }
            else{
                console.log(results);
                AccountId = results[0].AccountId;
        
                connection.query(`Update Companies SET AccountId = ${AccountId}`,(err, result) => {
                    if (err) throw err;
                    console.log('Data inserted successfully!');
                    console.log(result);
                    // send a response to the client
                    console.log("inserted");
                    res.redirect("https://buildingsrecordsystem.netlify.app/CompanysProfile");
                  });
                console.log(results[0].AccountId);
            }
            console.log('Data retrieved from MySQL database:', results);
          });
    }
    else
    {
        query=`Update Account SET AccountBank  = '${req.body.AccountBank}' , AccountTitle   = '${req.body.AccountTitle}', AccountNumber   = '${req.body.AccountNumber}' WHERE AccountId = ${req.query.AccountId}`;
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