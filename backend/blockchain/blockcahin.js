const Web3 = require("web3");
const ABI = require("./abi"); // Make sure this path is correct
const CONTRACT_ADDRESS = "0x16D58679515B22dEC871327C97F5E27BeAf4C1f7";
const INFURA_URL = "https://sepolia.infura.io/v3/a9ebde99ae7044488fac00ab44eccb01";

// Create a web3 instance
const web3 = new Web3(new Web3.providers.HttpProvider(INFURA_URL));

// Create contract instance
const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

module.exports = contract;
