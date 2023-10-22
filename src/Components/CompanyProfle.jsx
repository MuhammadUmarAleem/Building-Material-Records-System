
import React from 'react';
import {useEffect, useState} from 'react';
import { MDBCol,MDBIcon,MDBInput, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import CompanyNavbar from './CompanyNavbar';
import Modal from "react-bootstrap/Modal";
import Footer from './Footer';
import { useFormik } from "formik";
import * as Yup from "yup";



export default function CompanyProfile() {
  
    const [Picture,setPicture] = useState(false);
    const [UserId,setUserId] = useState(localStorage.getItem("UserId"));
    const [deleteprofile,setdeleteprofile] = useState(false);
    const [Profile,setProfile] = useState([{
      Email:false,
      CompanyMission:false ,
      CompanyHistory:false,
      ProductsAndServices:false ,
      CompanyName:false ,
      company_contact:false  ,
      ownername:false,
      Type:false,
      AddressId:false ,
      CompanyTypeId:false,
      AccountId :false,
      address:false,
      City:false,
      Country:false,
      AccountBank:false,
      AccountNumber:false,
      AccountTitle:false,
      Picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzNJcVZYifo4XGd9HnBg9f6diJzOAPYiAhu-jxVNE&s',
    }]);
    const [show, setShow] = useState(false);
    const [addresss, setsddress] = useState(false);
    const [account, setaccount] = useState(false);
    const handleCloseModal = () => {setShow(false);setsddress(false);setaccount(false);setdeleteprofile(false);};

    const [selectedImage, setSelectedImage] = useState(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzNJcVZYifo4XGd9HnBg9f6diJzOAPYiAhu-jxVNE&s"
    );

    const [rating,setRating] = useState(5);
    const ratingUI = generateRatingUI(rating);
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

    const signupSchema = Yup.object({
      CompanyName: Yup.string().min(3).max(40).required("Please enter your name"),
      ownername: Yup.string().max(25).required("Please enter your name"),
      company_contact: Yup.string().min(10).max(13),
      ProductsAndServices: Yup.string().min(0).max(255),
      History: Yup.string().min(0).max(255),
      Mission: Yup.string().min(0).max(255),
    });
    const AddressSchema = Yup.object({
      Country: Yup.string().min(3).max(25).required("Please enter Country"),
      City: Yup.string().min(3).max(25).required("Please enter City"),
      address: Yup.string().min(0).max(50).required("Please enter Address")
    });
    const AccountSchema = Yup.object({
      AccountBank: Yup.string().min(3).max(25).required("Please enter Bank"),
      AccountNumber: Yup.string().min(14).max(16).required("Please enter Account Number"),
      AccountTitle: Yup.string().min(3).max(25).required("Please enter Account Title")
    });
    const [formData, setFormData] = useState({
      CompanyName: 'abc',
      ownername: 'abc',
      company_contact: '',
      Mission:'',
      History:'',
      ProductsAndServices: '',
      productimg: '',
    });
  
    const [Address, setAddress] = useState({
      Country: '',
      City: '',
      address: '',
    });

    const [Account,setAccount] = useState({
      AccountBank:'',
      AccountNumber : '',
      AccountTitle:''
    });
    var temp = formData;
    var temp1 = signupSchema;
    if(addresss === true){
      temp = Address;
      temp1 = AddressSchema;
    }
    if(account === true){
      temp = Account;
      temp1 = AccountSchema;
    }
    
    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
      useFormik({
        initialValues: temp,
        validationSchema: temp1,
        validateOnChange: true,
        validateOnBlur: false,
        //// By disabling validation onChange and onBlur formik will validate on submit.
        // onChange:(event)=>{
        //   values = event.target.value;
        // },
        onSubmit: (values, action) => {
          console.log("show",show===true)
          if(show === true){
            document.getElementById('UpdateCompanyProfile').submit();
            action.resetForm();
            console.log("show",show===true)
          }
        },
      });

      function submitaddress(action){
        console.log("OK");
        document.getElementById('UpdateCompanyAddress').submit();
        // action.resetForm();
      }
      function submitaccount(action){
        console.log("OK");
        document.getElementById('UpdateCompanyAccount').submit();
        // action.resetForm();
      }

      const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setSelectedImage(URL.createObjectURL(imageFile));
      };
      
      function handleShow() {
        setFormData({
          
          CompanyName: String(Profile[0].CompanyName),
          ownername: String(Profile[0].ownername),
          company_contact: String(Profile[0].company_contact),
          ProductsAndServices: String(Profile[0].ProductsAndServices),
          History: String(Profile[0].CompanyHistory),
          Mission: String(Profile[0].CompanyMission),
          productimg: String(Profile[0].Picture),
        });
        
        console.log(formData);
        setShow(true);
      }
      function showaddress(){
        setsddress(true);
        console.log(Profile);
        console.log(Profile[0].Country );
        console.log(Profile[0].Country != null);
        
        if(String(Profile[0].Country) !== 'null'){
          setAddress({
            Country: String(Profile[0].Country),
            City: String(Profile[0].City),
            address: String(Profile[0].Address),
          });
          
          console.log(Address);
          console.log(Address);
        }
        console.log(Address);
      }

      function showaccount(){
        setaccount(true);
        if(String(Profile[0].AccountBank) !== 'null'){
          setAccount({
            AccountBank: String(Profile[0].AccountBank),
            AccountNumber: String(Profile[0].AccountNumber),
            AccountTitle: String(Profile[0].AccountTitle),
          });
          
          console.log(Account);
        }
        console.log(Account);
      }
      const handleName=(event)=>{
        setFormData({
          ownername: event.target.value,
          
        });
      }
      const handleCompanyName=(event)=>{
        setFormData({
            CompanyName: event.target.value, 
          });
      }
      const handleLastName=(event)=>{
        setFormData({
          lastname: event.target.value,
        });
      }
      const handleContact=(event)=>{
        setFormData({
          company_contact: event.target.value,
        });
      }
      const handleProduct=(event)=>{
        setFormData({
          ProductsAndServices: event.target.value,
        });
      }
      const handleMission=(event)=>{
        setFormData({
          Mission: event.target.value,
        });
      }
      const handleHistory=(event)=>{
        setFormData({
          History: event.target.value,
        });
      }
      const handlePicture=(event)=>{
        setFormData({
          productimg: event.target.value,
        });
      }

    // const handleImageChange = (event) => {
    // const imageFile = event.target.files[0];
    // setSelectedImage(URL.createObjectURL(imageFile));  };
    // function handleShow() {
    //   setFormData.firstname(values.);
    //   setShow(true);
    // }

    useEffect(()=>{
        setUserId(localStorage.getItem("UserId"));
        console.log(UserId);
        // window.action.href=`https://majestic-clever-grapple.glitch.me/GetDealerProfile?UserId=${UserId}`; 
        async function fetchData() {
          try {
            console.log(UserId);
            const response = await fetch(`https://majestic-clever-grapple.glitch.me/GetCompanyProfile?UserId=${UserId}`);
            const data = await response.json();
            setProfile(data);
            console.log(data)
          } catch (error) {
          console.error(error);
          }
          try {
            console.log(UserId);
            const response = await fetch(`https://majestic-clever-grapple.glitch.me/GetCompanyRating?UserId=${UserId}`);
            const data = await response.json();
            setRating(data[0].Rating);
            console.log(data)
          } catch (error) {
          console.error(error);
          }
          console.log(rating);
          console.log(Profile)
          if(Profile[0].Picture != ''){
            setPicture(true)
            }
          if (Profile[0].AddressId === null){
            Profile[0].AddressId = 0;
          }
          if (Profile[0].City === null){
            Profile[0].City = false;
          }
        }
        fetchData();
      },[])
    
        const handleCountry=(event)=>{
          setAddress({
            Country: event.target.value,
          });
        }
        const handleCity=(event)=>{
          setAddress({
            City: event.target.value,
          });
        }
        const handleaddress=(event)=>{
          setAddress({
            address: event.target.value,
          });
        }
        const handleAccountBank=(event)=>{
          setAccount({
            AccountBank:event.target.value,
          })
        }
        const handleAccountNumber=(event)=>{
          setAccount({
            AccountNumber:event.target.value,
          })
        }
        const handleAccountTitle=(event)=>{
          setAccount({
            AccountTitle:event.target.value,
          })
        }



  return (
    <div className="gradient-custom-2" >
      <CompanyNavbar/>
      {Profile.map((prof,index)=>(
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="9">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#007BFF', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>

                  {Picture?(<MDBCardImage src={"https://majestic-clever-grapple.glitch.me/images/"+prof.Picture}alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />)
                  :<MDBCardImage src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzkyXfNfGvQcUB3Kh0PrNLmT9LvbiJGglqAYDd6DD&s"}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />}
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">{prof.CompanyName}</MDBTypography>
                  <MDBCardText>{prof.ownername}</MDBCardText>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1 text-center">
                  <div>
                    <MDBCardText className="mb-1 h5">{ratingUI}</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Rating</MDBCardText>
                  </div>


                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                <p className="lead fw-bold mb-1 ">About</p>
                
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    
                <MDBRow>
                <MDBCol  className="font-italic mb-1" style={{ textAlign: "left" }}>
                        <MDBTypography  tag="h5">Email</MDBTypography >
                        <MDBCardText className="font-italic mb-1">{prof.Email}</MDBCardText>
                </MDBCol>
                <MDBCol size = "6" className="font-italic mb-1" style={{ textAlign: "left" }}>
                {prof.company_contact?(<MDBTypography  tag="h5">Contact</MDBTypography>):null}
                        <MDBCardText className="font-italic mb-1">{prof.company_contact}</MDBCardText>
                </MDBCol>
                <MDBRow style={{ textAlign: "left" }}>{prof.Type?(<MDBTypography  tag="h5">Company Type</MDBTypography>):null}
                        <MDBCardText className="font-italic mb-1">{prof.Type}</MDBCardText></MDBRow>
                </MDBRow>
                    <MDBCol className="font-italic mb-1" style={{ textAlign: "left" }} >
                    {prof.CompanyMission?(<MDBTypography  tag="h5">Mission</MDBTypography>):null}
                        <MDBCardText className="font-italic mb-1">{prof.CompanyMission }</MDBCardText>
                    </MDBCol>
                    <MDBCol className="font-italic mb-1" style={{ textAlign: "left" }} >
                    {prof.CompanyHistory?(<MDBTypography  tag="h5">History</MDBTypography>):null}
                        <MDBCardText className="font-italic mb-1">{prof.CompanyHistory }</MDBCardText>
                    </MDBCol>
                    <MDBCol className="font-italic mb-1" style={{ textAlign: "left" }} >
                    {prof.ProductsAndServices?(<MDBTypography  tag="h5">Product and Services</MDBTypography>):null}
                        <MDBCardText className="font-italic mb-1">{prof.ProductsAndServices }</MDBCardText>
                    </MDBCol>
                    <MDBRow>
                      <MDBCol className="font-italic mb-1 md-6" lg='6' style={{ marginTop: "10px"}} >
                      <button type="button" className="btn btn-danger btn-block mb-4" onClick={()=>{setdeleteprofile(true)}}>Delete Profile</button>
                      </MDBCol>
                      <MDBCol className="font-italic mb-1 md-6" lg='6' style={{ marginTop: "10px" }} >
                      <button type="button" class="btn btn-primary btn-block mb-4" onClick={handleShow}>Edit Profile</button>
                      </MDBCol>
                    </MDBRow>
                  </div>
                <p className="lead fw-bold mb-1 ">Address</p>

                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    
                <MDBRow>
                <MDBCol  className="font-italic mb-1" style={{ textAlign: "left" }}>
                {prof.Country?(<MDBTypography  tag="h5">Country</MDBTypography >):null}
                        <MDBCardText className="font-italic mb-1">{prof.Country}</MDBCardText>
                </MDBCol>
                <MDBCol size = "6" className="font-italic mb-1" style={{ textAlign: "left" }}>
                {prof.City?(<MDBTypography  tag="h5">City</MDBTypography>):null}
                        <MDBCardText className="font-italic mb-1">{prof.City}</MDBCardText>
                </MDBCol>
                </MDBRow>
                    <MDBCol className="font-italic mb-1" style={{ textAlign: "left" }} >
                    {prof.address?(<MDBTypography  tag="h5">Address</MDBTypography>):null}
                        <MDBCardText className="font-italic mb-1">{prof.address }</MDBCardText>
                    </MDBCol>
                    <MDBRow>
                    <MDBCol className="font-italic mb-1 md-6" lg='6' style={{ marginTop: "10px"}} ></MDBCol>
                    <MDBCol className="font-italic mb-1 md-6" lg='6' style={{ marginTop: "10px"}} >
                    {prof.City?(<button type="button" class="btn btn-primary btn-block mb-4" onClick={showaddress}>Update Address</button>):<button type="button" class="btn btn-primary btn-block mb-4" onClick={showaddress}>Add Address</button>}
                    </MDBCol>  
                    </MDBRow>
                  </div>



                  <p className="lead fw-bold mb-1 ">Account</p>

                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    
                <MDBRow>
                <MDBCol  className="font-italic mb-1" style={{ textAlign: "left" }}>
                {prof.AccountBank?(<MDBTypography  tag="h5">Bank</MDBTypography >):null}
                        <MDBCardText className="font-italic mb-1">{prof.AccountBank }</MDBCardText>
                </MDBCol>
                <MDBCol size = "6" className="font-italic mb-1" style={{ textAlign: "left" }}>
                {prof.AccountTitle?(<MDBTypography  tag="h5">Account Title</MDBTypography>):null}
                        <MDBCardText className="font-italic mb-1">{prof.AccountTitle }</MDBCardText>
                </MDBCol>
                </MDBRow>
                    <MDBCol className="font-italic mb-1" style={{ textAlign: "left" }} >
                        {prof.AccountNumber?(<MDBTypography  tag="h5">Account No</MDBTypography>):null}
                        <MDBCardText className="font-italic mb-1">{prof.AccountNumber  }</MDBCardText>
                    </MDBCol>
                    <MDBRow>
                    <MDBCol className="font-italic mb-1 md-6" lg='6' style={{ marginTop: "10px"}} ></MDBCol>
                    <MDBCol className="font-italic mb-1 md-6" lg='6' style={{ marginTop: "10px"}} >
                    {prof.AccountNumber?(<button type="button" class="btn btn-primary btn-block mb-4" onClick={showaccount}>Update Account</button>):<button type="button" class="btn btn-primary btn-block mb-4" onClick={showaccount}>Add Account</button>}
                    </MDBCol>
                    </MDBRow>


                    
                  </div>
                  
                </div>

                
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                     {/* https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp */}
                     <div className="w-100 rounded-3"></div>
                    {/* <MDBCardImage src=""
                        /> */}
                  </MDBCol>
                  <MDBCol className="mb-2">
                  <div className="w-100 rounded-3"></div>
                  {/* https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp */}
                    {/* <MDBCardImage src=""
                       className="w-100 rounded-3" /> */}
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      ))}

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
                Edit Profile
              </Modal.Title>
            </Modal.Header>
            <form enctype='multipart/form-data'  action={`https://majestic-clever-grapple.glitch.me/UpdateCompanyProfile?UserId=${UserId}`} method='post'>
            <MDBCard className='d-flex'>
            <MDBCardBody className='p-5'>

            {
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "60px",
                    marginBottom: "10px",
                  }}
                />
              }
              <input type="file" name="productimg" />
              {/* <input
                type="file"
                name="productimg"
                id="productimg"
                onChange={handleImageChange}
                accept="image/*"
                style={{ marginLeft: "10px" }}
              /> */}
        <MDBRow>
            <MDBCol onChange ={handleCompanyName}>
              <MDBInput wrapperClass='mb-4' label='Company Name' id='CompanyName' name='CompanyName' type='CompanyName' onChange ={handleChange} value={formData.CompanyName}
                onBlur={handleBlur} />
              {errors.CompanyName && touched.CompanyName ? (
                <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.CompanyName}</p>
              ) : null}
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol lg='6' className="md-6" onChange ={handleName}>
              <MDBInput wrapperClass='mb-4' label='Owner Name' id='ownername' name='ownername' type='text' value={formData.ownername}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.ownername && touched.ownername ? (
                <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.ownername}</p>
              ) : null}
            </MDBCol> 
             <MDBCol lg='6' className="md-6" onChange ={handleContact}>
              <MDBInput wrapperClass='mb-4' label='Contact Name' id='company_contact' name='company_contact' type='text' value={formData.company_contact}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.company_contact && touched.company_contact ? (
                <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.company_contact}</p>
              ) : null}
            </MDBCol>
          </MDBRow>

          <MDBRow onChange ={handleMission}>
            <label style={{ textAlign: "left", marginRight: "auto", marginBottom: "5px" }}>Mission</label>
            <textarea wrapperClass='mb-4' label='Mission' rows="4" id='Mission' name='Mission' type='Mission' value={formData.Mission}
              onChange={handleChange}
              onBlur={handleBlur} />
            {errors.Mission && touched.Mission ? (
              <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.Mission}</p>
            ) : null}
          </MDBRow>

          <MDBRow onChange ={handleHistory}>
            <label style={{ textAlign: "left", marginRight: "auto", marginBottom: "5px" }}>History</label>
            <textarea wrapperClass='mb-4' label='History' rows="4" id='History' name='History' type='History' value={formData.History}
              onChange={handleChange}
              onBlur={handleBlur} />
            {errors.History && touched.History ? (
              <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.History}</p>
            ) : null}
          </MDBRow>

          <MDBRow onChange ={handleProduct}>
            <label style={{ textAlign: "left", marginRight: "auto", marginBottom: "5px" }}>Product and Services</label>
            <textarea wrapperClass='mb-4' label='Product and Services' rows="4" id='ProductsAndServices' name='ProductsAndServices' type='password' value={formData.ProductsAndServices}
              onChange={handleChange}
              onBlur={handleBlur} />
            {errors.ProductsAndServices && touched.ProductsAndServices ? (
              <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.productandservices}</p>
            ) : null}
          </MDBRow>
          <button value="submit" style={{marginTop: "2%",width:"200px" ,padding: "0.25rem 0.5rem", fontSize: "1.0rem"}} class="btn btn-primary btn-block mb-4">Update Profile</button>
          </MDBCardBody>
          </MDBCard>

            </form>
      </Modal>




      <Modal
            show={addresss}
            onHide={handleCloseModal}
            dialogClassName="modal-90w"
            size="lg"
            id="updatemodal"
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Address
              </Modal.Title>
            </Modal.Header>
            <form enctype='multipart/from-data'  action={`https://majestic-clever-grapple.glitch.me/UpdateCompanyAddress?UserId=${UserId}&AddressId=${Profile[0].AddressId}`} method='post' id='UpdateCompanyAddress'>
            <MDBCard className='d-flex'>
            <MDBCardBody className='p-5'>
          
          <MDBRow>
            <MDBCol lg='6' className="md-6" onChange ={handleCountry}>
              <MDBInput wrapperClass='mb-4' label='Country' id='Country' name='Country' type='text' value={Address.Country}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.Country && touched.Country ? (
                <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.Country}</p>
              ) : null}
            </MDBCol>
            <MDBCol lg='6' className="md-6" onChange ={handleCity}>
              <MDBInput wrapperClass='mb-4' label='City' id='City' name='City' type='text' value={Address.City}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.City && touched.City ? (
                <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.City}</p>
              ) : null}
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol lg='' className="" onChange ={handleaddress}>
              <MDBInput wrapperClass='mb-4' label='Address' id='address' name='address' type='email' value={Address.address}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.address && touched.address ? (
                <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.address}</p>
              ) : null}
            </MDBCol>
          </MDBRow>
          <MDBCol className="font-italic mb-1" style={{ textAlign: "right", width: "200px", marginLeft: "auto", marginTop: "10px" }} >
            {Profile[0].Country ?(<button onClick={submitaddress} onSubmit={submitaddress} type="button" className="btn btn-primary btn-block mb-4">Update</button>):<button onClick={submitaddress} onSubmit={submitaddress} type="button" className="btn btn-primary btn-block mb-4">Add</button>}
          </MDBCol>
          </MDBCardBody>
          </MDBCard>

            </form>
      </Modal>



      <Modal
            show={deleteprofile}
            onHide={handleCloseModal}
            dialogClassName="modal-90w"
            size="sm"
            id="updatemodal"
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Delete Profile
              </Modal.Title>
            </Modal.Header>
            <label style={{marginLeft:"auto",marginRight:"auto"}}> Are you Sure you want to Delete?</label>
            <button type="button" className="btn btn-danger btn-block mb-4" style={{maxWidth:"150px",marginTop:"10px",marginLeft:"auto",marginRight:"auto"}} onClick={()=>{window.location.href = `https://majestic-clever-grapple.glitch.me/DeleteUser?UserId=${localStorage.getItem('UserId')}`}}>Sure</button>
      </Modal>



      <Modal
            show={account}
            onHide={handleCloseModal}
            dialogClassName="modal-90w"
            size="lg"
            id="updatemodal"
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Account
              </Modal.Title>
            </Modal.Header>
            <form enctype='multipart/from-data'  action={`https://majestic-clever-grapple.glitch.me/UpdateCompanyAccount?UserId=${UserId}&AccountId=${Profile[0].AccountId}`} method='post' id='UpdateCompanyAccount'>
            <MDBCard className='d-flex'>
            <MDBCardBody className='p-5'>
          
          <MDBRow>
            <MDBCol lg='6' className="md-6" onChange ={handleAccountBank}>
              <MDBInput wrapperClass='mb-4' label='Bank' id='AccountBank' name='AccountBank' type='text' value={Account.AccountBank}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.AccountBank && touched.AccountBank ? (
                <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.AccountBank}</p>
              ) : null}
            </MDBCol>
            <MDBCol lg='6' className="md-6" onChange ={handleAccountTitle}>
              <MDBInput wrapperClass='mb-4' label='Title' id='AccountTitle' name='AccountTitle' type='text' value={Account.AccountTitle}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.AccountTitle && touched.AccountTitle ? (
                <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.AccountTitle}</p>
              ) : null}
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol lg='' className="" onChange ={handleAccountNumber}>
              <MDBInput wrapperClass='mb-4' label='Account Number' id='AccountNumber' name='AccountNumber' type='email' value={Account.AccountNumber}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.AccountNumber && touched.AccountNumber ? (
                <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.AccountNumber}</p>
              ) : null}
            </MDBCol>
          </MDBRow>
          <MDBCol className="font-italic mb-1" style={{ textAlign: "right", width: "200px", marginLeft: "auto", marginTop: "10px" }} >
            {Profile[0].AccountBank ?(<button onClick={submitaccount} onSubmit={submitaccount} type="button" className="btn btn-primary btn-block mb-4">Update</button>):<button onClick={submitaccount} onSubmit={submitaccount} type="button" className="btn btn-primary btn-block mb-4">Add</button>}
          </MDBCol>
          </MDBCardBody>
          </MDBCard>

            </form>
      </Modal>
      

      <Footer/>


      
    </div>
  );
}