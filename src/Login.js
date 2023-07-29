import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import  { useState } from 'react';
import './components/Login.css';
import Signup from './Signup';

// class  extends React.Component{
//   state = {
//      modalOpen: false
//   }

//   handleModalOpen = () => {
//      this.setState((prevState) => {
//         return{
//            modalOpen: !prevState.modalOpen
//         }
//      })
//   }
// }

const Login = ({ modalOpen, handleModalOpen ,handleSignupClick }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here
    console.log(`Logging in with phone number: ${phoneNumber}`);
  };

  const handleClose = () => {
    handleModalOpen(); // Call the handleModalOpen function to close the modal
  };

  //const handleSignup = () => {
    //handleClose(); // Close the login modal
        // Trigger the signup action
  //};
  const handleSignupModalOpen = () => {
    handleModalOpen(false);
    setShowSignupModal(true);
  };

  const handleSignupModalClose = () => {
    setShowSignupModal(false);
  };

    return (
        <>
           <Modal show={modalOpen} onHide={handleClose} centered>
              {/* <Modal.Header closeButton>
                 <Modal.Title>Login</Modal.Title>
              </Modal.Header> */}
              <Modal.Body><div className="login-modal">
            <div className="login-container">
              <div className="close-button" onClick={handleClose}>
                <span className="close-icon">&#10005;</span>
              </div>
              <div className="logo">
                <img src="logo.png" alt="Logo" />
              </div>
              <h2>Login</h2>
              <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <button onClick={handleLogin}>Log in</button>
              <div className="create-account">
                Don't have an account?  
                <a onClick={handleSignupModalOpen}>Create an account</a>
              </div>
            </div>
          </div>
          </Modal.Body>
              <Modal.Footer>
              {/* <Button variant="danger" onClick={handleClose}>
                    Cancel
                 </Button> */}
              </Modal.Footer>
          </Modal>
          {/* <Modal show={showSignupModal} onHide={handleSignupModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup/>
        </Modal.Body>
      </Modal> */}
      <Signup modalOpen={showSignupModal} handleModalOpen={handleSignupModalClose} />
    
        </>
     );
}

export default Login;