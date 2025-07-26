// // controllers/fileController.js
// const fs = require('fs');
// const path = require('path');
// const crypto = require('crypto');

// // Mock original hash (in real app, you should store this in DB)
// const originalHash = "your_previously_generated_hash_here"; // replace with real one or read from DB

// // Hashing function
// function calculateFileHash(filePath) {
//   return new Promise((resolve, reject) => {
//     const hash = crypto.createHash('sha256');
//     const stream = fs.createReadStream(filePath);

//     stream.on('data', chunk => hash.update(chunk));
//     stream.on('end', () => resolve(hash.digest('hex')));
//     stream.on('error', reject);
//   });
// }

// // File verification function
// const verifyFile = async (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: "No file uploaded" });
//   }

//   try {
//     const uploadedFilePath = path.join(__dirname, '..', req.file.path);
//     const uploadedHash = await calculateFileHash(uploadedFilePath);

//     if (uploadedHash === originalHash) {
//       res.json({
//         message: "File hash is valid",
//         originalHash: originalHash,
//         uploadedFileHash: uploadedHash
//       });
//     } else {
//       res.status(400).json({
//         message: "File hash mismatch",
//         originalHash: originalHash,
//         uploadedFileHash: uploadedHash
//       });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Error verifying file", error: error.message });
//   }
// };

// module.exports = {
//   uploadFile: (req, res) => {
//     res.json({ message: 'File uploaded successfully', file: req.file });
//   },
//   verifyFile
// };


// // // controllers/fileController.js
// // // const fs = require('fs');
// // // const crypto = require('crypto');
// // // const path = require('path');

// // // exports.uploadFile = async (req, res) => {
// // //   try {
// // //     if (!req.file) {
// // //       return res.status(400).json({ error: 'No file uploaded' });
// // //     }

// // //     // 1. Read the uploaded file
// // //     const fileBuffer = fs.readFileSync(req.file.path);

// // //     // 2. Generate SHA-256 hash
// // //     const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');

// // //     // 3. Return the hash in response (will be stored on blockchain later)
// // //     return res.status(200).json({
// // //       message: 'File uploaded and hashed successfully',
// // //       filename: req.file.filename,
// // //       sha256Hash: hash
// // //     });

// // //   } catch (error) {
// // //     console.error('Upload Error:', error);
// // //     return res.status(500).json({ error: 'Server error during upload' });
// // //   }
// // // };
// // // controllers/fileController.js



// // // We'll add verifyFile in the next step
// // // exports.verifyFile = async (req, res) => {
// // //   try {
// // //     if (!req.file) {
// // //       return res.status(400).json({ error: 'No file uploaded for verification' });
// // //     }

// // //     // 1. Read uploaded file
// // //     const fileBuffer = fs.readFileSync(req.file.path);

// // //     // 2. Generate hash
// // //     const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');

// // //     // 3. Return hash (comparison with blockchain will happen later)
// // //     return res.status(200).json({
// // //       message: 'File hash generated for verification',
// // //       sha256Hash: hash
// // //     });

// // //   } catch (error) {
// // //     console.error('Verify Error:', error);
// // //     return res.status(500).json({ error: 'Server error during verification' });
// // //   }
// // // };
// // // controllers/fileController.js
// // // const { getFileRecord } = require('../blockchain/interact'); // <-- Import

// // // exports.verifyFile = async (req, res) => {
// // //   try {
// // //     if (!req.file) {
// // //       return res.status(400).json({ error: 'No file uploaded for verification' });
// // //     }

// // //     // 1. Read uploaded file
// // //     const fileBuffer = fs.readFileSync(req.file.path);

// // //     // 2. Generate SHA-256 hash
// // //     const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');

// // //     // 3. Fetch all stored file records from blockchain
// // //     const fileRecords = await getFileRecord();

// // //     // 4. Search for a matching hash
// // //     const match = fileRecords.find(file => file.fileHash === hash);

// // //     // 5. Return result
// // //     if (match) {
// // //       return res.status(200).json({
// // //         verified: true,
// // //         message: '✅ File hash matches a record on the blockchain.',
// // //         fileName: match.fileName,
// // //         timestamp: match.timestamp,
// // //         sha256Hash: hash
// // //       });
// // //     } else {
// // //       return res.status(404).json({
// // //         verified: false,
// // //         message: '❌ File hash not found on the blockchain.',
// // //         sha256Hash: hash
// // //       });
// // //     }

// // //   } catch (error) {
// // //     console.error('Verify Error:', error);
// // //     return res.status(500).json({ error: 'Server error during verification' });
// // //   }
// // // };


// // // exports.uploadFile = async (req, res) => {
// // //   try {
// // //     if (!req.file) {
// // //       return res.status(400).json({ error: 'No file uploaded' });
// // //     }

// // //     // 1. Read the uploaded file
// // //     const fileBuffer = fs.readFileSync(req.file.path);

// // //     // 2. Generate SHA-256 hash
// // //     const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');

// // //     // 3. Send the hash + filename to smart contract
// // //     const txHash = await storeFileHash(hash, req.file.originalname);  // <-- Blockchain call

// // //     // 4. Respond to client
// // //     return res.status(200).json({
// // //       message: 'File uploaded, hashed, and stored on blockchain successfully',
// // //       filename: req.file.originalname,
// // //       sha256Hash: hash,
// // //       blockchainTx: txHash
// // //     });

// // //   } catch (error) {
// // //     console.error('Upload Error:', error);
// // //     return res.status(500).json({ error: 'Server error during upload' });
// // //   }
// // // };

