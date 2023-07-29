
import React  from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './components/Signup.css';




const Signup = ({ modalOpen, handleModalOpen }) => {
  const handleClose = () => {
    handleModalOpen(false);
  };

  const handleSignup = () => {
    // Perform signup logic here
    console.log('Signing up...');
  };

  return (
    <>
      <Modal show={modalOpen} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="signup-form">
            {/* Signup form contents */}
            <div className="form-row">
              <input type="text" placeholder="Name" />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-row">
              <button className="signup-button" onClick={handleSignup}>
                Sign Up
              </button>
            </div>
            <div className="form-row">
              <input type="checkbox" id="terms-checkbox" />
              <label htmlFor="terms-checkbox">I accept the Terms and Conditions</label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Signup;