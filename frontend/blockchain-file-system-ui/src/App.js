// src/App.js
import React, { useState } from 'react';

// --- Import all page components ---
// Ensure these files exist in your src/ folder
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import PrivacyPolicy from './PrivacyPolicy';

// --- Shared Components ---

// Header component
const Header = ({ isLoggedIn, onLogout, onNavigateToDashboard }) => {
  return (
    <header className="header">
      <div className="container">
        <h1>Secure File System</h1>
        {isLoggedIn && (
          <nav>
            <ul>
              <li><button className="btn-nav-link" onClick={onNavigateToDashboard}>Dashboard</button></li>
              <li><button className="btn-nav-link" onClick={onLogout}>Logout</button></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

// Footer component - now navigates to proper pages
const Footer = ({ onNavigateToAboutUs, onNavigateToContactUs, onNavigateToPrivacyPolicy }) => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Blockchain File System. All rights reserved.</p>
        <p>
            <button className="btn-link" onClick={onNavigateToAboutUs}>About Us</button> |
            <button className="btn-link" onClick={onNavigateToContactUs}>Contact Us</button> |
            <button className="btn-link" onClick={onNavigateToPrivacyPolicy}>Privacy Policy</button>
        </p>
      </div>
    </footer>
  );
};


// --- Landing Page Component ---
const LandingPage = ({ onProceedToLogin }) => {
  return (
    <div className="landing-page">
      <main className="container mt-30 mb-30">
        <div className="card text-center">
          <h2>Secure Your Files with Blockchain</h2>
          <p className="mb-20">
            Secure File System is an advanced web platform designed to ensure data integrity, authenticity, and non-repudiation during file uploads by leveraging the power of blockchain technology.
          </p>
          <p className="mb-30">
            In today’s digital landscape, where files are frequently shared and stored online, traditional systems fall short in preventing tampering, unauthorized access, and rollback attacks. Our system addresses this by providing a tamper-proof, transparent, and verifiable mechanism for uploading and verifying digital files.
          </p>

          <div className="mt-30">
            <button onClick={onProceedToLogin} className="btn btn-primary btn-lg">Get Started / Proceed to Login</button>
          </div>
        </div>

        <div className="card mt-30">
          <h2>Why Choose Our System?</h2>
          <div className="dashboard-grid">
            <div className="text-center">
              <h3>Tamper-Proof Records</h3>
              <p>Files hashes stored on an immutable blockchain ledger.</p>
            </div>
            <div className="text-center">
              <h3>Independent Verification</h3>
              <p>Anyone can verify file integrity without relying on a central authority.</p>
            </div>
            <div className="text-center">
              <h3>Transparent Audit Trail</h3>
              <p>Every file upload and update is logged and traceable.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// --- Login Page Component ---
const LoginPage = ({ onLogin, onConnectWallet, onBackToLanding }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password });
    onLogin(true); // Simulate successful login
  };

  return (
    <div className="login-page">
      <main className="container mt-30 mb-30">
        <div className="card text-center">
          <h2>Login to Your Account</h2>
          <form onSubmit={handleSubmit} className="mb-20">
            <div className="form-group">
              <label htmlFor="username">Username/Email</label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-20">Login</button>
          </form>
          <p>
            <button type="button" className="btn-link">Forgot Password?</button> | <button type="button" className="btn-link">Sign Up</button>
          </p>
          <div className="mt-30">
            <p>Or connect your Web3 Wallet:</p>
            <button onClick={onConnectWallet} className="btn btn-secondary">Connect Wallet</button>
          </div>
          <div className="mt-30">
            <button className="btn btn-link" onClick={onBackToLanding}>← Back to Landing</button>
          </div>
        </div>
      </main>
    </div>
  );
};


// --- Dashboard Components ---

const Dashboard = ({ onNavigate }) => {
  return (
    <div className="dashboard">
      <div className="container mt-30">
        <h2>Welcome, User!</h2>
        <p>Your secure file management hub.</p>

        <div className="dashboard-grid">
          <div className="card dashboard-card">
            <h3>Upload New File</h3>
            <p>Securely add a new file to the blockchain ledger.</p>
            <button className="btn btn-primary" onClick={() => onNavigate('upload')}>Upload File</button>
          </div>

          <div className="card dashboard-card">
            <h3>Verify File Integrity</h3>
            <p>Check if a file has been tampered with or is authentic.</p>
            <button className="btn btn-primary" onClick={() => onNavigate('verify')}>Verify File</button>
          </div>

          <div className="card dashboard-card">
            <h3>View Audit Trail</h3>
            <p>Review the complete history of all file uploads and changes.</p>
            <button className="btn btn-primary" onClick={() => onNavigate('audit')}>Audit Trail</button>
          </div>
        </div>

        {/* You can add more dashboard widgets here, e.g., recent uploads, stats */}
      </div>
    </div>
  );
};

// Component wrapper for pages that need a back button - NOW EXPORTED
export const PageWithBack = ({ title, onBack, children }) => {
    return (
        <div className="container mt-30 mb-30">
            {/* Conditional back button text based on currentView */}
            <button className="btn btn-secondary mb-20" onClick={onBack}>
              ← Back to {title === "About Us" || title === "Contact Us" || title === "Privacy Policy" ? "Landing" : "Dashboard"}
            </button>
            <div className="card">
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    );
};

const UploadFile = ({ onBack }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [uploadStatus, setUploadStatus] = useState({ message: '', type: '' });

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
      setUploadStatus({ message: '', type: '' });
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      setSelectedFile(e.dataTransfer.files[0]);
      setFileName(e.dataTransfer.files[0].name);
      setUploadStatus({ message: '', type: '' });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary to allow drop
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!selectedFile) {
    setUploadStatus({ message: 'Please select a file first.', type: 'error' });
    return;
  }

  const formData = new FormData();
  formData.append('file', selectedFile);

  setUploadStatus({ message: 'Uploading file to server...', type: 'info' });

  try {
    const response = await fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    const data = await response.json();
    setUploadStatus({ message: `✅ File uploaded successfully: ${data.message || data.filename || 'Success'}`, type: 'success' });
    setSelectedFile(null);
    setFileName('');
  } catch (error) {
    console.error('Upload error:', error);
    setUploadStatus({ message: `❌ Upload failed: ${error.message}`, type: 'error' });
  }
};


  return (
    <PageWithBack title="Upload New File" onBack={onBack}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="file-upload">Select File:</label>
          <div
            className="drop-area"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => document.getElementById('file-upload').click()}
          >
            <input
              type="file"
              id="file-upload"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            {selectedFile ? (
              <p>Selected file: <strong>{fileName}</strong></p>
            ) : (
              <p>Drag & Drop your file here, or click to browse</p>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="file-name">File Name (Auto-filled):</label>
          <input
            type="text"
            id="file-name"
            className="form-control"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            readOnly
            placeholder="Filename will appear here after selection"
          />
        </div>

        <button type="submit" className="btn btn-accent mt-20" disabled={!selectedFile}>
          Upload File to Blockchain
        </button>
      </form>
      {uploadStatus.message && (
        <div className={`status-message ${uploadStatus.type}`}>
          {uploadStatus.message}
        </div>
      )}
    </PageWithBack>
  );
};

