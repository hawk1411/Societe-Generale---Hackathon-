// src/ContactUs.js
import React from 'react';

// Re-using the PageWithBack wrapper for consistency
import { PageWithBack } from './App'; // Import PageWithBack from App.js

const ContactUs = ({ onBack }) => {
  return (
    <PageWithBack title="Contact Us" onBack={onBack}>
      <p>We're here to help! Please feel free to reach out to us with any questions, feedback, or support inquiries.</p>
      
      <h3>General Inquiries:</h3>
      <p>Email: <a href="mailto:info@securefilesystem.com">info@securefilesystem.com</a></p>
      <p>Phone: +91 98765 43210</p>

      <h3>Technical Support:</h3>
      <p>Email: <a href="mailto:support@securefilesystem.com">support@securefilesystem.com</a></p>
      
      <h3>Our Address:</h3>
      <p>
        Secure File System HQ<br/>
        123 Blockchain Avenue<br/>
        Indore, Madhya Pradesh, India - 452001
      </p>

      <p className="mt-20">You can also fill out the form below, coming soon!</p>
      {/* You would typically put a contact form here */}
    </PageWithBack>
  );
};

export default ContactUs;