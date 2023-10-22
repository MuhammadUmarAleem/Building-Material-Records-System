import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import "jspdf-autotable";
import React, { useEffect, useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import DealerNavbar from "./DealerNavbar";
import Footer from "./Footer";


const DealerReports = () => {

  const [Product, setProduct] = useState([]);
  const [Title, setTitle] = useState(false);
  const [pdfUrl, setpdfUrl] = useState("https://majestic-clever-grapple.glitch.me/images/cv.pdf");

  async function fetchData() {
    setProduct([]);
    if(document.getElementById("selectedItem").value === "Monthly Product Percent Report"){
      try {
        const response =await fetch(`https://majestic-clever-grapple.glitch.me/MonthlyProductWisePercentDealerReport?UserId=${localStorage.getItem('UserId')}`);
        const data =await response.json();
        setProduct(data);
        setTitle(true)
        console.log(data)
      } catch (error) {
      console.error(error);
      }
    }
    if(document.getElementById("selectedItem").value === "Monthly Product Profit Report"){
      try {
        const response =await fetch(`https://majestic-clever-grapple.glitch.me/MonthlyProductWiseProfitDealer?UserId=${localStorage.getItem('UserId')}`);
        const data =await response.json();
        setProduct(data);
        setTitle(true)
        console.log(data)
      } catch (error) {
      console.error(error);
      }
    }
    if(document.getElementById("selectedItem").value === "Monthly Product Sale Report"){
      try {
        const response =await fetch(`https://majestic-clever-grapple.glitch.me/MonthlyProductWiseSaleDealerReport?UserId=${localStorage.getItem('UserId')}`);
        const data =await response.json();
        setProduct(data);
        setTitle(true)
        console.log(data)
      } catch (error) {
      console.error(error);
      }
    }
    if(document.getElementById("selectedItem").value === "Products Purchase Report"){
      try {
        const response =await fetch(`https://majestic-clever-grapple.glitch.me/DealerPurchaseReport?UserId=${localStorage.getItem('UserId')}`);
        const data =await response.json();
        setProduct(data);
        setTitle(true)
        console.log(data)
      } catch (error) {
      console.error(error);
      }
    }
    if(document.getElementById("selectedItem").value === "Products Order Report"){
      try {
        const response =await fetch(`https://majestic-clever-grapple.glitch.me/DealerOrderReport?UserId=${localStorage.getItem('UserId')}`);
        const data =await response.json();
        setProduct(data);
        setTitle(true)
        console.log(data)
      } catch (error) {
      console.error(error);
      }
    }
  }

  useEffect(()=>{
    console.log(Title.toString())
    if(Title === true){
      downloadPDF(Product);
      setTitle(false)
    }
  },[Title, Product])

  const downloadPDF = (data, options) => {
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
        const titleText = localStorage.getItem("Report");
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


      const [selectedItem, setSelectedItem] = useState("Select an item"); // State to store the selected item in the ComboBox
    
      // Function to handle the selection of an item in the ComboBox
      const handleSelect = (event) => {
        setSelectedItem(event.target.value);
        localStorage.setItem("Report",document.getElementById("selectedItem").value);
        console.log("local",localStorage.getItem("Report"))
        console.log(selectedItem)
        console.log(event.target.value)
      };
    
  return (
    <div>
      <DealerNavbar />

      <div style={{ width: "100%", display: "flex" }}>
      <div style={{ width: "10%" }}></div>
        <div style={{ width: "80%" }}>

          {/* <Adminnavbar /> */}
          <div style={{ margin: "35px" }}>
            <h3 style={{ marginTop: "25px" }}>Analytical Reports</h3>
            <div style={{ marginTop: "25px" }}>
              <InputGroup>
                <FormControl
                  as="select"
                  value={selectedItem}
                  onChange={handleSelect}
                  id="selectedItem"
                >
                  <option>Select an item</option>
                  <option>Monthly Product Percent Report</option>
                  <option>Monthly Product Profit Report</option>
                  <option>Monthly Product Sale Report</option> 
                  <option>Products Purchase Report</option>
                  <option>Products Order Report</option>
                </FormControl>
              </InputGroup>

    
              <Button variant="primary" className="mt-3" onClick={()=>{fetchData();}}>
                Generate Report
              </Button>
            </div>
            <div style={{ marginTop: "20px",marginBottom: "20px" }}>
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

export default DealerReports;
