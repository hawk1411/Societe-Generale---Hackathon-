// src/PrivacyPolicy.js
import React from 'react';

// Re-using the PageWithBack wrapper for consistency
import { PageWithBack } from './App'; // Import PageWithBack from App.js

const PrivacyPolicy = ({ onBack }) => {
  return (
    <PageWithBack title="Privacy Policy" onBack={onBack}>
      <p><strong>Effective Date:</strong> July 25, 2025</p>

      <p>This Privacy Policy describes how Secure File System ("we," "us," or "our") collects, uses, and discloses your information in connection with your use of our blockchain-powered file management system.</p>

      <h3>1. Information We Collect</h3>
      <p>We collect information to provide and improve our services to you. This includes:</p>
      <ul>
        <li><strong>Account Information:</strong> When you register, we collect your username, email address, and hashed password.</li>
        <li><strong>File Metadata:</strong> Information about the files you upload (e.g., file names, types, sizes, upload timestamps), but NOT the file content itself.</li>
        <li><strong>Blockchain Transaction Data:</strong> Public data related to transactions on the blockchain (e.g., cryptographic hashes of your files, transaction IDs, wallet addresses, timestamps).</li>
        <li><strong>Usage Data:</strong> Information on how you access and use the service (e.g., pages visited, features used).</li>
      </ul>

      <h3>2. How We Use Your Information</h3>
      <p>We use the collected information for various purposes, including:</p>
      <ul>
        <li>To provide and maintain our service.</li>
        <li>To manage your account and provide customer support.</li>
        <li>To monitor the usage of our service and identify potential improvements.</li>
        <li>To ensure the security and integrity of your file records on the blockchain.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h3>3. Data Security</h3>
      <p>We are committed to protecting your data. We use industry-standard security measures, including:</p>
      <ul>
        <li>Hashing of passwords.</li>
        <li>Secure communication protocols (HTTPS).</li>
        <li>Decentralized storage of file hashes on the blockchain, which inherently provides immutability.</li>
      </ul>

      <h3>4. Your Data Protection Rights</h3>
      <p>Depending on your location, you may have rights regarding your personal data, such as the right to access, correct, or delete your information.</p>

      <h3>5. Changes to This Privacy Policy</h3>
      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

      <p className="mt-20">If you have any questions about this Privacy Policy, please contact us.</p>
    </PageWithBack>
  );
};

export default PrivacyPolicy;