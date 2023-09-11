import React from 'react';
import './App.css'; // Make sure to create an App.css with your custom styles

// The LandingPage component serves as the main layout for your landing page.
const LandingPage = () => {

  // The Header component contains the header section of the landing page.
  const Header = () => (
    <div className="header">
      <h1>Welcome to Our Website</h1>
      <p>Your go-to platform for exceptional services.</p>
    </div>
  );

  // The AboutUs component contains the About Us section.
  const AboutUs = () => (
    <div className="container about-us">
      <h2>About Us</h2>
      <p>We provide top-quality services aimed at fulfilling all your needs.</p>
      <button className="button">Learn More</button>
    </div>
  );

  // The Services component contains the Services section.
  const Services = () => (
    <div className="container services">
      <h2>Our Services</h2>
      <ul>
        <li>Consulting</li>
        <li>Software Development</li>
        <li>Digital Marketing</li>
      </ul>
    </div>
  );

  // The Contact component contains the Contact Us section.
  const Contact = () => (
    <div className="container contact">
      <h2>Contact</h2>
      <p>Email: info@example.com</p>
      <p>Phone: +1 (123) 456-7890</p>
    </div>
  );

  // All the individual components are composed here.
  return (
    <div>
      <Header />
      <AboutUs />
      <Services />
      <Contact />
    </div>
  );
};

// Export the LandingPage component, so you can use it in index.js or other components.
export default LandingPage;
