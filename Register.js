// Registration.js
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Registration = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
  
    // Basic validation
    if (!fullName || !email || !password) {
      toast.error('Please fill in all fields.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
      return;

    }
    

    // Implement registration logic here
    console.log('Registration clicked');

    // Simulate successful registration
    simulateSuccessfulRegistration();
  };

  const simulateSuccessfulRegistration = () => {
    // Simulate a successful registration
    // Replace this with actual registration logic
    // If registration is successful, show the success toast and redirect to login

    // Show success toast
    toast.success('Registration successful!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });

    // Redirect to the login page after a delay
    setTimeout(() => {
      window.location.href = '/login';
    }, 3000);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '300px', margin: 'auto', padding: '20px', border: '1px solid #3498db', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#3498db' }}>Register</h2>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderColor: '#3498db' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderColor: '#3498db' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderColor: '#3498db' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px' }}>Reenter Password:</label>
          <input
            type="password"
            // Add validation logic for password confirmation if needed
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderColor: '#3498db' }}
          />
        </div>
        <button
          type="button"
          onClick={handleRegistration}
          style={{ width: '100%', padding: '10px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
        >
          Register
        </button>
        <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px' }}>
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => window.location.href = '/login'}
            style={{
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
              textDecoration: 'underline',
              padding: '0',
              margin: '0',
            }}
          >
            Login
          </button>
        </p>
      </div>
      {/* Toast container to display notifications */}
      <ToastContainer />
    </div>
  );
};
export default Registration;