# 🔐 Blockchain-based Secure File Upload & Verification System

This project is a decentralized web application that enables secure file uploads by leveraging blockchain technology to ensure data integrity, authenticity, and tamper-proof verification. When a user uploads a file through the system, its SHA-256 hash is computed on the server and stored immutably on the Ethereum blockchain using a custom smart contract written in Solidity.

The backend, developed using Node.js, handles file uploads, hashing, and blockchain communication via Web3.js, while the smart contract ensures that each file hash, along with its metadata (filename, timestamp, and uploader), is permanently recorded. Optionally, a frontend built with basic HTML/CSS/JavaScript provides an interface for users to upload files and view hash confirmation.

This project demonstrates a real-world use case of blockchain in securing digital assets and can be extended to include features like file encryption, wallet authentication via MetaMask, transaction history, and deployment on public Ethereum testnets.

---

## 📂 Features

- ✅ Upload files via frontend
- 🔗 Calculate file hash and store on blockchain
- 🔎 Verify file authenticity and detect tampering
- 📜 Express.js backend with smart contract integration
- 🎨 React.js frontend interface
- 🪙 Ethereum blockchain support using Web3

---

## ⚙️ Tech Stack

| Layer      | Technology             |
|------------|------------------------|
| Frontend   | React.js, Axios        |
| Backend    | Node.js, Express.js    |
| Smart Contract | Solidity (via Remix / Hardhat) |
| Blockchain | Ethereum (Testnet)     |
| Others     | Web3.js, Multer (for file uploads)

---


### 1. Clone the Repository

```bash
git clone https://github.com/your-username/blockchain-file-verification.git
cd blockchain-file-verification