const VerifyFile = ({ onBack }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [verificationStatus, setVerificationStatus] = useState({ message: '', type: '' });

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
      setVerificationStatus({ message: '', type: '' });
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!selectedFile) {
    setVerificationStatus({ message: 'Please select a file to verify.', type: 'error' });
    return;
  }

  setVerificationStatus({ message: 'Uploading and verifying file...', type: 'info' });

  try {
    const formData = new FormData();
    formData.append('file', selectedFile);

    const response = await fetch('http://localhost:3001/verify', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      setVerificationStatus({
        message: `✅ Verified! File was uploaded by ${data.uploader || 'unknown'} at ${data.timestamp || 'unknown'}.`,
        type: 'success',
      });
    } else {
      setVerificationStatus({
        message: `❌ ${data.error || 'File integrity check failed.'}`,
        type: 'error',
      });
    }
  } catch (error) {
    console.error(error);
    setVerificationStatus({
      message: '❌ Error verifying the file. Please try again later.',
      type: 'error',
    });
  }
};

  return (
    <PageWithBack title="Verify File Integrity" onBack={onBack}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="verify-file-upload">Select File to Verify:</label>
          <input
            type="file"
            id="verify-file-upload"
            className="form-control"
            onChange={handleFileChange}
            required
          />
          {selectedFile && <p className="mt-10">Selected: <strong>{fileName}</strong></p>}
        </div>

        <button type="submit" className="btn btn-primary mt-20" disabled={!selectedFile}>
          Verify File
        </button>
      </form>
      {verificationStatus.message && (
        <div className={`status-message ${verificationStatus.type}`}>
          {verificationStatus.message}
        </div>
      )}
    </PageWithBack>
  );
};

