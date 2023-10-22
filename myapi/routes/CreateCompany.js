const express = require('express');
const router = express.Router();
const {connection}=require('../Database/database');
const {Companies} = require('./Classes/Companies');
const  {User} = require('./Classes/user');
const {Address} = require ('./Classes/Address');

router.post('/', async (req,res)=>{ // added async to use await

  try {
    await connection.beginTransaction(); // Begin transaction

    const user = new User(req.body.email,req.body.password,1);
    const UserId = parseInt(req.query.UserId)+1;
    const AddressId = parseInt(req.query.AddressId)+1;
    console.log(UserId,AddressId);
    const userdata = {
      email : user.email,
      password : user.password,
      roleId : user.roleId,
    }
    await connection.query('INSERT INTO Users SET ?', userdata); // Using await instead of a callback

    const addresss = new Address(req.body.Address,req.body.city,req.body.country);
    const addressdata = {
      address : addresss.address,
      city : addresss.city,
      country : addresss.country,
    }
    await connection.query('INSERT INTO Address SET ?', addressdata); // Using await instead of a callback

    const query = 'SELECT CompanyTypeId FROM CompanyType Where Type = "'+ req.query.option +'"';
    let companytypeId = null;
    const [results] = await connection.query(query);
    companytypeId = results[0].CompanyTypeId;
    const Company = new Companies(req.body.companyname,req.body.ownername,AddressId,companytypeId,UserId);
    const Companiesdata = {
      companyMission : null,
      companyHistory : null,
      productsAndServices : null,
      companyName : Company.companyName,
      picture:null,
      company_contact : null,
      ownerName:Company.ownerName,
      addressId:Company.addressId,
      companyTypeId:Company.companyTypeId,
      userId : Company.userId,
    } 
    await connection.query('INSERT INTO Companies SET ?', Companiesdata); // Using await instead of a callback

    await connection.commit(); // Commit transaction

    console.log('Data inserted successfully!');
    res.redirect("https://buildingsrecordsystem.netlify.app/");

  } catch (error) {
    await connection.rollback(); // Rollback transaction
    console.error("An error occurred: ", error);
    res.redirect("https://buildingsrecordsystem.netlify.app/CreateCompany");
  }
}) 

module.exports = router;
