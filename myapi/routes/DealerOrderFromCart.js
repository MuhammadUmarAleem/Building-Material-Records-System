const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');
const {DealersOrder} = require('./Classes/DealersOrder');
const {DealersOrderInfo} = require('./Classes/DealersOrderInfo');
const {DealersOrderPayment} = require('./Classes/DealersOrderPayment');
const {Stock} = require('./Classes/Stock');

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

    const UserId = req.query.UserId;
    const ProductId  = req.query.ProductId;
    // const now = new Date();
    const Quantity = req.query.Quantity;
    const Price = req.query.Price;
    const AccountNo = req.body.CardNumber;
    const CVC = req.body.CVV;
    const Month = req.body.Month;
    const Year = req.body.Year;
    console.log(UserId)
    console.log(ProductId)
    console.log(Quantity)
    console.log(Price)
    console.log(AccountNo)
    console.log(CVC)
    console.log(Month)
    console.log(Year)
    
    const DealerOrder = new DealersOrder(UserId,now,1)
    var Query = `Insert into DealersOrder (UserId,OrderDate,PaymantStatusID) values (${DealerOrder.UserId},'${DealerOrder.OrderDate}',${DealerOrder.PaymantStatusID})`;
    console.log(Query)
    connection.query(Query, (err, result) => {
        if (err) throw err;
        console.log('Data inserted successfully!');
        console.log(result);
        console.log("inserted");
      });
      var query = `Select max(OrderId) as OrderId from DealersOrder`;
          let result = null;
          connection.query(query, (error, results, fields) => {
            if (error) {
              console.error('Error retrieving data from MySQL database:', error);
              return;
            }
            else{
                result = results;
                const DealerOrderInfo = new DealersOrderInfo(result[0].OrderId,ProductId,Quantity,Price)
                var Query = `Insert into DealersOrderInfo (OrderId,ProductId,Quantity,Price) values (${DealerOrderInfo.OrderId},${DealerOrderInfo.ProductId},${DealerOrderInfo.Quantity},${DealerOrderInfo.Price})`;
                console.log(Query)
                connection.query(Query, (err, result) => {
                    if (err) throw err;
                    console.log('Data inserted successfully!');
                    console.log(result);
                    console.log("inserted");
                  });
                const amount = Price * Quantity;
                console.log(result[0].OrderId);
                const DealerOrderPayment = new DealersOrderPayment(result[0].OrderId, now,amount , AccountNo, CVC, Month, Year)
                var Querys = `Insert into DealersOrderPayment (DealersOrderId,PaymentDate,Amount,AccountNo,CVC,Month,Year) values (${result[0].OrderId},'${DealerOrderPayment.PaymentDate}',${DealerOrderPayment.Amount},'${DealerOrderPayment.AccountNo}',${DealerOrderPayment.CVC},${DealerOrderPayment.Month},${DealerOrderPayment.Year})`;
                console.log(Querys)
                connection.query(Querys, (err, result) => {
                    if (err) throw err;
                    console.log('Data inserted successfully!');
                    console.log(result);
                    console.log("inserted");
                  });
            }
            console.log('Data retrieved from MySQL database:', results);
          });

      query = `SELECT * from Stock Where ProductId = ${ProductId} and UserId = ${UserId}`;
      let stock = [];
      connection.query(query, (error, results, fields) => {
        if (error) {
          console.error('Error retrieving data from MySQL database:', error);
          return;
        }
        else{
            stock = results;
            console.log(stock);
            if(stock.length !== 0){
              Query = `Update Stock SET Quantity = ${parseInt(Quantity)+parseInt(stock[0].Quantity)}, ReorderLevel = ${stock[0].ReorderLevel + 1},LastOrderDate = '${now}',LastOrderQuantity = ${Quantity} WHERE ProductId = ${ProductId} and UserId = ${UserId}`;
              console.log(Query)
              connection.query(Query, (err, result) => {
                  if (err) throw err;
                  console.log('Data inserted successfully!');
                  console.log(result);
                  console.log("inserted");
                });
            }
            else{
              const Stocks = new Stock(ProductId, UserId, Quantity, Price, 1, now, Quantity, 1)
              Query = `Insert into Stock (ProductId,UserId,Quantity,UnitPrice,ReorderLevel,LastOrderDate,LastOrderQuantity,StatusId) Values (${Stocks.ProductId},${Stocks.UserId},${Stocks.Quantity},${Stocks.UnitPrice},${Stocks.ReorderLevel},'${Stocks.LastOrderDate}',${Stocks.LastOrderQuantity},${Stocks.StatusId})`;
              console.log(Query)
              connection.query(Query, (err, result) => {
                  if (err) throw err;
                  console.log('Data inserted successfully!');
                  console.log(result);
                  console.log("inserted");
                });
            }
        }

        const query = `SELECT Quantity From Products WHere ProductId = ${ProductId}`;
          var Quantitys = 0;
          connection.query(query, (error, results, fields) => {
            if (error) {
              console.error('Error retrieving data from MySQL database:', error);
              return;
            }
            else{
                console.log(results);
                Quantitys = results[0].Quantity;
                var temp = parseInt(Quantitys)-parseInt(Quantity)
                var Query = `Update Products SET Quantity = ${temp} WHERE ProductId = ${ProductId}`;
                console.log(Query)
                connection.query(Query, (err, result) => {
                    if (err) throw err;
                    console.log('Data inserted successfully!');
                    console.log(result);
                    console.log("inserted");
                  });
                console.log('Data retrieved from MySQL database:', results);
                connection.commit(); 
                res.redirect(`https://buildingsrecordsystem.netlify.app/DealerCart?ProductId=${req.query.ProductId}`);
                
                // console.log(results[0].AccountId);
            }
            console.log('Data retrieved from MySQL database:', results);
          });
      });
    } catch (error) {
                connection.rollback();
                // code to handle the error
      console.error("An error occurred: ", error);
      res.redirect(`https://buildingsrecordsystem.netlify.app/DealerCart?ProductId=${req.query.ProductId}`);
    }
}) 

module.exports = router;