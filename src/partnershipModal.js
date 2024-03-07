// PartnershipForm.js
import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const PartnershipForm = ({ show, handleClose, handleSubmit, handleChange, formData, showsuccess, closeSuccess }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className='formheading'>
                    <Modal.Title>Partnership Enquiry</Modal.Title>
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
                        
                        <Form.Group controlId="formPartnershipType">
                            <Form.Label><strong>Partnership Type <span style={{ color: 'red' }}>*</span></strong></Form.Label>
                            <Form.Control as="select" name="partnershipType" onChange={handleChange} required>
                                <option value="">Select your partnership type</option>
                                <option value="Lending Partner">Lending Partner</option>
                                <option value="Loan Professional">Loan Professional</option>
                                <option value="Subsidy Professional">Subsidy Professional</option>
                                <option value="Others">Others</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label><strong>Description <span style={{ color: 'red' }}>*</span></strong></Form.Label>
                            <Form.Control as="textarea" type="text" name="description" placeholder="Describe your requirements here" onChange={handleChange} required />
                        </Form.Group>
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
export default PartnershipForm;
