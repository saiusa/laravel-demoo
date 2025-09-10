import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Example from './Example';
import Home from './Home';
import Contact from './Contact';
import About from './About';

export default function Routers() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact-us" element={<Contact/>} />
            <Route path="/about-us" element={<About/>} />
            <Route path="/example" element={<Example/>} />
        </Routes>
    </Router>
  )
}

if(document.getElementById("root")) {
    ReactDOM.render(<Routers />, document.getElementById("root"));
}