const AuditTrail = ({ onBack }) => {
  // Mock data for audit trail
  const mockAuditData = [
    { id: 1, fileName: 'Contract_2025_Q1.pdf', currentHash: '0xabc123...', uploader: '0xUserA', timestamp: '2025-07-20 10:30:00', status: 'Active' },
    { id: 2, fileName: 'Project_Report_V2.docx', currentHash: '0xdef456...', uploader: '0xUserB', timestamp: '2025-07-22 14:15:00', status: 'Active' },
    { id: 3, fileName: 'Financial_Statement.xlsx', currentHash: '0xghi789...', uploader: '0xUserC', timestamp: '2025-07-23 09:00:00', status: 'Active' },
    { id: 4, fileName: 'Contract_2025_Q1.pdf', currentHash: '0xjkl012...', uploader: '0xUserA', timestamp: '2025-07-24 11:45:00', status: 'Updated', previousHash: '0xabc123...' },
  ];

  const [selectedFileHistory, setSelectedFileHistory] = useState(null);

  const viewFileHistory = (fileName) => {
    // In a real app, you'd fetch history for this filename
    const history = mockAuditData.filter(item => item.fileName === fileName).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setSelectedFileHistory(history);
  };

  return (
    <PageWithBack title="File Audit Trail" onBack={onBack}>
      <p>A transparent and immutable log of all file uploads and changes.</p>

      {selectedFileHistory ? (
        <div>
          <h3>History for: {selectedFileHistory[0]?.fileName}</h3>
          <button className="btn btn-secondary mb-20" onClick={() => setSelectedFileHistory(null)}>Back to All Files</button>
          <table className="audit-table">
            <thead>
              <tr>
                <th>Version Hash</th>
                <th>Uploader</th>
                <th>Timestamp</th>
                <th>Status</th>
                <th>Blockchain Tx</th>
              </tr>
            </thead>
            <tbody>
              {selectedFileHistory.map((record, index) => (
                <tr key={index}>
                  <td>{record.currentHash.substring(0, 10)}...</td>
                  <td>{record.uploader.substring(0, 8)}...</td>
                  <td>{record.timestamp}</td>
                  <td>{record.status}</td>
                  <td><a href={`https://example.com/tx/${record.currentHash}`} target="_blank" rel="noopener noreferrer" className="btn-link">View Tx</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <table className="audit-table">
          <thead>
            <tr>
              <th>Filename</th>
              <th>Current Hash</th>
              <th>Uploader</th>
              <th>Last Updated</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockAuditData.map((record) => (
              <tr key={record.id}>
                <td>{record.fileName}</td>
                <td>{record.currentHash.substring(0, 10)}...</td>
                <td>{record.uploader.substring(0, 8)}...</td>
                <td>{record.timestamp}</td>
                <td>{record.status}</td>
                <td>
                  <button className="btn-link" onClick={() => viewFileHistory(record.fileName)}>View History</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </PageWithBack>
  );
};


// --- Main App Component ---

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState('landing'); // Start at landing page

  const handleLogin = (status) => {
    setIsLoggedIn(status);
    if (status) {
      setCurrentView('dashboard'); // Go to dashboard after successful login
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('landing'); // Go back to landing page on logout
  };

  const handleConnectWallet = () => {
    alert('Connecting to Web3 Wallet (MetaMask, etc.)... (Not implemented)');
    setIsLoggedIn(true); // Simulate successful wallet connection
    setCurrentView('dashboard');
  };

  // Function to navigate to different views
  const navigateTo = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="App">
      {/* Header and Footer are rendered ONCE here, wrapping all content */}
      {/* Header is always visible, but navigation only appears when logged in */}
      <Header
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onNavigateToDashboard={() => navigateTo('dashboard')}
      />
      <main>
        {/* Conditional rendering based on currentView and isLoggedIn */}
        {!isLoggedIn ? (
          // Views before login
          currentView === 'landing' ? (
            <LandingPage onProceedToLogin={() => navigateTo('login')} />
          ) : currentView === 'login' ? (
            <LoginPage onLogin={handleLogin} onConnectWallet={handleConnectWallet} onBackToLanding={() => navigateTo('landing')} />
          ) : currentView === 'about-us' ? (
            <AboutUs onBack={() => navigateTo('landing')} />
          ) : currentView === 'contact-us' ? ( // Added this
            <ContactUs onBack={() => navigateTo('landing')} /> // Added this
          ) : currentView === 'privacy-policy' ? ( // Added this
            <PrivacyPolicy onBack={() => navigateTo('landing')} /> // Added this
          ) : (
            // Default to landing page if an unknown view is somehow set
            <LandingPage onProceedToLogin={() => navigateTo('login')} />
          )
        ) : (
          // Views after login
          currentView === 'dashboard' ? (
            <Dashboard onNavigate={navigateTo} />
          ) : currentView === 'upload' ? (
            <UploadFile onBack={() => navigateTo('dashboard')} />
          ) : currentView === 'verify' ? (
            <VerifyFile onBack={() => navigateTo('dashboard')} />
          ) : currentView === 'audit' ? (
            <AuditTrail onBack={() => navigateTo('dashboard')} />
          ) : currentView === 'about-us' ? (
            <AboutUs onBack={() => navigateTo('dashboard')} />
          ) : currentView === 'contact-us' ? ( // Added this
            <ContactUs onBack={() => navigateTo('dashboard')} /> // Added this
          ) : currentView === 'privacy-policy' ? ( // Added this
            <PrivacyPolicy onBack={() => navigateTo('dashboard')} /> // Added this
          ) : (
            // Default to dashboard if an unknown view is somehow set
            <Dashboard onNavigate={navigateTo} />
          )
        )}
      </main>
      <Footer
        onNavigateToAboutUs={() => navigateTo('about-us')}
        onNavigateToContactUs={() => navigateTo('contact-us')} // Pass new handler
        onNavigateToPrivacyPolicy={() => navigateTo('privacy-policy')} // Pass new handler
      />
    </div>
  );
}

export default App;