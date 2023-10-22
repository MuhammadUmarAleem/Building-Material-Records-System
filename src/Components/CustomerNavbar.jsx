import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import {
  MDBBtn,
} from 'mdb-react-ui-kit';
import { useState,useEffect } from "react";

function CustomerNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [Name, setName] = useState('');

    useEffect(()=>{
      async function fetchData() {
        try {
          const response = await fetch(`https://majestic-clever-grapple.glitch.me/GetUserName?UserId=${localStorage.getItem('UserId')}`);
          const data = await response.json();
          console.log(data)
          setName(data[0].Name);
        } catch (error) {
        console.error(error);
        }
      }
      fetchData();
    },[])

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
        <div style={{backgroundColor:"darkblue",color:"white",padding:"1px",paddingTop:"3px"}}>
            <h3 style={{fontSize:"20px"}}>Welcome to Building Material</h3>
        </div>
        <Navbar bg="primary" variant="dark" expand="lg" style={{height:"80px"}}>
      <Container>
        <Navbar.Brand href="#">
            <img src="https://png.pngtree.com/template/20190717/ourmid/pngtree-home-builder-logo-template-image_229384.jpg" alt="" style={{height:"80px"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon" style={{color:"white"}}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className={isOpen ? 'show' : ''}>
          <Nav className="mx-auto">
          {/* <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Search' aria-label='Search' />
            <MDBBtn color='primary' style={{ borderStyle: 'solid', borderWidth: 0.2, borderColor: 'white' }}>Search</MDBBtn>
          </form> */}
          </Nav>
          <Nav>
          <NavDropdown title="My Account" id="basic-nav-dropdown">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h6 style={{ textAlign: "center", margin: "10px" }}>{Name}</h6>
              <NavDropdown.Item href="\" style={{ textAlign: "center" }}>Log Out</NavDropdown.Item>
            </div>
          </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
        <NavDropdown title="Category" id="basic-nav-dropdown">
            <NavDropdown.Item href={`/CustomersHome?Category=`}>All</NavDropdown.Item>
            <NavDropdown.Item href={`/CustomersHome?Category=Glass and Glazing`}>Glass and Glazing</NavDropdown.Item>
            <NavDropdown.Item href={`/CustomersHome?Category=Paint and Coating`}>Paint and Coating</NavDropdown.Item>
            <NavDropdown.Item href={`/CustomersHome?Category=Flooring Material`}>Flooring Material</NavDropdown.Item>
            <NavDropdown.Item href={`/CustomersHome?Category=Plumbing and Electrical`}>Plumbing and Electrical</NavDropdown.Item>
            <NavDropdown.Item href={`/CustomersHome?Category=Insulation Material`}>Insulation Material</NavDropdown.Item>
            <NavDropdown.Item href={`/CustomersHome?Category=Roofing Material`}>Roofing Material</NavDropdown.Item>
            <NavDropdown.Item href={`/CustomersHome?Category=Steel and Metal`}>Steel and Metal</NavDropdown.Item>
            <NavDropdown.Item href={`/CustomersHome?Category=Lumber and Timber`}>Lumber and Timber</NavDropdown.Item>
            <NavDropdown.Item href={`/CustomersHome?Category=Brick and Masonry`}>Brick and Masonry</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="\CustomerCart">Cart</Nav.Link>
          <Nav.Link href="\CustomerOrders">Orders</Nav.Link>
          <Nav.Link href="\CustomerReports">Reports</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default CustomerNavbar;