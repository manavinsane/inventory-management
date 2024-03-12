import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerStyle = {
    textAlign: 'center',
    margin: '50px auto',
    maxWidth: '600px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    // backgroundImage: 'url("")', // Use the provided image link
    backgroundSize: 'cover',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add transparency for better visibility
  };

  const titleStyle = {
    color: '#333',
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    color: '#666',
    fontSize: '18px',
    marginBottom: '30px',
  };

  const linkStyle = {
    display: 'inline-block',
    color: '#007bff',
    fontSize: '20px',
    textDecoration: 'none',
    margin: '10px',
    padding: '8px 16px',
    border: '1px solid #007bff',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  const linkHoverStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Welcome to Inventory Management System</h1>
      <p style={paragraphStyle}>
        This is a simple Inventory management system. Click on the links below
        to access different functionalities.
      </p>
      <h2>Available Links:</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Link to="/ProductList" style={linkStyle} activeStyle={linkHoverStyle}>Product List</Link>
        </li>
        <li>
          <Link to="/inventory-management" style={linkStyle} activeStyle={linkHoverStyle}>Inventory Management</Link>
        </li>
        <li>
          <Link to="/authentication" style={linkStyle} activeStyle={linkHoverStyle}>Authentication</Link>
        </li>
        <li>
          {/* <Link to="/search" style={linkStyle} activeStyle={linkHoverStyle}>Search</Link> */}
        </li>
        {/* <li>
          <Link to="/dashboard" style={linkStyle} activeStyle={linkHoverStyle}>Dashboard</Link>
        </li> */}
        <li>
          {/* <Link to="/admin-panel" style={linkStyle} activeStyle={linkHoverStyle}>Admin Panel</Link> */}
        </li>
        <li>
          <Link to="/order" style={linkStyle} activeStyle={linkHoverStyle}>Order</Link>
        </li>
        <li>
          <Link to="/settings" style={linkStyle} activeStyle={linkHoverStyle}>Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
