// src/App.js
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Modal, Form } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import CityDropdown from './cityDropdown';
import SubsidyForm from './subsidyModal';
import LoanForm from './loanModal';
import PartnershipForm from './partnershipModal';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';

function App() {
  //subsidy form
  const [showSubsidyForm, setShowSubsidyForm] = useState(false);
  const handleSubsidyFormShow = () => setShowSubsidyForm(true);
  const handleSubsidyFormClose = () => {
    console.log('Closing modal...');
    setShowSubsidyForm(false);
    handleCloseSuccessModal(); // Close the success modal as well
  };
  const [subsidyFormData, setSubsidyFormData] = useState({
    name: '',
    organization: '',
    email: '',
    number: '',
    businessType: '',
    city: '',
  });
  const handleSubsidyChange = (e) => {
    setSubsidyFormData({ ...subsidyFormData, [e.target.name]: e.target.value });
  };
  const handleSubsidySubmit = async (e) => {
    console.log('Handling submit...');
    e.preventDefault();
    try {
      const response = await axios.post('https://bharat-sme-5365a880f24b.herokuapp.com/register', subsidyFormData);
      console.log(response.data);
      // Check if the registration was successful before closing the modal
      if (response.data.success) {
        // Reset the form data
        setSubsidyFormData({
          name: '',
          organization: '',
          email: '',
          number: '',
          businessType: '',
          city: '',
        });
        // Close the modal
        handleSubsidyFormClose();
        // Show the success modal
        handleShowSuccessModal();
      } else {
        console.error('Error registering user:', response.data.error);
        // Handle the error scenario if needed
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };
  const handleSubsidyButtonClick = () => {
    handleSubsidyFormShow();
  };

  //loan form
  const [showLoanForm, setShowLoanForm] = useState(false);
  const handleLoanFormShow = () => setShowLoanForm(true);
  const handleLoanFormClose = () => {
    console.log('Closing modal...');
    setShowLoanForm(false);
    handleCloseSuccessModal(); // Close the success modal as well
  };
  const [loanFormData, setLoanFormData] = useState({
    name: '',
    organization: '',
    gstNumber: '',
    email: '',
    number: '',
    city: '',
    loanAmount: '',
  });
  const handleLoanChange = (e) => {
    const { name, value } = e.target;

    // Check if the input field is 'loanAmount'
    if (name === 'loanAmount') {
        // Remove any non-digit characters from the input value, except for the Indian Rupee symbol
        const cleanedValue = value.replace(/[^\d₹]/g, '');

        // Remove leading zeros
        const cleanedValueNoZeros = cleanedValue.replace(/^0+/, '');

        // Format loan amount with commas
        const formattedLoanAmount = cleanedValueNoZeros.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // Update loanFormData with the formatted value
        setLoanFormData({ ...loanFormData, [name]: formattedLoanAmount });
    } else {
        // For other fields, update loanFormData as usual
        setLoanFormData({ ...loanFormData, [name]: value });
    }
};

  const handleLoanSubmit = async (e) => {
    console.log('Handling submit...');
    e.preventDefault();
    try {
      const response = await axios.post('https://bharat-sme-5365a880f24b.herokuapp.com/loan', loanFormData);
      console.log(response.data);
      // Check if the registration was successful before closing the modal
      if (response.data.success) {
        // Reset the form data
        setLoanFormData({
          name: '',
          organization: '',
          gstNumber: '',
          email: '',
          number: '',
          city: '',
          loanAmount: '',
        });
        // Close the modal
        handleLoanFormClose();
        // Show the success modal
        handleShowSuccessModal();
      } else {
        console.error('Error registering user:', response.data.error);
        // Handle the error scenario if needed
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };
  const handleLoanButtonClick = () => {
    // You can perform any additional logic before showing the login form here
    handleLoanFormShow();
  };

  //partnership form
  const [showPartnershipForm, setShowPartnershipForm] = useState(false);
  const handlePartnershipFormShow = () => setShowPartnershipForm(true);
  const handlePartnershipFormClose = () => {
    console.log('Closing modal...');
    setShowPartnershipForm(false);
    handleCloseSuccessModal(); // Close the success modal as well
  };
  const [partnershipFormData, setPartnershipFormData] = useState({
    name: '',
    organization: '',
    email: '',
    number: '',
    description: '',
    partnershipType: '',
  });
  const handlePartnershipChange = (e) => {
    setPartnershipFormData({ ...partnershipFormData, [e.target.name]: e.target.value });
  };
  const handlePartnershipSubmit = async (e) => {
    console.log('Handling submit...');
    e.preventDefault();
    try {
      const response = await axios.post('https://bharat-sme-5365a880f24b.herokuapp.com/partnership', partnershipFormData);
      console.log(response.data);
      // Check if the registration was successful before closing the modal
      if (response.data.success) {
        // Reset the form data
        setPartnershipFormData({
          name: '',
          organization: '',
          email: '',
          number: '',
          description: '',
          partnershipType: '',
        });
        // Close the modal
        handlePartnershipFormClose();
        // Show the success modal
        handleShowSuccessModal();
      } else {
        console.error('Error registering user:', response.data.error);
        // Handle the error scenario if needed
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };
  const handlePartnershipButtonClick = () => {
    // You can perform any additional logic before showing the login form here
    handlePartnershipFormShow();
  };

  //success forms
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const handleShowSuccessModal = () => {
    setShowSuccessModal(true);
  }
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  }

  return (
    <div className="App height">
      <div style={{ padding: '15px', fontWeight: 'bold', paddingTop: '0px' }}>
        <Navbar expand="lg" style={{ backgroundColor: 'white' }} className='nav'>
          <Container>
            <Navbar.Brand className="logo" href="#home"><img src="logo_new.png" alt="Logo" className="logo" style={{ paddingBottom: '8px' }} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto navigation">
                <Nav.Link href="#about" className='navs'>About Us</Nav.Link>
                {/* <NavDropdown title="Products" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">RMC</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Yarn</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">SME Business Loans</NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link href="#subsidy" className='navs' style={{ width: '150px' }}>PMFME (Food Industry Subsidy)</Nav.Link>
                <Nav.Link href="#loans" className='navs' style={{ width: '220px' }}>Unsecured Business Loans<p style={{fontSize: 'smaller', marginBottom: '0px'}}>(Starting at 14%)</p></Nav.Link>
                <Nav.Link href="#contact" className='navs'>Contact Us</Nav.Link>
                {/* <Nav.Link href="#getintouch"><Button className="navbutton" type="link" onClick={handleContactButtonClick}>Get in Touch</Button></Nav.Link> */}
                <Button className="navbutton"><NavDropdown title="Get in Touch">
                  <NavDropdown.Item type="link" onClick={handleSubsidyButtonClick}>For Subsidy</NavDropdown.Item>
                  <NavDropdown.Item type="link" onClick={handleLoanButtonClick}>For Loans</NavDropdown.Item>
                  <NavDropdown.Item type="link" onClick={handlePartnershipButtonClick}>For Partnership Enquiry</NavDropdown.Item>
                </NavDropdown></Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Container fluid>
        <Carousel id="home">
          <Carousel.Item className='carousel'>
            <img
              className=" image"
              src="modi_carousel.jpeg"
              alt="First slide"
              style={{ width: '100%', height: '500px', objectFit: 'contain' }}
            />
            {/* <Carousel.Caption className='captioncolor'>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item className='carousel'>
            <img
              className="image"
              src="subsidy_carousel.png"
              alt="Second slide"
              style={{ width: '100%', height: '500px', objectFit: 'contain' }}
            />
            {/* <Carousel.Caption className='captioncolor'>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item className='carousel'>
            <img
              className="image"
              src="loan_carousel.png"
              alt="Third slide"
              style={{ width: '100%', height: '500px', objectFit: 'contain' }}
            />
            {/* <Carousel.Caption className='captioncolor'>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>

        </Carousel>
      </Container>

      <section id="about" className="text-center py-3 sections" >
        <div className="container aboutUs">
          <h2 className="sectionHeading">What We Do?</h2>
          <div className="mx-auto" style={{ maxWidth: '1000px' , textAlign: 'justify'}}>
            <p>
            At <span className='about'>BharatMSME</span>, we understand the struggles that Indian<span className='about'> MSMEs (Micro, Small and Medium enterprises) </span>face when it comes to availing subsidies given by State and Central governments. There is lack of awareness among these enterprises about various subsidies for which they are eligible and which can be availed easily.
            </p>
            <p>
            In some cases, even if they are aware about such schemes, they lack the motivation to apply because of the lengthy procedures and various documentations.
            </p>
            <p>We are here to break this myth and help MSMEs avail benefit of each and every subsidy they are eligible for.
            </p>
            <br></br>
            <p>
            Another problem which MSMEs face is the lack of credit/ loans from banks/ financial institutions. Most of the applications are rejected due to lack of proper documentation, while for few MSMEs whose applications get sanctioned they get either very high interest rates or are offered loans after months of follow ups. The reason behind this problem is lack of credit history, incomplete documentation and no collateral to offer for mortgage against such loans.
            </p>
            <p>BharatMSME again comes to rescue such MSMEs by offering them loans with minimal documentation, lowest interest rates and completely digital process.  
            </p>
          </div>
        </div>
      </section>
      <section id="subsidy" className="text-center py-3 sections">
        <div className="container subsidy">
          <h2 className='sectionHeading'>PMFME Scheme </h2>
          <div className="mx-auto" style={{ maxWidth: '1000px', textAlign: 'justify' }}>
            <p>
            The<span className='about'> PMFME (Pradhan Mantri Formalisation of Micro Food Processing Enterprises) Scheme </span>is a one-stop solution to formalise the Indian food sector. The Ministry of Food Processing implemented this scheme with the aim of supporting the ‘Vocal for Local’ campaign.
            </p>
            <p>
              The PMFME scheme was launched under Atmanirbhar Bharat Abhiyaan in 2020 for 5 years from 2020-21 to 2024-25. It aims to increase the existing micro-enterprises operating in the food processing industries in the unorganised segment and formalise them with a special focus on supporting Farmer Producer Organizations (FPOs), producers cooperatives and Self-Help Groups (SHGs) engaged in the agri-food processing sector.
            </p>
            <p>
              <p>Under this scheme, capital subsidy of <span className='about'>35%</span> of the eligible project cost is granted maximum upto :</p>
            	•	<span className='about'>₹ 3 crore </span>for common infrastructure and capital expenditure of SHGs, FPOs and cooperatives.
              <br></br><br></br> •	<span className='about'>₹ 10 lakhs </span>to individuals, proprietorships, partnerships, FPOs, NGOs, cooperatives, SHGs or private limited companies to upgrade existing units or set up new units.
              <br></br><br></br> •  The subsidy is also applicable for <span className='about'>expansion of existing food businesses</span>.
            </p>
          </div>
          <Button variant="primary" className="buttons" onClick={handleSubsidyButtonClick} style={{position: 'relative', fontSize: 'larger', fontWeight: 'bolder'}}>
                            Apply Now
                        </Button>
        </div>
      </section>
      <section id="loans" className="text-center py-3 sections">
        <div className="container loan">
          <h2 className='sectionHeading'>Unsecured Business Loans</h2>
          <div className="mx-auto" style={{ maxWidth: '1000px', textAlign: 'justify' }}>
            <p>An <span className='about'>Unsecured Business Loan </span>is the money you borrow from a lender for business purposes. The lender does not require you to pledge security, and you can repay the loan through Equated Monthly Instalments (EMIs). So how do lenders approve loans without any collateral in exchange? Well, they assess your repayment capabilities, i.e., your credit history and income when approving your loan. Eligible borrowers can get an Unsecured Business Loan for new businesses, business expansion, upgrading machinery, funding working capital, revamping the business space, etc. Micro, small and medium enterprises (MSMEs) can benefit from such loans as the chances of them having a property to pledge may be unlikely.
            </p>
            <p className='about'>Types of Unsecured Business Loans:
            </p>
            <span className='about'>• Term Business Loan: </span><span>You can get high-value Business Loans without collateral, guarantor or any other security to be repaid over a certain period of time. 
            </span>
            <br></br>
            <br></br>
            <span className='about'>• Overdraft (OD) Facility: </span><span>OD allows you to borrow sums of money from your lender if you hold a business account such as a Current Account. As a line of credit, you pay interest on the loan amount you have utilised for various business purposes.
            </span>
            <br></br>
            <br></br>
            {/* <p className='about'>What are the benefits of Unsecured Business Loans?</p>
            <span className='about'>• Faster processing times: </span><span>Without collateral, the only factors that the lender needs to assess are your credit score and business profitability. The documentation process, too, is at a minimum. Therefore, lenders process your loan within shorter timeframes. You can also enjoy faster disbursal once your Business Loan is approved.</span>
            <br></br>
            <br></br>
            <span className='about'>• Affordable EMIs:  </span><span>With good repayment capabilities, you can negotiate preferential interest rates. That means, you can bring down your overall loan cost. Also, your monthly debt repayment does not bite a major chunk of your income.</span>
            <br></br>
            <br></br>
            <span className='about'>• Flexible repayment terms: </span><span>Based on your creditworthiness, the lender can offer your repayment tenures that can last for five to seven years. You can opt for longer tenures for a lower EMI or contrariwise.</span>
            <br></br>
            <br></br> */}
          </div>
          <Button variant="primary" className="buttons" onClick={handleLoanButtonClick} style={{position: 'relative', fontSize: 'larger', fontWeight: 'bolder'}}>
                            Apply Now
                        </Button>
        </div>
        
      </section>
      <section id="contact" className="text-center py-3 sections" >
        <div className="container">
          <h2 >Contact Us</h2>
          <div className="mx-auto" style={{display: 'flex', justifyContent: 'center' }}>
            <span style={{marginRight: '35px'}}>
             <PhoneIcon /> : <a href="tel:+918469878265" className='phone-link'>+91-8469878265</a> </span>
              {/* <br></br> */}
            <span style={{marginRight: '35px'}}>
            <EmailIcon /> : <a href="mail:Bharatmsmeofficial@gmail.com" className='phone-link'>Bharatmsmeofficial@gmail.com</a>
            </span>
            <span><BusinessIcon /> : <a href="mail:Bharatmsmeofficial@gmail.com" className='phone-link'>7, Prabhu Darshan Complex, Surat, Gujarat</a></span>
          </div>
        </div>
      </section>

      {/* Subsidy Form */}
      <SubsidyForm
        show={showSubsidyForm}
        handleClose={handleSubsidyFormClose}
        handleSubmit={handleSubsidySubmit}
        handleChange={handleSubsidyChange}
        formData={subsidyFormData}
        showsuccess={showSuccessModal}
        closeSuccess={handleCloseSuccessModal}
      />

      {/* Loan Form */}
      <LoanForm
        show={showLoanForm}
        handleClose={handleLoanFormClose}
        handleSubmit={handleLoanSubmit}
        handleChange={handleLoanChange}
        formData={loanFormData}
        showsuccess={showSuccessModal}
        closeSuccess={handleCloseSuccessModal}
      />

      {/* Partnership Form */}
      <PartnershipForm
        show={showPartnershipForm}
        handleClose={handlePartnershipFormClose}
        handleSubmit={handlePartnershipSubmit}
        handleChange={handlePartnershipChange}
        formData={partnershipFormData}
        showsuccess={showSuccessModal}
        closeSuccess={handleCloseSuccessModal}
      />

    </div>
  );
}

export default App;
