import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
        
        <h1>TYLER DICKENSON</h1>
        <h1>Coming soon...</h1>
        <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>
        <button>Home</button>
        </Link>
    </div>
  );
}

export default Portfolio;
