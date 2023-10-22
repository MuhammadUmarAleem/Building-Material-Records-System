import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import CompanyNavbar from "./CompanyNavbar";
import Footer from './Footer';
import { useState,useEffect } from "react";

function CompanyViewProducts() {
  const [Product,setProduct] = useState([]);
  const [Loading,setLoading] = useState(false);
  useEffect(()=>{
    // window.action.href=`https://majestic-clever-grapple.glitch.me/GetDealerProfile?UserId=${UserId}`; 
    async function fetchData() {
      try {
        const response = await fetch(`https://majestic-clever-grapple.glitch.me/GetProductCompany?UserId=${localStorage.getItem("UserId")}`);
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

  function checkactive(temp){
    if(temp === 1){
      return true;
    }
    else{
      return false;
    }
  }

  return (
    <div>
      
      <CompanyNavbar/>
      {Loading? (
        <div>
    <MDBContainer fluid className="my-5 text-center " >

      <MDBRow >
      {Product.map((prof,index)=>(
        <MDBCol md="4" lg="3" >
          <MDBCard >
          <a href={`/CompanySpecificProduct?ProductId=${prof.ProductId}`}>
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
                      {checkactive(prof.StatusId)?(<span className="badge bg-success ms-2">Active</span>):<span className="badge bg-danger ms-2">InActive</span>}
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
            </a>

            <MDBCardBody>
              <div className="text-reset">
                <h2 className="card-title mb-3 h4">{prof.ProductName}</h2>
              </div>
              <div className="text-reset">
                <h5>{prof.Unit}</h5>
              </div>
              <h2 className="mb-3">{prof.UnitPrice+"(PKR)"}</h2>
              <MDBRow style={{marginBottom:"-30px"}}>
              <MDBCol md="6" lg="6" className="mb-3">
                <a href={`/CompanySpecificProduct?ProductId=${prof.ProductId}`}>
                <button type="button" className="btn btn-primary btn-block mb-4">More</button>
                </a>
              </MDBCol>
              <MDBCol md="6" lg="6" className="mb-3" >
              {checkactive(prof.StatusId)?(<button type="button" onClick={()=>{window.location.href = `https://majestic-clever-grapple.glitch.me/CompanyActiveorInActiveProducts?StatusId=${prof.StatusId}&ProductId=${prof.ProductId}`}} className="btn bg-danger btn-block mb-4" style={{}}>InActive</button>):<button type="button" onClick={()=>{window.location.href = `https://majestic-clever-grapple.glitch.me/CompanyActiveorInActiveProducts?StatusId=${prof.StatusId}&ProductId=${prof.ProductId}`}} className="btn bg-success btn-block mb-4" style={{}}>Active</button>}
              </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
    </div>
    ): <h1>Loading...</h1>}
    <Footer/>
    
</div>
  );
}

export default CompanyViewProducts;


