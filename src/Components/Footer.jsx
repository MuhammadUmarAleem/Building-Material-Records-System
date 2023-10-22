// import React from 'react';
// import { FaFacebookF, FaInstagram, FaGithub, FaTwitter, FaGooglePlus, FaLinkedin } from 'react-icons/fa';
// import {
//   MDBContainer,
//   MDBFooter,
//   // MDBIcon,
//   MDBBtn
// } from 'mdb-react-ui-kit';

// export default function App() {
//   return (
//     <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
//       <MDBFooter className='bg-blue text-center text-white' style={{ backgroundColor: '#007BFF' }}>
//       <MDBContainer className='p-4 pb-0'>
//   <div className="center">
//     <section className='mb-4 d-inline-block'>
//       <MDBBtn outline color='dark' floating className='m-1' href='#!' role='button'>
//         <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' style={{ backgroundColor: 'black' }}>
//           <FaFacebookF />
//         </a>
//       </MDBBtn>

//       <MDBBtn outline color='dark' floating className='m-1' href='#!' role='button'>
//         <a href='https://www.twitter.com/' target='_blank' rel='noopener noreferrer' style={{ backgroundColor: 'black' }}>
//           <FaTwitter />
//         </a>
//       </MDBBtn>

//       <MDBBtn outline color='dark' floating className='m-1' href='#!' role='button'>
//         <a href='https://9to5google.com/guides/google-plus/' target='_blank' rel='noopener noreferrer' style={{ backgroundColor: 'black' }}>
//           <FaGooglePlus />
//         </a>
//       </MDBBtn>

//       <MDBBtn outline color='dark' floating className='m-1' href='#!' role='button'>
//         <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' style={{ backgroundColor: 'black' }}>
//           <FaInstagram />
//         </a>
//       </MDBBtn>

//       <MDBBtn outline color='dark' floating className='m-1' href='#!' role='button'>
//         <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer' style={{ backgroundColor: 'black' }}>
//           <FaLinkedin />
//         </a>
//       </MDBBtn>

//       <MDBBtn outline color='dark' floating className='m-1' href='#!' role='button'>
//         <a href='https://www.github.com/' target='_blank' rel='noopener noreferrer' style={{ backgroundColor: 'black' }}>
//           <FaGithub />
//         </a>
//       </MDBBtn>
//     </section>
//   </div>
// </MDBContainer>



//         <div className='text-center p-3' style={{ backgroundColor: '#0077AE' }}>
//           © 2021 Copyright:
//           <a className='text-white' href='https://materials.com/'>
//             MDBootstrap.com
//           </a>
//         </div>
//       </MDBFooter>
//     </div>
//   );
// }
// function SocialMediaButton({ href, icon }) {
//   return (
//     <a href={href} target='_blank' rel='noopener noreferrer' className='social-media-icon'>
//       {icon}
//     </a>
//   );
// }

