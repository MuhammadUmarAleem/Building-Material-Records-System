import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBInput,
  MDBIcon,
  MDBTypography
} from "mdb-react-ui-kit";
import { useState,useEffect } from "react";
import Modal from "react-bootstrap/Modal";
// import CompanyNavbar from "./CompanyNavbar";
import Footer from './Footer';
import { useFormik } from "formik";
import * as Yup from "yup";
import DealerNavbar from "./DealerNavbar";

function DealerStockSpecificProduct() {
  const [productRating,setproductRating] = useState(5);
  const ProductratingUI = generateRatingUI(productRating);
  function generateRatingUI(rating) {
  const fullStarCount = Math.floor(rating);
  const halfStarCount = Math.ceil(rating) - fullStarCount;
  const emptyStarCount = 5 - fullStarCount - halfStarCount;

  const fullStarUI = Array.from({ length: fullStarCount }, (_, i) => (
    <MDBIcon fas icon="star" size="sm"  key={`full-star-${i}`} />
  ));

  const halfStarUI = Array.from({ length: halfStarCount }, (_, i) => (
    <MDBIcon fas icon="star-half-alt" size="sm" key={`half-star-${i}`} />
  ));

  const emptyStarUI = Array.from({ length: emptyStarCount }, (_, i) => (
    <MDBIcon far icon="star" size="sm"  key={`empty-star-${i}`} />
  ));

  return (
    <MDBTypography listUnStyled className="d-flex justify-content-center" style={{ color: '#FFD700' }}>
      {fullStarUI}
      {halfStarUI}
      {emptyStarUI}
    </MDBTypography>
  );
}

  const [selectedImage, setSelectedImage] = useState(
    "data:image/jpeg;base64,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"
    );

  const [show, setShow] = useState(false);
  const [stock, setstock] = useState(false);
  const [Reviews,setReviews] = useState([]);
  const handleCloseModal = () => {setShow(false);setstock(false);};
  const [Product,setProduct] = useState([]);
  const [ProductId,setProductId] = useState(0);
  const[ids,setids] = useState(0);
  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    setids(urlParams.get('ProductId'));
    console.log('local',ids)
    // window.action.href=`https://majestic-clever-grapple.glitch.me/GetDealerProfile?UserId=${UserId}`; 
    async function fetchData() {
      try {
        const response = await fetch(`https://majestic-clever-grapple.glitch.me/GetProductRating?ProductId=${urlParams.get('ProductId')}`);
        const data = await response.json();
        console.log(data[0].Rating)
        if(data[0].Rating !== null){
        setproductRating(data[0].Rating);
        }
        console.log("Profile",data)
      } catch (error) {
      console.error(error);
      }
      try {
        const response = await fetch(`https://majestic-clever-grapple.glitch.me/GetProductReviews?ProductId=${urlParams.get('ProductId')}`);
        const data = await response.json();
        setReviews(data);
        console.log(data)
      } catch (error) {
      console.error("error of productId"+error);
      }
      try {
        const response = await fetch(`https://majestic-clever-grapple.glitch.me/GetProductForDealerStock?ProductId=${urlParams.get('ProductId')}&UserId=${localStorage.getItem('UserId')}`);
        const data = await response.json();
        setProduct(data);
        console.log(data)
        setSelectedImage(Product[0].ProductPic)
        setProductId(data[0].ProductId);
        console.log(data[0].ProductId)
      } catch (error) {
      console.error(error);
      }
    //   try {
    //     console.log(ProductId);
    //     const response = await fetch(`https://majestic-clever-grapple.glitch.me/GetCompanyReviews?ProductId=${urlParams.get('ProductId')}`);
    //     const data = await response.json();
    //     setReviews(data);
    //     console.log(data)
    //   } catch (error) {
    //   console.error("error of productId"+error);
    //   }
    }
    fetchData();
  },[])

  const AddProductSchema = Yup.object({
    ProdPrice: Yup.string().required("Please enter product price"),
  });

  const [product, setproduct] = useState({
    ProdPrice: "abc",
  });
  const ThresholdSchema = Yup.object({
    ProdThreshold: Yup.string().required("Please enter product price"),
  });

  const [Threshold, setThreshold] = useState({
    ProdThreshold: "abc",
  });
  function handlesubmit() {
    setShow(true);
    const urlParams = new URLSearchParams(window.location.search);
    setids(urlParams.get('ProductId'));
    setproduct({
      ProdPrice: Product[0].UnitPrice 
    })
  }
  const handlestock = ()=>{
    setstock(true);
    setThreshold({
      ProdThreshold: Product[0].Threshold 
    })
  }
  
  const handleProdThreshold = (event)=>{
    setThreshold({
      ProdThreshold : event.target.value,
    })
  }
  const handleProdPrice = (event)=>{
    setproduct({
      ProdPrice : event.target.value,
    })
  }
  var temp = product
  var tempschema = AddProductSchema
  if(stock === true){
    temp = Threshold
    tempschema = ThresholdSchema
    
  }
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues:temp,
      validationSchema: tempschema,
      validateOnChange: true,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {
        document.getElementById('CompanyUpdateProduct').submit();
      },
    });

  return (
    <div>
      <DealerNavbar/>
    <MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="7">
        {Product.map((prof,index)=>(
          <MDBCard className="text-black">
            <MDBIcon fab icon="apple" size="lg"/>
            {/* <MDBRow className="justify-content-center bg-primary" style={{ background:"primary"}}>
            <MDBCol md="8"> */}
            <MDBCardImage
              src={`https://majestic-clever-grapple.glitch.me/images/${prof.ProductPic}`}
              position="top"
              style={{height:"350px"}}
              alt="Apple Computer"
            />
            {/* </MDBCol>
            </MDBRow> */}

            <MDBCardBody>
              <div className="text-center">
                <MDBCardTitle>{prof.ProductName}</MDBCardTitle>
                {ProductratingUI}
                <MDBCardTitle>{"Brand: "+prof.CompanyName}</MDBCardTitle>
                <p className="text-muted mb-4"> {prof.ProductDescription} </p>
              </div>
              <div>        
                <div className="d-flex justify-content-between">
                  <span>Product Category</span>
                  <span>{prof.ProductCategory}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Unit</span>
                  <span>{prof.Unit}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Quantity</span>
                  <span>{prof.Quantity}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Threshold Quantity</span>
                  <span>{prof.Threshold}</span>
                </div>
              </div>
              <div className="d-flex justify-content-between total font-weight-bold mt-4">
                <strong> Unit Price </strong>
                <strong> {prof.UnitPrice+"(PKR)"} </strong>
              </div>
              <div className="d-flex flex-row justify-content-center">
              
            </div>
            </MDBCardBody>
            <MDBRow >
              <MDBCol md="4" lg="4" className="mb-3">
              <a href={`/DealerSpecificProduct?ProductId=${ids}`}>
                <button type="button" className="btn btn-primary btn-block mb-4" style={{maxWidth:"200px"}}>Add Stock</button>
              </a>
              </MDBCol>
              <MDBCol md="4" lg="4" className="mb-3">
            <button type="button" size="sm" className="btn bg-warning btn-block mb-4" style={{maxWidth:"200px"}}
                      onClick={handlestock}>Update Threshold Quantity</button>
                  </MDBCol>
              <MDBCol md="4" lg="4" className="mb-3" >
              <button type="button"  className="btn bg-success btn-block mb-4" onClick={handlesubmit} style={{maxWidth:"200px"}}>Update Price</button>
              </MDBCol>
              </MDBRow>
              <MDBCardBody>
              <MDBCol>
                  <h5 style={{color:'blue'}}>Reviews</h5>
                  {Reviews.map((Re,index)=>(
                  <div>
                    <div className="d-flex justify-content-between total font-weight-bold mt-4">
                      <strong>{Re.Name}</strong>
                      <span> {Re.CreatedOn.slice(0, 10)} </span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>{Re.Review}</span>
                      {/* <span>{prof.Quantity}</span> */}
                    </div>
                  </div>
                  ))}
                </MDBCol>
                </MDBCardBody>
          </MDBCard>
        ))}
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>


    <Modal
            show={show}
            onHide={handleCloseModal}
            dialogClassName="modal-90w"
            size="lg"
            id="updatemodal"
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Price
              </Modal.Title>
            </Modal.Header>
        
          <MDBCard >
          <MDBCardBody>
            {/* <form enctype='multipart/from-data'  action={`https://majestic-clever-grapple.glitch.me/CompanyUpdateProduct?ProductId=${ProductId}`} method='post' > */}
            {console.log("ids",ids)}
            <form action={`https://majestic-clever-grapple.glitch.me/UpdateDealerStockPrice?ProductId=${ids}&UserId=${localStorage.getItem('UserId')}&Price=${product.ProdPrice}`} encType='multipart/form-data' method="post">
            
              <MDBRow>
                <MDBCol lg='9' className="md-6" onChange={handleProdPrice}>
                  <MDBInput wrapperClass='mb-4' label='Product Price' id='ProdPrice' name='ProdPrice' type='number'value={product.ProdPrice}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {errors.ProdPrice && touched.ProdPrice ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>{errors.ProdPrice}</p>
                    ) : null}
                </MDBCol>
                <MDBCol lg='3' className="md-6">
                <button value="submit" style={{minWidth:"150px" ,padding: "0.25rem 0.5rem", fontSize: "1.0rem"}} class="btn btn-primary btn-block mb-4">Update</button>
                </MDBCol>
              </MDBRow>
                </form>
            </MDBCardBody>
          </MDBCard>
      </Modal>




      <Modal
            show={stock}
            onHide={handleCloseModal}
            dialogClassName="modal-90w"
            size="lg"
            id="updatemodal"
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Threshold Quantity
              </Modal.Title>
            </Modal.Header>
        
          <MDBCard >
          <MDBCardBody>
            {/* <form enctype='multipart/from-data'  action={`https://majestic-clever-grapple.glitch.me/CompanyUpdateProduct?ProductId=${ProductId}`} method='post' > */}
            {console.log("ids",ids)}
            {/* Product[0].Quantity */}
            <form action={`https://majestic-clever-grapple.glitch.me/UpdateDealerThreshold?ProductId=${ids}&UserId=${localStorage.getItem('UserId')}`} method="post">
              

              <MDBRow>
                <MDBCol lg='9' className="md-6" onChange={handleProdThreshold}>
                  <MDBInput wrapperClass='mb-4' label='Quantity' id='ProdThreshold' name='ProdThreshold' type='number'value={Threshold.ProdThreshold}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
                      {errors.ProdThreshold && touched.ProdThreshold ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>Enter Quantity</p>
                    ) : null}
                </MDBCol>
                <MDBCol lg='3' className="md-6">
                <button value="submit" style={{minWidth:"150px" ,padding: "0.25rem 0.5rem", fontSize: "1.0rem"}} class="btn btn-primary btn-block mb-4">Update</button>
                </MDBCol>
              </MDBRow>              
                </form>
            </MDBCardBody>
          </MDBCard>
      </Modal>
  <Footer/>
    </div>
  );
}

export default DealerStockSpecificProduct;