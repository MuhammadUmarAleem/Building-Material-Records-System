import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
  MDBInput,
} from "mdb-react-ui-kit";
import DealerNavbar from "./DealerNavbar";
import Modal from "react-bootstrap/Modal";
import Footer from './Footer';
import { useState,useEffect } from "react";

function DealerThreshold() {
  const [Product,setProduct] = useState([]);
  const [Loading,setLoading] = useState(false);
  const[ids,setids] = useState(0);
  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    setids(urlParams.get('ProductId'));
    // window.action.href=`https://majestic-clever-grapple.glitch.me/GetDealerProfile?UserId=${UserId}`; 
    async function fetchData() {
      try {
        const response = await fetch(`https://majestic-clever-grapple.glitch.me/GetDealerThreshold?UserId=${localStorage.getItem("UserId")}`);
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

  const handlestock = ()=>{
    setstock(true);
    
  }

  const[quantity,setquantity] = useState(0);
  const [stock, setstock] = useState(false);
  const handleCloseModal = () => {setstock(false);};
  const [stockq , setstockq ] = useState('');
  const [stockerror , setstockerror ] = useState(false);

  function checkactive(temp){
    if(temp === 1){
      return true;
    }
    else{
      return false;
    }
  }
  function handlestockq (event){
    if(stockq === ''){
      setstockerror(true)
    }
    else{
        setstockerror(false)
      
    }
      setstockq(event.target.value);
      console.log(stockq);
   }

  return (
    <div>
      
      <DealerNavbar/>
      {Loading? (
        <div>
    <MDBContainer fluid className="my-5 text-center " >

      <MDBRow >
      {Product.map((prof,index)=>(
        <MDBCol md="4" lg="3" >
          <MDBCard >
          <a href={`/DealerStockSpecificProduct?ProductId=${prof.ProductId}`} style={{textDecoration:"none",color:"black"}}>
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
            <a href={`/DealerStockSpecificProduct?ProductId=${prof.ProductId}`} style={{textDecoration:"none",color:"black"}}>
            
              <div className="text-reset">
                <h1 className="card-title mb-3 h2">{prof.ProductName}</h1>
              </div>
              {false?(<h5>{"Threshold:"+prof.ProductId }</h5>):null}
              <div className="text-reset">
                <h5>{"Threshold:"+prof.Threshold }</h5>
              </div>
              <h4 className="mb-3">{"Available:"+prof.Quantity}</h4>
              </a>
              <MDBRow style={{marginBottom:"-30px"}}>
              <MDBCol md="12" lg="12" className="mb-3">
              <a href={`/DealerSpecificProduct?ProductId=${prof.ProductId}`}>
                <button  type="button" className="btn btn-primary btn-block mb-4">Add Stock</button>
                </a>
              </MDBCol>
              </MDBRow>
            </MDBCardBody>
            
          </MDBCard>
        </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
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
                Stock
              </Modal.Title>
            </Modal.Header>
        
          <MDBCard >
          <MDBCardBody>
            {/* <form enctype='multipart/from-data'  action={`https://majestic-clever-grapple.glitch.me/CompanyUpdateProduct?ProductId=${ProductId}`} method='post' > */}
            {console.log("ids",ids)}
            {/* Product[0].Quantity */}
            <form action={`https://majestic-clever-grapple.glitch.me/CompanyAddStockInThreshold?ProductId=${ids}&quantity=${quantity}`} method="post">
              

              <MDBRow>
                <MDBCol lg='9' className="md-6" onChange={handlestockq}>
                  <MDBInput wrapperClass='mb-4' label='Quantity' id='ProdThreshold' name='ProdThreshold' type='number'value={stockq}
                      />
                      {stockerror ? (
                      <p className="form-error" style={{color:"red", marginTop: "-25px"}}>Enter Quantity</p>
                    ) : null}
                </MDBCol>
                <MDBCol lg='3' className="md-6">
                <button value="submit" style={{minWidth:"150px" ,padding: "0.25rem 0.5rem", fontSize: "1.0rem"}} class="btn btn-primary btn-block mb-4">Add Stock</button>
                </MDBCol>
              </MDBRow>              
                </form>
            </MDBCardBody>
          </MDBCard>
      </Modal>
      </div>
    ): <h1>Loading...</h1>}
    <Footer/>
    
</div>
  );
}

export default DealerThreshold;


