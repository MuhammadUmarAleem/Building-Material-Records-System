import React,{useEffect, useState} from 'react';
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

function Signup() {
  const [role,setrole] = useState();
  const [error,seterror] = useState(false);
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get('role');
    setrole(role);
    console.log(role);
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
  const signupSchema = Yup.object({
    firstname: Yup.string().min(3).max(25).required("Please enter your name"),
    lastname: Yup.string().max(25),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      validateOnChange: true,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onChange:()=>{
        
      },
      onSubmit: (values, action) => {
        document.getElementById('signup').submit();
        action.resetForm();
      },
    });

    function isvalidemail(event){
      event.preventDefault();
      var email = document.getElementById("email").value;
      console.log(users,email)
      for (let i = 0; i < users.length; i++) {
        if (users[i].Email === email) {
          return true;
        }
      }
      return false;
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

          <MDBCard className='my-5 d-flex'>
            <MDBCardBody className='p-5'>
            <h4 className="display-10 fw-bold"style={{marginBottom: "25px"}}>
            Building Material <br />
            <span className="text-primary">Records System</span>
            </h4>
            <form  action={`https://majestic-clever-grapple.glitch.me/Signup?role=${role}`} method='post' id='signup'>
              <MDBRow>
                <MDBCol lg='6' className="md-6">
                  <MDBInput wrapperClass='mb-4' label='First name' id='firstname' name='firstname' type='text'value={values.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {errors.firstname && touched.firstname ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.firstname}</p>
                    ) : null}
                </MDBCol>

                <MDBCol lg='6' className="md-6">
                  <MDBInput wrapperClass='mb-4' label='Last name' id='lastname' name='lastname' type='text'value={values.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {errors.lastname && touched.lastname ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.lastname}</p>
                    ) : null}
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='email' name='email' type='email'value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {errors.email && touched.email ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.email}</p>
                    ) : null}
              <MDBInput wrapperClass='mb-4' label='Password' id='password' name='password' type='password'value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {errors.password && touched.password ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.password}</p>
                    ) : null}
              <MDBInput wrapperClass='mb-4' label='Confirm Password' id='confirm_password' name='confirm_password' type='password' value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.confirm_password}</p>
                    ) : null}

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
                    {console.log(error)}
                    {{error}?(<button type="button" class="btn btn-primary btn-block mb-4" onClick={handleSubmit} onSubmit={handleSubmit}>Signup</button>):<p className="form-error" style={{color:"red", marginTop: "-25px"}}>User Already Exists</p>}

              </form>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Signup;