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


function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);


  const handleLoginFormShow = () => setShowLoginForm(true);
  const handleLoginFormClose = () => {
    console.log('Closing modal...');
    setShowLoginForm(false);
    setShowSuccessModal(false); // Close the success modal as well
  };

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    number: '',
    requirements: '',
    purpose: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log('Handling submit...');
    e.preventDefault();
    try {
      const response = await axios.post('https://bharat-sme-5365a880f24b.herokuapp.com/register', formData);
      console.log(response.data);
      // Check if the registration was successful before closing the modal
      if (response.data.success) {
        // Reset the form data
        setFormData({
          name: '',
          organization: '',
          email: '',
          number: '',
          requirements: '',
          purpose: '',
        });
        // Close the modal
        handleLoginFormClose();
        // Show the success modal
      setShowSuccessModal(true);
      } else {
        console.error('Error registering user:', response.data.error);
        // Handle the error scenario if needed
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleContactButtonClick = () => {
    // You can perform any additional logic before showing the login form here
    handleLoginFormShow();
  };

  return (
    <div className="App height">
      <div style={{ padding: '15px', fontWeight: 'bold' }}>
        <Navbar expand="lg" style={{ backgroundColor: 'cadetblue' }}>
          <Container>
            <Navbar.Brand className="logo" href="#home"><img src="img-562.png" alt="Logo" className="logo" style={{ paddingBottom: '8px' }} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link> */}
                <Nav.Link href="#about" className='navs'>About Us</Nav.Link>
                <NavDropdown title="Products" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">RMC</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Yarn</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#prices" className='navs'>Prices</Nav.Link>
                <Nav.Link href="#contact" className='navs'>Contact Us</Nav.Link>
                <Nav.Link href="#getintouch"><Button className="navbutton" type="link" onClick={handleContactButtonClick}>Get in Touch</Button></Nav.Link>
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
              src="image.png"
              alt="First slide"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* <Carousel.Caption className='captioncolor'>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item className='carousel'>
            <img
              className="image"
              src="6bb36029-0fdc-4655-b712-9e05f1089f1e.jpg"
              alt="Second slide"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* <Carousel.Caption className='captioncolor'>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item className='carousel'>
            <img
              className="image"
              src="Yarn_Carausal.jpg"
              alt="Third slide"
              style={{ width: '100%', height: '100%', objectFit: 'fill' }}
            />
            {/* <Carousel.Caption className='captioncolor'>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>

        </Carousel>
      </Container>

      <section id="about" className="text-center py-3 sections" >
        <div className="container">
          <h2 className="sectionHeading">What We Do?</h2>
          <div className="mx-auto" style={{ maxWidth: '800px' }}>
            <p className='about'>
              At BharatSME, we understand the struggles that Indian SMEs (Small and Medium Enterprise) face when it comes to their raw material procurement. They don’t have direct access to quality suppliers and have to procure from small traders/dealers who offer very short credit periods that too at very high interest rates. That's why we created BharatSME - an online raw material procurement platform specifically designed for SMEs in India. Our goal is to simplify the procurement process and help our clients save time, money, and effort by providing a one-stop solution for all their raw material needs.
            </p>

            <p className='about'>
              Our team of experts has carefully selected and partnered with top suppliers in the industry to bring you the best quality products at competitive prices directly from these suppliers. But we don't just stop there, through our partnership with some of the leading financial institutions of our country, we offer a wide range of financial products that cater to your credit and loan requirements. With our user-friendly platform, efficient delivery system, and dedicated customer support team, we strive to make the procurement process seamless and hassle-free for our clients.
            </p>

            <p className='about'>
              We believe that every business, no matter its size, deserves access to the best resources. That's why BharatSME is dedicated to helping small and medium scale construction companies thrive in today's market.
            </p>
          </div>
        </div>
      </section>
      <section id="action/3.1" className="text-center py-3 sections">
        <div className="container rmc">
          <h2 className='sectionHeading'>RMC</h2>
          <div className="mx-auto" style={{ maxWidth: '800px' }}>
            <p>
              Ready Mix Concrete (RMC) is a tailor-made concrete mixture manufactured in a centralized batching plant, where raw materials such as cement, aggregates, water, and admixtures are precisely measured and mixed. The resulting concrete is then transported to construction sites in specialized transit mixers, ready for immediate use. This innovative approach eliminates the need for on-site mixing and ensures a consistent, high-quality concrete mix.

              Centralized batching plants utilize advanced technology to ensure that the concrete mix is consistent and adheres to strict quality standards. The precision in mixing leads to a uniform composition, resulting in structures with enhanced strength, durability, and overall quality.

              It can be customized to meet specific project requirements, allowing for a versatile range of applications. Contractors can easily adjust the mix design to achieve desired characteristics such as strength, workability, and durability, catering to the unique needs of each construction project.

              By partnering with leading RMC plants in Surat, we offer the highest quality concrete mix with on-time delivery and customisable credit period/financing options.
            </p>
          </div>
        </div>
      </section>
      <section id="action/3.2" className="text-center py-3 sections">
        <div className="container yarn">
          <h2 className='sectionHeading'>Yarn</h2>
          <div className="mx-auto" style={{ maxWidth: '800px' }}>
            <p>Yarn refers to the continuous strands of fibres that are spun or twisted together to form a cohesive and continuous thread. Yarn is a crucial raw material in India's extensive textile industry, which has a deep-rooted history and plays a significant role in the country's economy.

              In India, yarn is produced from various types of fibres, including natural fibres like cotton, wool, silk, and jute, as well as synthetic fibres such as polyester, nylon, and acrylic. The choice of fibre depends on the intended use of the yarn and the characteristics desired in the final textile product. It is used for a wide array of applications, including the manufacturing of fabrics, clothing, home textiles, and industrial products.

              By partnering with leading Yarn manufacturers in Gujarat, we offer the highest quality yarn with on-time delivery and customisable credit period/financing options.
            </p>
          </div>
        </div>
      </section>
      <section id="prices" className="text-center py-3 sections">
        <h2 className='sectionHeading'>Prices</h2>
        <div className="mx-auto" style={{ maxWidth: '1000px' }}>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Product</th>
                <th scope="col">Rate</th>
                <th scope="col">Location</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>RMC Grade A</td>
                <td>5000/cm<sup>3</sup></td>
                <td>Surat</td>
                <td><Button className="buttons" type="link" onClick={handleContactButtonClick}>Enquire Now</Button></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Yarn Grade A</td>
                <td>80,000/ton</td>
                <td>Surat</td>
                <td><Button className="buttons" type="link" onClick={handleContactButtonClick}>Enquire Now</Button></td>
              </tr>
            </tbody>

          </table>
        </div>
      </section>
      <section id="contact" className="text-center py-3 sections" >
        <div className="container">
          <h2 className="sectionHeading" style={{ color: 'white', textDecoration: 'underline' }}>Contact Us</h2>
          <div className="mx-auto" style={{ maxWidth: '800px' }}>
            <p className='about'>
              Aashish Agarwal (Co-founder) : <a href="tel:+917600241395" className='phone-link'>+91-7600241395</a> </p>
            <p className='about'>
              Nishant Agarwal (Co-founder) : <a href="tel:+918905643296" className='phone-link'>+91-8905643296</a>
            </p>
          </div>
        </div>
      </section>



      {/* Login Form Modal */}
      <Modal show={showLoginForm} onHide={handleLoginFormClose}>
        <Modal.Header closeButton className='formheading'>
          <Modal.Title>Get in Touch</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            {/* Add your login form fields here */}
            <Form.Group controlId="formname">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter your name" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formOrganizationName">
              <Form.Label>Organization Name</Form.Label>
              <Form.Control type="text" name="organization" placeholder="Enter your organization name" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formPurpose">
              <Form.Label>Purpose</Form.Label>
              <Form.Control as="select" name="purpose" onChange={handleChange} >
                <option value="">Select your purpose</option>
                <option value="Want to become a Supplier">Want to become a Supplier</option>
                <option value="Want to become a Buyer">Want to become a Buyer</option>
                <option value="Want to become a Lending Partner">Want to become a Lending Partner</option>
                <option value="Others">Others</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formRequirements">
              <Form.Label>Requirements</Form.Label>
              <Form.Control as="textarea" type="text" name="requirements" placeholder="Enter your requirements" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formMail">
              <Form.Label>Mail Id</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter your mail id" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formContact">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="number" name="number" placeholder="Enter your contact number" onChange={handleChange} />
            </Form.Group>
            {/* Add more form fields as needed */}
          </Modal.Body>
          <Modal.Footer >
            <Button variant="secondary" onClick={handleLoginFormClose}>
              Close
            </Button>
            <Button variant="primary" type='submit' className="buttons">
              Register
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for reaching out to us!</p>
          {/* You can add more content or customize this as needed */}
        </Modal.Body>
      </Modal>

    </div>
  );
}

export default App;
