// src/AboutUs.js
import React from 'react';

// Re-using the PageWithBack wrapper for consistency
import { PageWithBack } from './App'; // Import PageWithBack from App.js

const AboutUs = ({ onBack }) => {
  return (
    <PageWithBack title="About Us" onBack={onBack}>
      <p>Welcome to our application – a secure, transparent, and reliable platform for uploading and verifying digital files using blockchain technology.</p>

      <p>This platform was developed by **Team Vulnhunt** during a hackathon with a shared goal:</p>

      <p className="highlight-text mb-20"><strong>To eliminate file tampering and ensure digital trust through decentralized verification.</strong></p>

      <h3>What We Do</h3>
      <p>Our application allows users to:</p>
      <ul>
        <li>Upload files securely</li>
        <li>Generate cryptographic hashes (SHA-256)</li>
        <li>Store the hash on a blockchain using smart contracts</li>
        <li>Verify files against blockchain records to detect tampering</li>
        <li>View an immutable audit trail of file submissions</li>
      </ul>
      <p><em>No actual file content is stored on-chain — only a unique hash, preserving privacy while ensuring integrity.</em></p>

      <h3>Why It Matters</h3>
      <p>In today's digital landscape, file manipulation is a growing threat. Whether it's legal documents, academic certificates, or sensitive healthcare data — proving authenticity is critical.</p>

      <p>By leveraging blockchain, our system provides:</p>
      <ul>
        <li>Immutability</li>
        <li>Tamper detection</li>
        <li>Independent verification</li>
        <li>Trust without intermediaries</li>
      </ul>

      <h3>Built By Team Vulnhunt</h3>
      <p>
        <strong>Kanak Soni</strong> – UI/UX Designer<br/>
        <strong>Sakshi Chandravanshi</strong> – Frontend Developer<br/>
        <strong>Ravi Kant Mishra</strong> – Backend & Blockchain Integration<br/>
        <strong>Arya Kulkarni</strong> – Smart Contract Developer
      </p>
      <p>Together, we created a solution that not only secures files but empowers users with confidence in their data.</p>

      <h3>Our Vision</h3>
      <p>To promote digital trust and transparency by integrating secure technologies like blockchain into everyday processes.</p>
    </PageWithBack>
  );
};

export default AboutUs;