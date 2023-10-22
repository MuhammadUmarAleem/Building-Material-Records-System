import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBProgress,
    MDBProgressBar,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
  import { Col, Row, Form, Container, Button } from "react-bootstrap";
  import React from "react";
  import Footer from './Footer'
import DealerNavbar from './DealerNavbar'
import { useState,useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Rating } from "react-simple-star-rating";
// import {MDBRating } from 'mdbreact';



  
  export default function DealerOrders() {

    const [Product, setProduct] = useState(false);
    const [show, setShow] = useState(false);
    const [rating, setRating] = useState(0);
    const handleRating = (rate) => {
        setRating(rate);
        console.log(rate)
        console.log(rating)
        // Some logic
      };
    const [ProductId, setProductId] = useState(0);
    const [Review, setReview] = useState('');
    const handleCloseModal = () => {setShow(false);};
      const [UserId,setUserId] = useState(0);

    useEffect(()=>{
        setUserId(localStorage.getItem('UserId'));
        // window.action.href=`https://majestic-clever-grapple.glitch.me/GetDealerProfile?UserId=${UserId}`; 
        async function fetchData() {
          try {
            const response = await fetch(`https://majestic-clever-grapple.glitch.me/GetOrderofUserId?UserId=${localStorage.getItem('UserId')}`);
            const data = await response.json();
            setProduct(data);
            console.log(data)
          } catch (error) {
          console.error(error);
          }
        }
        fetchData();
      },[])
    
      function handleReview(event){
        setReview(event.target.value)
      }

      function handleSubmit(){
        console.log("OK");
        document.getElementById('formreview').submit();
        // action.resetForm();
      }

    return (
      <>
    <DealerNavbar/>
      
        {Product?(<section
          className="h-100 gradient-custom"
          style={{ backgroundColor: "#eee" }}
        >
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="10" xl="8">
                <MDBCard style={{ borderRadius: "10px" }}>
                  <MDBCardHeader className="px-4 py-5">
                    <MDBTypography tag="h5" className="text-muted mb-0">
                      Thanks for your,{" "}
                      <span style={{ color: "#007bff" }}>Orders</span>!
                    </MDBTypography>
                  </MDBCardHeader>
                  <MDBCardBody className="p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <p
                        className="lead fw-normal mb-0"
                        style={{ color: "#a8729a" }}
                      >
                        Receipts
                      </p>
                    </div>
      {Product.map((prof,index)=>(

                    <MDBCard className="shadow-0 border mb-4">
                      <MDBCardBody>
                        <a href={`/DealerSpecificProduct?ProductId=${prof.ProductId}`} style={{ color: '#000', textAlign: 'left', textDecoration: 'none'}}>

                        <MDBRow>
                          <MDBCol md="2">
                            <MDBCardImage
                              src={`https://majestic-clever-grapple.glitch.me/images/${prof.ProductPic}`}
                              fluid
                              alt="Phone"
                            />
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0">{prof.ProductName}</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">{prof.ProductCategory}</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">
                              {"Unit: "+prof.Unit}
                            </p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">{"Qty: "+prof.Quantity} </p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">{prof.Price+"(PKR)"}</p>
                          </MDBCol>
                        </MDBRow>
                        <hr
                          className="mb-4"
                          style={{ backgroundColor: "#007bff", opacity: 1 }}
                        />
                        </a>
                        <MDBRow className="align-items-center">
                          <MDBCol md="2">
                            <p className="text-muted mb-0 small">Order Details</p>
                          </MDBCol>
                          <MDBCol md="10">
                            <MDBProgress
                              style={{ height: "6px", borderRadius: "16px" }}
                            >
                              <MDBProgressBar
                                style={{
                                  borderRadius: "16px",
                                  backgroundColor: "#007bff",
                                }}
                                width={100}
                                valuemin={0}
                                valuemax={100}
                              />
                            </MDBProgress>
                            <div className="d-flex justify-content-around mb-1">
                              <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                Order Done
                              </p>
                              <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                Payment Done
                              </p>
                            </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBCardFooter
                    className="border-0 px-4 py-5"
                    style={{
                      backgroundColor: "#007bff",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                    }}
                  >
                    <MDBRow>
                      <MDBCol className="font-italic mb-1 md-6" lg='6' style={{ marginTop: "10px"}} >
                      <button onClick={()=>{setShow(true);setProductId(prof.ProductId);setReview('');}} type="button" size="sm" className="btn bg-warning btn-block mb-4 mt-20"
                     style={{fontSize: '15px'}}>Leave a Review</button>
                      </MDBCol>
                      <MDBCol className="font-italic mb-1 md-6" lg='6' style={{ marginTop: "10px" }} >
                        <MDBTypography
                        tag="h5"
                        className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                        >
                        Total paid: <span className="h2 mb-0 ms-2">{(prof.Price*prof.Quantity)+"(PKR)"}</span>
                        </MDBTypography>
                    </MDBCol>
                </MDBRow>
                    
                  </MDBCardFooter>
                      </MDBCardBody>
                    </MDBCard>
      ))}
                  </MDBCardBody>
                  
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>):
        (<section
        className="h-100 gradient-custom"
        style={{ backgroundColor: "#eee" }}
      >
        <MDBContainer className="py-5 h-100" style={{margin: "auto"}}>
          <MDBRow className="justify-content-center align-items-center h-100 w-50">
            <MDBCol lg="10" xl="8">
              <MDBCard style={{ borderRadius: "10px" }}>
                <MDBCardHeader className="px-4 py-5">
                  <MDBTypography tag="h5" className="text-muted mb-0">
                    No Order,{" "}
                    <span style={{ color: "#007bff" }}>Yet</span>!
                  </MDBTypography>
                </MDBCardHeader>
                  
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>)
        }

        <Modal
            show={show}
            onHide={handleCloseModal}
            dialogClassName="modal-90w"
            size="sm"
            id="updatemodal"
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Review
              </Modal.Title>
            </Modal.Header>
            <form action={`https://majestic-clever-grapple.glitch.me/CompanyReviewsAndRating?rating=${rating}&ProductId=${ProductId}&UserId=${localStorage.getItem('UserId')}`} method="post" id="formreview">
            <MDBCard className='d-flex'>
            <MDBCardBody className='p-0'>
            <MDBRow>
            <label style={{ textAlign: "left", marginRight: "auto", marginBottom: "4px" }}>Review</label>
            <textarea wrapperClass='mb-2' label='Review' rows="4" id='Review' name='Review' type='Review' value={Review}
              onChange={handleReview} />
                </MDBRow>
                <MDBRow>
                <MDBCol lg='6' className="md-6">

                <Form.Group controlId="formRating">
                                  <Form.Label>Rating:</Form.Label>
                                  <Rating
                                    onClick={handleRating}
                                    ratingValue={rating}
                                    size={20}
                                    label
                                    transition
                                    fillColor="orange"
                                    emptyColor="gray"
                                    className="foo" // Will remove the inline style if applied
                                  />
                                  {/* Use rating value */}
                                  
                                </Form.Group>
                </MDBCol>
            <button type="button" className="btn btn-primary btn-block mb-4" style={{maxWidth:"150px",marginTop:"10px",marginLeft:"auto",marginRight:"auto"}} onClick={handleSubmit}>Submit</button>
      
                </MDBRow>
          </MDBCardBody>
          </MDBCard>
          </form>
            </Modal>


    <Footer/>

      </>
    );
  }