import React from 'react'
import Footer from './Footer'
import { useState,useEffect } from "react";
import CustomerNavbar from './CustomerNavbar'
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardImage,
  MDBTypography,
  MDBRipple,
} from 'mdb-react-ui-kit'

const CustomerHome = () => {
  const [Product,setProduct] = useState([]);
  const [Loading,setLoading] = useState(false);
  
  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('Category'));
    // window.action.href=`https://majestic-clever-grapple.glitch.me/GetDealerProfile?UserId=${UserId}`; 
    async function fetchData() {
      
      try {
        const response = await fetch(`https://majestic-clever-grapple.glitch.me/GetProductsForCustomer?Category=${urlParams.get('Category')}`);
        const data = await response.json();
        setProduct(data);
        console.log(data)
        setLoading(true);
      } catch (error) {
      console.error(error);
      }
    }
    fetchData();
  },[])


  // const ProductratingUI = ;
  function generateRatingUI(rating) {
    if(rating === null){
      rating = 5;
    }
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



  return (
    
    <div>
      <CustomerNavbar/>
      {Loading? (
      <div>
      <MDBCarousel showControls interval={1500}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt='...'
      />
    </MDBCarousel>
    <MDBContainer fluid className="my-5 text-center " >

      <MDBRow >
      <h4 className="mt-4 mb-5">
        <strong>Products</strong>
      </h4>
      {Product.map((prof,index)=>(
        <MDBCol md="4" lg="3" className="mb-4">
          <a href={`/CustomerSpecificProduct?ProductId=${prof.ProductId}&StockId=${prof.StockId}`} style={{ color: '#000', textAlign: 'left', textDecoration: 'none'}}>
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src={"https://majestic-clever-grapple.glitch.me/images/"+prof.ProductPic}
                fluid
                style={{height:"200px"}}
                className="w-100"
              />
                <div className="mask">
                  <div className="d-flex justify-content-start align-items-end h-100">
                    <h5>
                      <span className="badge bg-success ms-2">{prof.ProductCategory}</span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
            </MDBRipple>
            <div>{generateRatingUI(prof.Rating)}</div>
            <MDBCardBody>
              <div className="text-reset" >
                <h2 className="card-title mb-3 h4">{prof.ProductName}</h2>
              </div>
              <div className="text-reset">
                <h5>{prof.Unit}</h5>
              </div>
              <h2 className="mb-3">{prof.UnitPrice+"(PKR)"}</h2>
              <MDBRow style={{marginBottom:"-30px"}}>
              {/* <MDBCol md="6" lg="6" className="mb-3">
                <a href={`/CompanySpecificProduct?ProductId=${prof.ProductId}`}>
                <button type="button" className="btn btn-primary btn-block mb-4">More</button>
                </a>
              </MDBCol>
              <MDBCol md="6" lg="6" className="mb-3" >
              {checkactive(prof.StatusId)?(<button type="button" onClick={()=>{window.location.href = `https://majestic-clever-grapple.glitch.me/CompanyActiveorInActiveProducts?StatusId=${prof.StatusId}&ProductId=${prof.ProductId}`}} className="btn bg-danger btn-block mb-4" style={{}}>InActive</button>):<button type="button" onClick={()=>{window.location.href = `https://majestic-clever-grapple.glitch.me/CompanyActiveorInActiveProducts?StatusId=${prof.StatusId}&ProductId=${prof.ProductId}`}} className="btn bg-success btn-block mb-4" style={{}}>Active</button>}
              </MDBCol> */}
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
          </a>
        </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
    </div>
    ): <h1>Loading...</h1>}
      <Footer/>
    </div>
  )
}

export default CustomerHome
