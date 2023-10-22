import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import {
  MDBBtn,
} from 'mdb-react-ui-kit';


const CompanyNavbar = () => {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    async function fetchData() {
      setUsers(localStorage.getItem("UserId"))
    }

    fetchData();
  },[])


  const [isOpen, setIsOpen] = useState(false);

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
              <NavDropdown.Item href={`\CompanysProfile?UserId=${users}`} style={{ textAlign: "center" }}>My Profile</NavDropdown.Item>
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
        {/* <NavDropdown title="Category" id="basic-nav-dropdown">
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
          </NavDropdown> */}
          <Nav.Link href="\CompanysHome">Home</Nav.Link>
          <Nav.Link href="\CompanyAddProduct">Add Product</Nav.Link>
          <Nav.Link href="\CompanyThresholdProducts">Threshold</Nav.Link>
          <Nav.Link href="\CompanyReports">Reports</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );



//   return (
//     <div>
// <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
//   <div class="container-fluid">
//     <button
//       class="navbar-toggler"
//       type="button"
//       data-mdb-toggle="collapse"
//       data-mdb-target="#navbarSupportedContent"
//       aria-controls="navbarSupportedContent"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <i class="fas fa-bars"></i>
//     </button>

//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <a class="navbar-brand mt-2 mt-lg-0" href="\CompanysHome">
        
//       </a>
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <div class="container-fluid">
//           <span class="navbar-brand mb-0 h1">Company's Portal</span>
//         </div>
//         <li class="nav-item">
//           <a class="nav-link" href="\CompanysHome">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="\CompanyAddProduct">Add Products</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="\CompanyThresholdProducts">Threshold</a>
//         </li>
//       </ul>
//     </div>

//     <div class="d-flex align-items-center">
//       <div class="dropdown">
//         <a
//           class="dropdown-toggle d-flex align-items-center hidden-arrow"
//           href="#"
//           id="navbarDropdownMenuAvatar"
//           role="button"
//           data-mdb-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <img
//             src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
//             class="rounded-circle"
//             height="25"
//             alt="Black and White Portrait of a Man"
//             loading="lazy"
//           />
//         </a>
//         <ul
//           class="dropdown-menu dropdown-menu-end"
//           aria-labelledby="navbarDropdownMenuAvatar"
//         >
//           <li>
//             <a class="dropdown-item" href={`\CompanysProfile?UserId=${users}`}>My profile</a>
//           </li>
//           <li>
//             <a class="dropdown-item" href="\">Logout</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </div>
// </nav>
// </div>
//   )
}

export default CompanyNavbar
