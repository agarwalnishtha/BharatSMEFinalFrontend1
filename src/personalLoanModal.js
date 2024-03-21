// PersonalLoanForm.js
import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const PersonalLoanForm = ({ show, handleClose, handleSubmit, handleChange, formData, showsuccess, closeSuccess }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='formheading'>
                    <Modal.Title>Personal Loans Enquiry</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        {/* Add your login form fields here */}
                        <Form.Group controlId="formname">
                            <Form.Label><strong>Your Name <span style={{ color: 'red' }}>*</span></strong></Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter your name" onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="formEmploymentType">
                            <Form.Label><strong>Type of employment <span style={{ color: 'red' }}>*</span></strong></Form.Label>
                            <Form.Control as="select" name="employmentType" onChange={handleChange} required>
                                <option value="">Select your employment type</option>
                                <option value="Self-employed">Self-employed</option>
                                <option value="Salaried">Salaried</option>
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
export default PersonalLoanForm;
