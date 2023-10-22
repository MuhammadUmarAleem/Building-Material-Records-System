const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');
const {CustomersOrder} = require('./Classes/CustomerOrder');
const {CustomersOrderInfo} = require('./Classes/CustomerOrderInfo');
const {CustomersOrderPayment} = require('./Classes/CustomerOrderPayment');

router.post('/',(req,res)=>{
    try {
        connection.beginTransaction();


const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

const now = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

// console.log(currentDatetime);
var AddressId = 0;
    const UserId = req.query.UserId;
    const ProductId  = req.query.ProductId;
    // const now = new Date();
    const Quantity = req.query.Quantity;
    const Price = req.query.Price;
    const AccountNo = req.body.CardNumber;
    const CVC = req.body.CVV;
    const Month = req.body.Month;
    const Year = req.body.Year;
    console.log(req.body.Country);
    console.log(req.body.City);
    console.log(req.body.address)
    console.log(req.query.DealerId)
    console.log(UserId)
    console.log(ProductId)
    console.log(Quantity)
    console.log(Price)
    console.log(AccountNo)
    console.log(CVC)
    console.log(Month)
    console.log(Year)


    function order(){
        const DealerOrder = new CustomersOrder(UserId,now,1)
        var Query = `Insert into CustomersOrder (UserId,OrderDate,PaymantStatusID) values (${DealerOrder.userId},'${DealerOrder.orderDate}',${DealerOrder.paymentStatusId})`;
        console.log(Query)
        connection.query(Query, (err, result) => {
            if (err) throw err;
            console.log('Data inserted successfully!');
            console.log(result);
            console.log("inserted");
        });
        var query = `Select max(OrderId) as OrderId from CustomersOrder`;
            let result = null;
            connection.query(query, (error, results, fields) => {
                if (error) {
                console.error('Error retrieving data from MySQL database:', error);
                return;
                }
                else{
                    result = results;
                    const DealerOrderInfo = new CustomersOrderInfo(result[0].OrderId,ProductId,req.query.DealerId,Price,Quantity,AddressId)
                    var Query = `Insert into CustomersOrderInfo (OrderId,ProductId,DealerId,Price,Quantity,AddressId) values (${DealerOrderInfo.orderId},${DealerOrderInfo.productId},${DealerOrderInfo.dealerId},${DealerOrderInfo.price},${DealerOrderInfo.quantity},${DealerOrderInfo.addressId})`;
                    console.log(Query)
                    connection.query(Query, (err, result) => {
                        if (err) throw err;
                        console.log('Data inserted successfully!');
                        console.log(result);
                        console.log("inserted");
                    });
                    const amount = Price * Quantity;
                    console.log(result[0].OrderId);
                    const DealerOrderPayment = new CustomersOrderPayment(result[0].OrderId, now,amount , AccountNo, CVC, Month, Year)
                    var Querys = `Insert into CustomersOrderPayment (CustomersOrderId,PaymentDate,Amount,AccountNo,CVC,Month,Year) values (${DealerOrderPayment.customersOrderId},'${DealerOrderPayment.paymentDate}',${DealerOrderPayment.amount},'${DealerOrderPayment.accountNo}',${DealerOrderPayment.cvc},${DealerOrderPayment.month},${DealerOrderPayment.year})`;
                    console.log(Querys)
                    connection.query(Querys, (err, result) => {
                        if (err) throw err;
                        console.log('Data inserted successfully!');
                        console.log(result);
                        console.log("inserted");
                    });
                    connection.commit(); 
                    res.redirect(`https://buildingsrecordsystem.netlify.app/CustomerSpecificProduct?ProductId=${req.query.ProductId}&StockId=${req.query.StockId}`);
       
                }
                console.log('Data retrieved from MySQL database:', results);
            });
    }


    const query = `SELECT AddressId FROM Address Where address ='${req.body.address}' and City = '${req.body.City}' and Country = '${req.body.Country}'`;
    connection.query(query, (error, results, fields) => {
      if (error) {
        console.error('Error retrieving data from MySQL database:', error);
        return;
      }
      else{
          console.log(results);
          if(results.length === 0){
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
                connection.query(query, (error, results, fields) => {
                if (error) {
                console.error('Error retrieving data from MySQL database:', error);
                return;
                }
                else{
                    console.log(results);
                    AddressId = results[0].AddressId;
                    order();
                }
                console.log('Data retrieved from MySQL database:', results);
            });
          }       
          else{
            AddressId = results[0].AddressId;
            order();
          }
          console.log(AddressId)
      }
       
      console.log('Data retrieved from MySQL database:', results);
    });

} catch (error) {
                    connection.rollback();
                    // code to handle the error
    console.error("An error occurred: ", error);
    res.redirect(`https://buildingsrecordsystem.netlify.app/CustomerSpecificProduct?ProductId=${req.query.ProductId}&StockId=${req.query.StockId}`);
}

}) 

module.exports = router;