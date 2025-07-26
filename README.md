# 🔐 Blockchain-based Secure File Upload & Verification System

This project is a decentralized web application that enables secure file uploads by leveraging blockchain technology to ensure data integrity, authenticity, and tamper-proof verification. When a user uploads a file through the system, its SHA-256 hash is computed on the server and stored immutably on the Ethereum blockchain using a custom smart contract written in Solidity.

The backend, developed using Node.js, handles file uploads, hashing, and blockchain communication via Web3.js, while the smart contract ensures that each file hash, along with its metadata (filename, timestamp, and uploader), is permanently recorded. A frontend built with React.js provides an interface for users to upload files and view hash confirmation.

This project demonstrates a real-world use case of blockchain in securing digital assets and can be extended to include features like file encryption, wallet authentication via MetaMask, transaction history, and deployment on public Ethereum testnets.

This project was conceived and developed by **Team Vulnhunt** during a hackathon, driven by the shared goal to **eliminate file tampering and ensure digital trust through decentralized verification.**

**Current Development Status:** The Frontend UI is active and fully navigable. Core backend logic for user login and blockchain interactions (including audit trail processing) is currently **under development**.


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
| Frontend   | React.js, React Router DOM, Pure CSS (with CSS Variables)        |
| Backend    | Node.js, Express.js    |
| Smart Contract | Solidity (via Remix / Hardhat) |
| Blockchain | Ethereum (Testnet)     |
| Others     | Web3.js, Multer (for file uploads)

---

## 🚀 Getting Started

Follow these instructions to set up and run the project components locally.

#### Prerequisites

Ensure you have the following installed on your system:
* **Node.js (LTS Version):** [Download and Install](https://nodejs.org/en/) (includes npm).
* **npm:** Node Package Manager (comes bundled with Node.js).
* **Git:** For cloning the repository.
* **MetaMask (Optional but Recommended):** For interacting with Ethereum dApps in your browser during development.

#### 1. Frontend Setup

1.  **Clone the repository:**
    ```bash
    git clone [(https://github.com/hawk1411/secure-blockhain-based-file-upload-verification-system)]
    ```
2.  **Navigate to the frontend project directory:**
    ```bash
    cd blockchain-file-system-ui/frontend/blockchain-file-system-ui
    ```
3.  **Install Frontend dependencies:**
    ```bash
    npm install
    ```
4.  **Start the Frontend development server:**
    ```bash
    npm start
    ```
    This will open the application in your default web browser at `http://localhost:3000`.

   #### 2. Backend Setup
The backend is built using Node.js with Express.js and acts as the bridge between the frontend application and the deployed smart contract on the Ethereum blockchain.


🔧 Steps to Set Up the Backend:


1.  **Navigate to the backend directory:**

```bash

cd blockchain-file-system-ui/backend
```
2.  **Install dependencies:**

- Ensure that you have express, web3, multer, fs, and crypto installed. If not, install them using:

bash
```
npm install express web3 multer fs crypto
```
- Ensure the following project structure inside the backend folder:

   - server.js – Main Express server script
  
   - uploads/ – Directory where uploaded files are stored temporarily
  
   - contractABI.json – ABI of your deployed smart contract
  
   - contractConfig.js – Contains your deployed contract address and network setup

3.  **Start the backend server:**

bash
```
node server.js
```
The server should now be running at:

http://localhost:3000

#### How it works:

- The backend uses multer to handle file uploads.

- It computes the SHA-256 hash of the uploaded file.

- It connects to the Ethereum blockchain via web3.js using the Remix VM or MetaMask provider.

- It interacts with the deployed smart contract to store and verify the file hash on-chain.

---

### 📖 Usage

Once the frontend application is running, you can:

* **Explore the Landing Page:** Understand the project's core purpose and features.
* **Navigate to Login:** Access the authentication page. (Currently uses **mock login: `username: user`, `password: password`** for testing the UI flow, as backend login logic is under development).
* **Browse Information Pages:** Visit "About Us," "Contact Us," and "Privacy Policy" via the header or footer links.
* **Interact with Core Functionalities (UI Mockups):** The UI for the Dashboard, File Upload, File Verification, and Audit Trail is present and ready for integration with the backend and blockchain logic (which is under development).

---

### 👨‍💻 Built By Team Vulnhunt

This project was conceived and developed during a hackathon by **Team Vulnhunt**:

* **Kanak Soni** – UI/UX Designer
* **Sakshi Chandravanshi** – Frontend Developer
* **Ravi Kant Mishra** – Backend & Blockchain Integration
* **Arya Kulkarni** – Smart Contract Developer

---

### 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
