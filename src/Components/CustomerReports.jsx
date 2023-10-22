import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import "jspdf-autotable";
import React, { useEffect, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import CustomerNavbar from "./CustomerNavbar";
import Footer from "./Footer";


const CustomerReports = () => {

    const [Product, setProduct] = useState([]);
    const [pdfUrl, setpdfUrl] = useState("https://majestic-clever-grapple.glitch.me/images/cv.pdf");
    useEffect(()=>{
        async function fetchData() {
          try {
            const response = await fetch(`https://majestic-clever-grapple.glitch.me/CustomerPurchaseReport?UserId=${localStorage.getItem('UserId')}`);
            const data = await response.json();
            setProduct(data);
            console.log(data)
          } catch (error) {
          console.error(error);
          }
        }
        fetchData();
      },[])

      // const downloadPDF = (data, title, options) => {
      //   // Create a new instance of jsPDF
      //   const doc = new jsPDF();
      
      //   const headers = [];
      //   const headerTitles = Object.keys(data[0]);
      //   for (let i = 0; i < headerTitles.length; i++) {
      //     headers.push({ title: headerTitles[i], dataKey: headerTitles[i] });
      //   }
      
      //   // Define the table rows as an array of objects
      //   const newData = data.map(function (item) {
      //     const newRow = {};
      //     headers.forEach(function (header) {
      //       newRow[header.dataKey] = item[header.dataKey];
      //     });
      //     return newRow;
      //   });
      
      //   // Define the table options
      //   const defaultOptions = {
      //     margin: { top: 50 },
      //     headStyles: {
      //       fillColor: [41, 128, 185],
      //       textColor: 255,
      //       fontSize: 12,
      //     },
      //     bodyStyles: {
      //       fontSize: 10,
      //     },
      //     columnStyles: {
      //       id: { fillColor: 255 },
      //     },
      //     didDrawPage: function (newData) {
      //   doc.addImage("./Assets/icons8-building-arrow-64.png", "PNG", 30, 23, 20, 20);
      //   // doc.addImage("./Assets/motorcycle.png", "PNG", 10, 10, 50, 50);
      
      //       // Add the title to the document
      //       doc.setFontSize(18);
      //       doc.setFont("helvetica", "bold");
      //       const titleText = title;
      //       const titleWidth =
      //         (doc.getStringUnitWidth(titleText) * doc.internal.getFontSize()) /
      //         doc.internal.scaleFactor;
      //         const titleXPos = (doc.internal.pageSize.width - titleWidth )/2;
      //       doc.text(titleText, titleXPos, 35);
      //     },
      //   };
      //   options = Object.assign({}, defaultOptions, options);
      
      //   // Generate the table
      //   doc.autoTable(headers, newData, options);
      
      //   doc.save(title+".pdf")
      // };



      const downloadPDF = (data, title, options) => {
        // Create a new instance of jsPDF
        const doc = new jsPDF();
        
        const headers = [];
        const headerTitles = Object.keys(data[0]);
        for (let i = 0; i < headerTitles.length; i++) {
          headers.push({ title: headerTitles[i], dataKey: headerTitles[i] });
        }
        
        // Define the table rows as an array of objects
        const newData = data.map(function (item) {
          const newRow = {};
          headers.forEach(function (header) {
            newRow[header.dataKey] = item[header.dataKey];
          });
          return newRow;
        });
        
        // Define the table options
        const defaultOptions = {
          margin: { top: 50 },
          headStyles: {
            fillColor: [41, 128, 185],
            textColor: 255,
            fontSize: 12,
          },
          bodyStyles: {
            fontSize: 10,
          },
          columnStyles: {
            id: { fillColor: 255 },
          },
          didDrawPage: function (newData) {
            doc.addImage("./Assets/icons8-building-arrow-64.png", "PNG", 30, 23, 20, 20);
            // doc.addImage("./Assets/motorcycle.png", "PNG", 10, 10, 50, 50);
        
            // Add the title to the document
            doc.setFontSize(18);
            doc.setFont("helvetica", "bold");
            const titleText = title;
            const titleWidth =
              (doc.getStringUnitWidth(titleText) * doc.internal.getFontSize()) /
              doc.internal.scaleFactor;
            const titleXPos = (doc.internal.pageSize.width - titleWidth )/2;
            doc.text(titleText, titleXPos, 35);
          },
        };
        options = Object.assign({}, defaultOptions, options);
        
        // Generate the table
        doc.autoTable(headers, newData, options);
        
        // Get the PDF buffer as a Blob object
        const pdfBlob = doc.output("blob");
        
        // Create a URL for the Blob object
        setpdfUrl( URL.createObjectURL(pdfBlob));
        
      };
      
      

      // function downloadPDF(data, path) {

      //   console.log(data)
      //   if (!Array.isArray(data) || data.length == 0) {
      //       console.error('Invalid input array');
      //       return;
      //     }
          
      //   // Create a new jsPDF object
      //   const doc = new jsPDF();
      
      //   // Define the table headers as the keys of the first object in the array
      //   const headers = Object.keys(data[0]);
      
      //   // Set the initial x and y coordinates for the PDF
      //   let x = 10;
      //   let y = 20;
      
      //   // Loop through the headers and add them to the PDF
      //   headers.forEach(header => {
      //       console.log(header)
      //     doc.cell(x, y, header);
      //     x += 40;
      //   });
      
      //   // Reset the x and y coordinates for the PDF
      //   x = 10;
      //   y = 30;
      
      //   // // Loop through the rows of the array
      //   // data.forEach(row => {
      //   //   // Loop through the object properties and add them to the PDF
      //   //   Object.values(row).forEach(value => {
      //   //     doc.cell(x, y, value.toString());
      //   //     x += 40;
      //   //   });
      
      //   //   // Add a new line after each row
      //   //   doc.ln();
      //   //   x = 10;
      //   //   y += 10;
      //   // });
      
      //   // Save the PDF to the specified path
      //   doc.save(path);
      // }
      

      const [selectedItem, setSelectedItem] = useState("Select an item"); // State to store the selected item in the ComboBox
    
      // Function to handle the selection of an item in the ComboBox
      const handleSelect = (event) => {
        setSelectedItem(event.target.value);
      };
    
  return (
    <div>
      <CustomerNavbar />

      <div style={{ width: "100%", display: "flex" }}>
      <div style={{ width: "10%" }}></div>
        <div style={{ width: "80%" }}>

          {/* <Adminnavbar /> */}
          <div style={{ margin: "35px" }}>
            <h3 style={{ marginTop: "25px" }}>Analytical Reports</h3>
            {/* <form action={`https://majestic-clever-grapple.glitch.me/uploadReports?pdf=${UserId}`} method="POST" enctype="multipart/form-data"> */}
            <div style={{ marginTop: "25px" }}>
              <InputGroup>
                <FormControl
                  as="select"
                  value={selectedItem}
                  onChange={handleSelect}
                >
                  <option>Product Purchase Report</option>

                </FormControl>
              </InputGroup>

              <Button variant="primary" type="submit" className="mt-3" onClick={()=>{downloadPDF(Product,"Customer Purchase Report")}}>
                Generate Report
              </Button>
            </div>
            {/* </form> */}

            <div style={{ marginTop: "20px" }}>
              <embed
                type="text/html"
                src={pdfUrl}
                width="900"
                height="500"
              ></embed>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "10%" }}></div>

      <Footer/>
    </div>
  )
}

export default CustomerReports;
