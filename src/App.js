import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm'; // Import Contact component
import Single from './components/Single'; // Import Single component
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactForm />} /> {/* Use Contact component */}
        <Route path="/single" element={<Single />} /> {/* Use Single component */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
