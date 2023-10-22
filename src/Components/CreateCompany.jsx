import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState,useEffect } from 'react';
import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';

function CreateCompany() {
  const [UserId,setUserId] = useState(0);
  const [AddressId,setAddressId] = useState(0);
  const [data,setdata] = useState([]);
  const [option,setoption] = useState();
  const [optionerror,setoptionerror] = useState(false);

  useEffect(()=>{;
    // window.action.href=`https://majestic-clever-grapple.glitch.me/GetDealerProfile?UserId=${UserId}`; 
    async function fetchData() {
      try {
        const response = await fetch(`https://majestic-clever-grapple.glitch.me/GetMaxIdUser`);
        const data = await response.json();
        setUserId(data[0].UserId);
        console.log(data[0].UserId)
      } catch (error) {
      console.error(error);
      }
      try {
        const response = await fetch(`https://majestic-clever-grapple.glitch.me/GetMaxIdAddress`);
        const data = await response.json();
        setAddressId(data[0].AddressId);
        console.log(data[0].AddressId)
      } catch (error) {
      console.error(error);
      }
      try {
        const response = await fetch("https://majestic-clever-grapple.glitch.me/GetCompanyType");
        const data = await response.json();
        setdata(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  },[])

  const signupSchema = Yup.object({
    companyname: Yup.string().min(3).max(40).required("Please enter your company name"),
    ownername: Yup.string().min(3).max(25).required("Please enter your owner name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
    country: Yup.string().min(3).max(25).required("Please enter your country"),
    city: Yup.string().min(3).max(25).required("Please enter your city"),
    Address: Yup.string().min(3).max(100).required("Please enter your Address"),
    companytype: Yup.string().min(3).max(25).required("Please enter your company type"),
  });

  const initialValues = {
    companyname: "",
    ownername: "",
    email: "",
    password: "",
    country:"",
    city:"",
    Address:"",
    companytype:""
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      validateOnChange: true,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {
        // console.log(values);
        
      },
    });

    const submitform=(event)=>{
      document.getElementById('signupform').submit();
    }

    const handleoption = (event) => {
      setoption(event.target.value);
      if(option === ""){
        setoptionerror(true);
      }
      else{
        setoptionerror(false);
      }
    };

  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='4' className='text-center text-md-start d-flex flex-column justify-content-center'>

        <h4 className="my-5 display-3 fw-bold ls-tight px-3" style={{fontSize: '50px'}}>
          Efficiency at its best  <br />
            <span className="text-primary">Our Material Records System</span>
          </h4>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)',textAlign:'justify'}}>
          The Build material records system is a software application that allows construction companies to manage and track their inventory of building materials. It provides real-time information on material usage, stock levels, and order status, helping to streamline project management and reduce costs. The system can also generate reports and forecasts for better decision-making.
          </p>

        </MDBCol>

        <MDBCol md='7' >

          <MDBCard className='my-5 d-flex'>
            <MDBCardBody className='p-5'>
            <h4 className="display-10 fw-bold"style={{marginBottom: "25px"}}>
            Building Material <br />
            <span className="text-primary">Records System</span>
            </h4>
            <form action={`https://majestic-clever-grapple.glitch.me/CreateCompany?UserId=${UserId}&AddressId=${AddressId}&option=${option}`} method='post' id="signupform">
            
            <MDBRow>
                <MDBCol lg='6' className="md-6">
                  <MDBInput wrapperClass='mb-4' label='Company Name' id='companyname' name='companyname' type='text'value={values.companyname}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {errors.companyname && touched.companyname ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.companyname}</p>
                    ) : null}
                </MDBCol>
                <MDBCol lg='6' className="md-6">
                    <MDBInput wrapperClass='mb-4' label='Owner Name' id='ownername' name='ownername' type='text'value={values.ownername}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {errors.ownername && touched.ownername ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.ownername}</p>
                    ) : null}
                </MDBCol>
            </MDBRow>

            <MDBRow>
            <MDBCol lg='6' className="md-6">
            <MDBInput wrapperClass='mb-4' label='Email' id='email' name='email' type='email'value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {errors.email && touched.email ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.email}</p>
                    ) : null}
            </MDBCol>
            <MDBCol lg='6' className="md-6">
            <MDBInput wrapperClass='mb-4' label='Password' id='password' name='password' type='password'value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {errors.password && touched.password ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.password}</p>
                    ) : null}
            </MDBCol>
            </MDBRow>

            <MDBRow>
            <MDBCol lg='6' className="md-6">
            <MDBInput wrapperClass='mb-4' label='Country' id='country' name='country' type='country'value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {errors.country && touched.country ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.country}</p>
                    ) : null}
            </MDBCol>
            <MDBCol lg='6' className="md-6">
            <MDBInput wrapperClass='mb-4' label='City' id='city' name='city' type='city'value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {errors.city && touched.city ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.city}</p>
                    ) : null}
            </MDBCol>
            </MDBRow>

            <MDBRow>
            <MDBCol lg='6' className="md-6">
            <MDBInput wrapperClass='mb-4' label='Address' id='Address' name='Address' type='Address'value={values.Address}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {errors.Address && touched.Address ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.Address}</p>
                    ) : null}
            </MDBCol>
            <MDBCol md="6" className="md-6">
                <Form>
                  <InputGroup>
                    <select
                      className="form-select"
                      value={option}
                      onChange={handleoption}
                    >
                      <option value="">Choose Category</option>
                      {data.map((option) => (
                        <option key={option.Id}>{option.Type}</option>
                      ))}
                    </select>
                  </InputGroup>
                  <span id="category-error"></span>
                </Form>
                {optionerror ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>Select Category</p>
                    ) : null}
              </MDBCol>
            </MDBRow>

              <div className='d-flex justify-content-center mb-4'>
              <p>
                      Already Have an Account?{" "}
                      <Link
                        to="/"
                        style={{
                          textDecoration: "none",
                          marginRight: "8px",
                        }}
                      >
                        Login
                      </Link>
                    </p></div>

                    <button className='btn btn-primary btn-block mb-4' onClick={submitform}>SignUp</button>

                    </form>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default CreateCompany;