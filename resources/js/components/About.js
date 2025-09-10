import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div id="about-us">
      <h1>About Us</h1>
      <p>This is the About Us page.</p>
      <nav>
        <Link to="/">Back to Homepage</Link>
      </nav>
    </div>
  );
}