// // // const path = require('path');
// // // const fs = require('fs');
// // // const blockchain = require('../blockchain/installed'); // path to your blockchain interaction file

// // // // Upload file to server and store its hash on blockchain
// // // exports.uploadFile = async (req, res) => {
// // //   try {
// // //     const file = req.file;

// // //     if (!file) {
// // //       return res.status(400).json({ error: 'No file uploaded' });
// // //     }

// // //     // Simulate file hash (in production use SHA-256 or IPFS hash)
// // //     const fileHash = Date.now().toString(); // TEMP: Replace with actual hash logic if needed
// // //     const fileName = file.originalname;

// // //     // Interact with blockchain
// // //     const txHash = await blockchain.storeFileHash(fileHash, fileName);

// // //     res.status(200).json({
// // //       message: 'File uploaded and hash stored on blockchain',
// // //       txHash,
// // //     });
// // //   } catch (err) {
// // //     console.error('Upload error:', err);
// // //     res.status(500).json({ error: 'File upload failed' });
// // //   }
// // // };

// // // // Retrieve file records from the smart contract
// // // exports.getFiles = async (req, res) => {
// // //   try {
// // //     const files = await blockchain.getFileRecord();
// // //     res.status(200).json({ files });
// // //   } catch (err) {
// // //     console.error('Retrieval error:', err);
// // //     res.status(500).json({ error: 'Failed to retrieve file records' });
// // //   }
// // // };
// // // const fs = require('fs');//new block
// // // const crypto = require('crypto');
// // // const path = require('path');
// // // const { storeFileHash } = require('../blockchain/interact'); // <-- Import
// // // exports.uploadFile = async (req, res) => {
// // //   try {
// // //     if (!req.file) {
// // //       return res.status(400).json({ error: 'No file uploaded' });
// // //     }

// // //     const fileBuffer = fs.readFileSync(req.file.path);
// // //     const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');

// // //     const txHash = await storeFileHash(hash, req.file.originalname);

// // //     return res.status(200).json({
// // //       message: 'File uploaded, hashed, and stored on blockchain successfully',
// // //       filename: req.file.originalname,
// // //       sha256Hash: hash,
// // //       blockchainTx: txHash
// // //     });

// // //   } catch (error) {
// // //     console.error('Upload Error:', error);
// // //     return res.status(500).json({ error: 'Server error during upload' });
// // //   }
// // // };


// // const crypto = require('crypto');
// // const fs = require('fs');
// // const path = require('path');

// // // Path to store uploaded files
// // const uploadDir = path.join(__dirname, '..', 'uploads');

// // exports.verifyFile = async (req, res) => {
// //   try {
// //     const { hash } = req.body;
// //     if (!hash) {
// //       return res.status(400).json({ message: 'Hash is required' });
// //     }

// //     // Check all uploaded files
// //     const files = fs.readdirSync(uploadDir);
// //     for (const file of files) {
// //       const filePath = path.join(uploadDir, file);
// //       const fileBuffer = fs.readFileSync(filePath);
// //       const fileHash = crypto.createHash('sha256').update(fileBuffer).digest('hex');

// //       if (fileHash === hash) {
// //         return res.status(200).json({ verified: true, filename: file });
// //       }
// //     }

// //     return res.status(404).json({ verified: false, message: 'File not found with given hash' });

// //   } catch (error) {
// //     console.error('Verification Error:', error);
// //     return res.status(500).json({ message: 'Internal Server Error' });
// //   }
// // };
// controllers/fileController.js
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { storeFileHash, getFileRecord } = require('../blockchain/interact'); // Blockchain interaction

// Utility: Calculate SHA-256 hash of a file
function calculateFileHash(filePath) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);

    stream.on('data', chunk => hash.update(chunk));
    stream.on('end', () => resolve(hash.digest('hex')));
    stream.on('error', reject);
  });
}

// Upload and store file hash
const uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    const uploadedFilePath = path.join(__dirname, '..', req.file.path);
    const fileHash = await calculateFileHash(uploadedFilePath);
    const fileName = req.file.originalname;

    // Upload hash to blockchain
    const txHash = await storeFileHash(fileHash, fileName);

    res.json({
      message: `✅ File uploaded to blockchain: ${txHash}`,
      fileName,
      fileHash,
      transactionHash: txHash
    });
  } catch (error) {
    res.status(500).json({
      message: "Error uploading file",
      error: error.message
    });
  }
};

// Verify file hash
const verifyFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    const uploadedFilePath = path.join(__dirname, '..', req.file.path);
    const uploadedHash = await calculateFileHash(uploadedFilePath);

    // Fetch records from smart contract
    const records = await getFileRecord(); // Must return array of { fileHash, fileName, timestamp }

    // Match hash with records
    const match = records.find(record => record.fileHash === uploadedHash);

    if (match) {
      return res.json({
        message: "✅ File hash exists on blockchain",
        filename: match.fileName,
        uploadedHash,
        timestamp: match.timestamp
      });
    } else {
      return res.status(404).json({
        message: "❌ File hash not found on blockchain",
        uploadedHash
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error verifying file",
      error: error.message
    });
  }
};

// Handle file upload and forward to verification
// const uploadFile = async (req, res) => {
//   // You may add blockchain storage logic here or just confirm upload
//   res.json({
//     message: "📁 File uploaded successfully",
//     file: req.file
//   });
// };
module.exports = {
  verifyFile,
  uploadFile
};