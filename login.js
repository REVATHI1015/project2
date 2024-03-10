import React, { useState } from 'react';
import Dashboard from './Dashboard'; // Import the Dashboard component
import Registration from './Register'; // Import the Registration component


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showDashboard, setShowDashboard] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const handleLogin = () => {
    // Implement login logic here
   
    console.log('Login clicked');

    // Assuming successful login, show the Dashboard
    setShowDashboard(true);
  };

  const handleSignUp = () => {
    // Set the state to show the Registration component
    setShowRegistration(true);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {showDashboard ? (
        <Dashboard />
      ) : showRegistration ? (
        <Registration />
      ) : (
        <div style={{ width: '300px', margin: 'auto', padding: '20px', border: '1px solid #3498db', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#3498db' }}>Login</h2>
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
          <button
            type="button"
            onClick={handleLogin}
            style={{ width: '100%', padding: '10px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
          >
            Login
          </button>
          <div style={{ marginTop: '15px', textAlign: 'center' }}>
            <span style={{ marginRight: '10px', color: '#3498db' }}>Don't have an account?</span>
            <button
              type="button"
              onClick={handleSignUp}
              style={{ backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
            >
              Sign up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;