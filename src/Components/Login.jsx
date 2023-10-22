import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';

function Login() {
  const [users,setUsers] = useState([]);
  const [error,setError] = useState(false);
    useEffect(()=>{
      async function fetchData() {
        try {
          const response = await fetch("https://majestic-clever-grapple.glitch.me/Login");
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    },[])

    const loginSchema = Yup.object({
        email: Yup.string().email().required("Please enter your email"),
        password: Yup.string().min(6).required("Please enter your password"),
      });
    const initialValues = {
        email: "",
        password: "",
      };

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: (values, action) => {
          action.resetForm();
      },
    });

    const checklogin = (event)=>{
      event.preventDefault();
      var isfound = false;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      for (let i = 0; i < users.length; i++) {
        if (users[i].Email === email && users[i].Password === password ) {
          isfound = true;
          localStorage.setItem("email", users[i].Email);
          localStorage.setItem("role", users[i].RoleId);
          localStorage.setItem("UserId", users[i].UserId);
          console.log(users[i]);
          if (users[i].RoleId === 1) {
            window.location.href = `/CompanysHome?UserId=${users[i].UserId}`;
            console.log(users[i].RoleId);
          }
          console.log(users[i].RoleId);
          if (users[i].RoleId === 2) {
            window.location.href = `/DealersHome?UserId=${users[i].UserId}`;
            console.log(users[i].RoleId);
          }
          if (users[i].RoleId === 3) {
            window.location.href = `/CustomersHome?UserId=${users[i].UserId}&Category=`;
            console.log(users[i].RoleId);
          }
        }
      }
      if (isfound === false) {
        setError(true);
      }
    }

  return (

    <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='7' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
          Efficiency at its best  <br />
            <span className="text-primary">Our Material Records System</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
          The Build material records system is a software application that allows construction companies to manage and track their inventory of building materials. It provides real-time information on material usage, stock levels, and order status, helping to streamline project management and reduce costs. The system can also generate reports and forecasts for better decision-making.
          </p>

        </MDBCol>

        <MDBCol md='4'>

          <MDBCard className='my-5 '>
            <MDBCardBody className='p-5'>
            <h4 className="display-10 fw-bold"style={{marginBottom: "25px"}}>
            Building Material <br />
            <span className="text-primary">Records System</span>
            </h4>
              <MDBRow></MDBRow>
              <form onClick={handleSubmit} >
              <MDBInput  wrapperClass='mb-4' label='Email' id='email' name='email' type='email' value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {/* {errors.email && touched.email ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.email}</p>
                    ) : null} */}
              <MDBInput wrapperClass='mb-4' label='Password' id='password' name='password' type='password' value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {/* {errors.password && touched.password ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.password}</p>
                    ) : null} */}

              <div className='d-flex justify-content-center mb-4'>
              <p>
                      Don't Have Account?{" "}
                      <Link
                        to="/Roles"
                        style={{
                          textDecoration: "none",
                          marginRight: "8px",
                        }}
                      >
                        Signup
                      </Link>
                    </p></div>
              {error? (
                <p className="form-error" style={{color:"red", marginTop: "-25px"}}>Incorrect Username or Password</p>
              ) :<p></p>}
              <button type="button" class="btn btn-primary btn-block mb-4" onClick={checklogin}>Login</button>
              {/* <MDBBtn className='mb-4' size='lg' onClick={handleSubmit}>Register</MDBBtn> */}
              {/* <MDBBtn className='w-100 mb-4' size='md' onClick={handleSubmit}>Login</MDBBtn> */}
              </form>
              

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}



export default Login;