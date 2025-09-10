import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div id="contact-us">
      <h1>Contact Us</h1>
      <p>This is the Contact Us page.</p>
      <nav>
        <Link to="/">Back to Homepage</Link>
      </nav>
    </div>
  );
}