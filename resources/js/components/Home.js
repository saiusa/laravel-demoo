import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div id="homepage">
      <h1>Welcome to the Homepage</h1>
      <nav>
        <ul>
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
        </ul>
      </nav>
    </div>
  );
}
