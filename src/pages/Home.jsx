import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>TYLER DICKENSON</h1>
        <h1>Coming soon...</h1>
        <Link to="/portfolio" style={{ textDecoration: 'none', color: 'blue' }}>
            <button>Portfolio</button>
        </Link>
        </div>
    );
}

export default Home;
