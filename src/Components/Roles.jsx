import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBContainer,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Roles() {
  return (
    <MDBContainer fluid className='p-4' class='d-flex align-items-center' style={{margin:'40px',marginTop:'120px'}}>
    <MDBRow>
      <MDBCol lg='4' className="md-6">
        <MDBCard style={{marginTop:'10px'}}>
          <MDBCardBody>
            <MDBCardTitle className="text-primary">Leaders in Innovation and Quality - Discover Our Story</MDBCardTitle>
            <MDBCardText style={{textAlign:'justify'}}>
            Join our network of trusted partners and gain access to a vast customer base across the country. Our platform offers a simple and seamless onboarding process, along with powerful tools to manage your business and grow your brand.

            </MDBCardText>
            <Link to = "/CreateCompany"><button type="button" class="btn btn-primary btn-block mb-4">Create a Company</button></Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol lg='4' className="md-6">
        <MDBCard style={{marginTop:'10px'}}>
          <MDBCardBody >
            <MDBCardTitle className="text-primary">Trusted Partners for Your Business Needs - Let's Grow Together</MDBCardTitle>
            <MDBCardText style={{textAlign:'justify',paddingBottom:'25px'}}>
            Join our team of dealers and gain access to exclusive products, discounts, and support. Our platform offers a seamless onboarding process, along with powerful tools to manage your inventory and track your sales.

            </MDBCardText >
            <Link to = "/CustomerSignup?role=Dealer"><button type="button" class="btn btn-primary btn-block mb-4">Signup as a Dealer</button></Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol lg='4' className="md-6">
        <MDBCard style={{marginTop:'10px'}}>
          <MDBCardBody >
            <MDBCardTitle className="text-primary">Experience the best of what we have to offer-join now.</MDBCardTitle>
            <MDBCardText style={{textAlign:'justify'}}>
            Join our community of satisfied customers and gain access to a wide range of products and services. Our platform offers a simple and secure signup process, along with a seamless checkout experience and personalized recommendations based on your preferences.
            </MDBCardText>
            <Link to = "/CustomerSignup?role=Customer"><button type="button" class="btn btn-primary btn-block mb-4">Signup as a Customer</button></Link>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </MDBContainer>
  );
}