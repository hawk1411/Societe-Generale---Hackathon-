// // blockchain/interact.js
// const { ethers } = require('ethers');
// require('dotenv').config();
// const fs = require('fs');

// // 1. Load environment variables
// const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_RPC_URL);
// const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
// const contractAddress = process.env.CONTRACT_ADDRESS;

// // 2. Load ABI (we'll generate this in Phase 4 after compiling the contract)
// const abi = JSON.parse(fs.readFileSync('./blockchain/abi.json', 'utf-8'));

// // 3. Create contract instance
// const contract = new ethers.Contract(contractAddress, abi, wallet);

// // 4. Export functions
// module.exports = {
//   async storeFileHash(hash, metadata) {
//     const tx = await contract.storeFileHash(hash, metadata);
//     await tx.wait();
//     return tx.hash;
//   },

//   async getFileRecord(index) {
//     return await contract.getFileRecord(index);
//   }
// };
// blockchain/interact.js
// const { ethers } = require('ethers');
// require('dotenv').config();
// const fs = require('fs');

// // 1. Load environment variables
// const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_RPC_URL);
// const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
// const contractAddress = process.env.CONTRACT_ADDRESS;

// // 2. Load ABI from file
// const abi = JSON.parse(fs.readFileSync('./blockchain/abi.json', 'utf-8'));

// // 3. Create contract instance
// const contract = new ethers.Contract(contractAddress, abi, wallet);

// // 4. Export blockchain interaction functions
// module.exports = {
//   // Call smart contract function: uploadFile(string fileName, string fileHash)
//   async storeFileHash(fileHash, fileName) {
//     const tx = await contract.uploadFile(fileName, fileHash);
//     await tx.wait(); // Wait for transaction to be mined
//     return tx.hash;
//   },

//   // Get all files uploaded by the current wallet
//   async getFileRecord() {
//     return await contract.getFiles();
//   }
// };
// const { ethers } = require('ethers');
// require('dotenv').config();
// const fs = require('fs');
// const path = require('path');

// // --- Load Environment Variables ---
// const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_RPC_URL);
// const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
// const contractAddress = process.env.CONTRACT_ADDRESS;

// // --- Load ABI from local file ---
// const abiPath = path.join(__dirname, '../blockchain/abi.json');
// const abi = JSON.parse(fs.readFileSync(abiPath, 'utf8'));

// // --- Create Contract Instance ---
// const contract = new ethers.Contract(contractAddress, abi, wallet);

// // --- Exported Functions ---
// module.exports = {
//   // Upload file to blockchain
//   async storeFileHash(fileHash, fileName) {
//     try {
//       const tx = await contract.uploadFile(fileName, fileHash);
//       await tx.wait();
//       console.log('✅ File uploaded to blockchain:', tx.hash);
//       return tx.hash;
//     } catch (error) {
//       console.error('❌ Error uploading file:', error.message);
//       throw error;
//     }
//   },

//   // Get uploaded file records for current wallet
//   async getFileRecord() {
//     try {
//       const files = await contract.getFiles();
//       console.log('📄 Retrieved file records:', files);
//       return files;
//     } catch (error) {
//       console.error('❌ Error fetching files:', error.message);
//       throw error;
//     }
//   }
// };
// const abi= require('./abi'); // assuming abi.js is in same foldernode
// require('dotenv').config();
// const fs = require('fs');
// const path = require('path');
// const { JsonRpcProvider, Wallet, Contract } = require('ethers');

// // --- Load Environment Variables ---
// console.log(process.env.INFURA_RPC_URL);
// const provider = new JsonRpcProvider(process.env.INFURA_RPC_URL);
// const wallet = new Wallet(process.env.PRIVATE_KEY, provider);
// const contractAddress = process.env.CONTRACT_ADDRESS;

// // --- Load ABI from local file ---
// // const abiPath = path.join(__dirname, '../blockchain/abi.json');
// // const abi = JSON.parse(fs.readFileSync(abiPath, 'utf8'));

// // --- Create Contract Instance ---
// const contract = new Contract(contractAddress, abi, wallet);

// // --- Exported Functions ---
// module.exports = {
//   async storeFileHash(fileHash, fileName) {
//     try {
//       const tx = await contract.uploadFile(fileName, fileHash);
//       await tx.wait();
//       console.log('✅ File uploaded to blockchain:', tx.hash);
//       return tx.hash;
//     } catch (error) {
//       console.error('❌ Error uploading file:', error.message);
//       throw error;
//     }
//   },

//   async getFileRecord() {
//     try {
//       const files = await contract.getFiles();
//       console.log('📄 Retrieved file records:', files);
//       return files;
//     } catch (error) {
//       console.error('❌ Error fetching files:', error.message);
//       throw error;
//     }
//   }
// };
const abi = require('./abi'); // assuming abi.js is in the same folder
require('dotenv').config();
const { JsonRpcProvider, Wallet, Contract } = require('ethers');

// --- Load Environment Variables ---
const provider = new JsonRpcProvider(process.env.INFURA_RPC_URL);
const wallet = new Wallet(process.env.PRIVATE_KEY, provider);
const contractAddress = process.env.CONTRACT_ADDRESS;

// --- Create Contract Instance ---
const contract = new Contract(contractAddress, abi, wallet);

// --- Exported Functions ---
module.exports = {
  // Function to store file hash on blockchain
  async storeFileHash(fileHash, fileName) {
    try {
      const tx = await contract.uploadFile(fileName, fileHash);
      await tx.wait();
      console.log('✅ File uploaded to blockchain:', tx.hash);
      return tx.hash;
    } catch (error) {
      console.error('❌ Error uploading file:', error.message);
      throw error;
    }
  },

  // Function to retrieve stored file records
  async getFileRecord() {
    try {
      const records = await contract.getFiles(); // Assuming your contract has a getAllFiles() function
      return records.map(record => ({
        fileName: record.fileName,
        fileHash: record.fileHash,
        timestamp: Number(record.timestamp)
      }));
    } catch (error) {
      console.error('❌ Error fetching file records:', error.message);
      throw error;
    }
  }
};
