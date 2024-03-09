// LoanForm.js
import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const LoanForm = ({ show, handleClose, handleSubmit, handleChange, formData, showsuccess, closeSuccess }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='formheading'>
                    <Modal.Title>Unsecured Business Loans Enquiry</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        {/* Add your login form fields here */}
                        <Form.Group controlId="formname">
                            <Form.Label><strong>Your Name <span style={{ color: 'red' }}>*</span></strong></Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter your name" onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="formOrganizationName">
                            <Form.Label><strong>Organization Name</strong></Form.Label>
                            <Form.Control type="text" name="organization" placeholder="Enter your organization name" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formGST">
                            <Form.Label><strong>GST Number <span style={{ color: 'red' }}>*</span></strong></Form.Label>
                            <Form.Control type="text" name="gstNumber" placeholder="Enter your GST Number" onChange={handleChange} required pattern="[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}"
                                title="Please enter a valid GST number" />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid GST number.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBusinessPeriod">
                            <Form.Label><strong>Business Operational From <span style={{ color: 'red' }}>*</span></strong></Form.Label>
                            <Form.Control as="select" name="businessPeriod" onChange={handleChange} required>
                                <option value="">Select your business period</option>
                                <option value="1 year">1 year</option>
                                <option value="2 years">2 years</option>
                                <option value="3 years">3 years</option>
                                <option value=">3 years">{'>'}3 years</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formContact">
                            <Form.Label><strong>Contact Number <span style={{ color: 'red' }}>*</span></strong></Form.Label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">+91</span>
                                </div>
                                <Form.Control type="text" name="number" placeholder="Enter your contact number" onChange={handleChange} required pattern="[0-9]{10}" title="Please enter a 10-digit number" />
                            </div>
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid 10-digit contact number.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formMail">
                            <Form.Label><strong>Mail Id</strong></Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter your mail id" onChange={handleChange} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" title="Please enter a valid email address" />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid email address.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formCity">
                            <Form.Label><strong>City <span style={{ color: 'red' }}>*</span></strong></Form.Label>
                            <Form.Control as="select" name="city" onChange={handleChange} required>
                                <option value="">Select your business location</option>
                                <option value="Ahmedabad">Ahmedabad</option>
                                <option value="Amreli">Amreli</option>
                                <option value="Anand">Anand</option>
                                <option value="Aravalli">Aravalli</option>
                                <option value="Banaskantha">Banaskantha</option>
                                <option value="Bharuch">Bharuch</option>
                                <option value="Bhavnagar">Bhavnagar</option>
                                <option value="Botad">Botad</option>
                                <option value="Chhota Udaipur">Chhota Udaipur</option>
                                <option value="Dahod">Dahod</option>
                                <option value="Dang">Dang</option>
                                <option value="Dwarka">Dwarka</option>
                                <option value="Gandhinagar">Gandhinagar</option>
                                <option value="Gir Somnath">Gir Somnath</option>
                                <option value="Jamnagar">Jamnagar</option>
                                <option value="Junagadh">Junagadh</option>
                                <option value="Kheda">Kheda</option>
                                <option value="Kutch">Kutch</option>
                                <option value="Mahisagar">Mahisagar</option>
                                <option value="Mehsana">Mehsana</option>
                                <option value="Morbi">Morbi</option>
                                <option value="Narmada">Narmada</option>
                                <option value="Navsari">Navsari</option>
                                <option value="Panchmahal">Panchmahal</option>
                                <option value="Patan">Patan</option>
                                <option value="Porbandar">Porbandar</option>
                                <option value="Rajkot">Rajkot</option>
                                <option value="Sabarkantha">Sabarkantha</option>
                                <option value="Surat">Surat</option>
                                <option value="Surendranagar">Surendranagar</option>
                                <option value="Tapi">Tapi</option>
                                <option value="Vadodara">Vadodara</option>
                                <option value="Valsad">Valsad</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formLoanAmount">
                            <Form.Label><strong>Loan Amount <span style={{ color: 'red' }}>*</span></strong></Form.Label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">₹</span>
                                </div>
                                <Form.Control type="text" name="loanAmount" value={formData.loanAmount} placeholder="Enter your loan amount" onChange={handleChange} required />
                            </div>
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid loan amount.
                            </Form.Control.Feedback>
                        </Form.Group>
                        {/* Add more form fields as needed */}
                    </Modal.Body>
                    <Modal.Footer >
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit' className="buttons">
                            Register
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>

            <Modal show={showsuccess} onHide={closeSuccess}>
                <Modal.Header closeButton>
                    <Modal.Title>Success!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Thank you for reaching out to us!</p>
                </Modal.Body>
            </Modal>
        </div>
    );
};
export default LoanForm;
