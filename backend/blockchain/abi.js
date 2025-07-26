const ABI = [
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "user", "type": "address" },
      { "indexed": false, "internalType": "string", "name": "fileName", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "fileHash", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "FileUploaded",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "getFiles",
    "outputs": [
      {
        "components": [
          { "internalType": "string", "name": "fileName", "type": "string" },
          { "internalType": "string", "name": "fileHash", "type": "string" },
          { "internalType": "uint256", "name": "timestamp", "type": "uint256" }
        ],
        "internalType": "struct FileRegistry.File[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "string", "name": "_fileName", "type": "string" },
      { "internalType": "string", "name": "_fileHash", "type": "string" }
    ],
    "name": "uploadFile",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

module.exports = ABI;