// export default function App() {
//   return (
//     <div className='body-container'>
//       <main className='app-container'>
//         <div className='footer-container'>
//           <MDBContainer className='footer-content'>
//             <section className='social-media-buttons'>
//               <SocialMediaButton href='https://www.facebook.com/' icon={<FaFacebookF />} />
//               <SocialMediaButton href='https://www.twitter.com/' icon={<FaTwitter />} />
//               <SocialMediaButton href='https://9to5google.com/guides/google-plus/' icon={<FaGooglePlus />} />
//               <SocialMediaButton href='https://www.instagram.com/' icon={<FaInstagram />} />
//               <SocialMediaButton href='https://www.linkedin.com/' icon={<FaLinkedin />} />
//               <SocialMediaButton href='https://www.github.com/' icon={<FaGithub />} />
//             </section>
//             <div className='footer-text'>
//               © 2021 MDBootstrap.com
//             </div>
//           </MDBContainer>
//         </div>
//       </main>
//     </div>
//   );
// }
import React from 'react';
import { FaFacebookF, FaInstagram,  FaTwitter, FaGooglePlus, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    function windowOpen(url) {
        window.open(url);
      }
  return (
    <footer>
        <div class="container">
            <div class="row">
            <div class="col-md-4 col-sm-6">
                <div class="widget">
                <div class="logo"><a href="https://sbmtcqatar.com/"><img src="https://sbmtcqatar.com/wp-content/uploads/2020/02/cropped-logo.png" alt="" width="100" height="100" /></a></div>
                <p>"<b>SBMTC</b> Building Materials is a leading provider of high-quality construction materials for commercial and residential projects. Our extensive range of products includes cement, steel, bricks, tiles, and more. With a focus on exceptional customer service and competitive pricing, we are committed to delivering the best value for your building needs."</p>
             </div>
            </div>

            <div class="col-md-2 col-sm-6">
                <div class="widget my-quicklinks">
                <h5>SBMTC Building Materials</h5>
                <ul>
                    <li><a href="https://sbmtcqatar.com/" class="white-link" style={{textDecoration:"None"}}>Home</a></li>
                    <li><a href="https://sbmtcqatar.com/about-sbmtc/" class="white-link" style={{textDecoration:"None"}}>About Us</a></li>
                    <li><a href="https://sbmtcqatar.com/steel-products/" class="white-link" style={{textDecoration:"None"}}>Products and Services</a></li>
                    <li><a href="https://sbmtcqatar.com/contact/" class="white-link" style={{textDecoration:"None"}}>Contact Us</a></li>
                </ul>
                </div>
            </div>

            <div class="col-md-2 col-sm-6">
                <div class="widget my-quicklinks">
                <h5>Quick Links</h5>
                <ul style={{textDecoration:"None"}}>
                    <li><a href="https://sbmtcqatar.com/technology-supplies/" class="white-link" style={{textDecoration:"None"}}>Building Materials</a></li>
                    <li><a href="https://sbmtcqatar.com/" class="white-link" style={{textDecoration:"None"}}>Support</a></li>
                    <li><a href="https://sbmtcqatar.com/" class="white-link" style={{textDecoration:"None"}}>Terms &amp; Conditions</a></li>
                    <li><a href="https://sbmtcqatar.com/" class="white-link" style={{textDecoration:"None"}}>Privacy Policy</a></li>
                    <li><a href="https://sbmtcqatar.com/" class="white-link" style={{textDecoration:"None"}}>Sitemap</a></li>
                </ul>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="widget socail-icons">
                <h5>Follow Us</h5>
<div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
    <ul style={{textAlign:"left"}}>
        <li>
        <a href='https://9to5google.com/guides/google-plus/' target='_blank' rel='noopener noreferrer' style={{backgroundColor: 'black'}}><FaGooglePlus /></a>
          <span onclick="windowOpen('');" target="_blank">Google</span>
        </li>
        <li>
          <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' style={{backgroundColor: 'black'}}><FaFacebookF /></a>
          <span onclick="windowOpen('');" target="_blank">Facebook</span>
        </li>
        <li>
        <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' style={{backgroundColor: 'black'}}><FaInstagram /></a>
            <span onclick="windowOpen('');" target="_blank">Instagram</span>
        </li>
        <li>
        <a href='https://www.twitter.com/' target='_blank' rel='noopener noreferrer' style={{backgroundColor: 'black'}}><FaTwitter /></a>
            <span onclick="windowOpen('');" target="_blank">Twitter</span>
        </li>
        <li>
        <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer' style={{backgroundColor: 'black'}}><FaLinkedin /></a>
            <span onclick="windowOpen('');" target="_blank">LinkedIn</span>
        </li>
    </ul>
    <ul class="apps-downloads">
                    <li><img onclick="windowOpen('https://play.google.com/store/apps/details?id=com.prologicx.bikerboyz');" src="https://www.bikebazaar.pk/assets/images/googleplay.png" alt="" /></li>
                    <li><img onclick="windowOpen('https://itunes.apple.com/us/app/bike-bazaar/id1404808151?ls=1&amp;mt=8');" src="https://www.bikebazaar.pk/assets/images/appstore.png" alt="" /></li>
           </ul>
</div>

                </div>
                </div>

                </div>
                </div>
        </footer>
  );
};

export default Footer;