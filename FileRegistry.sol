// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FileRegistry {
    struct File {
        string fileName;
        string fileHash;
        uint256 timestamp;
    }

    mapping(address => File[]) private files;

    event FileUploaded(address indexed user, string fileName, string fileHash, uint256 timestamp);

    function uploadFile(string memory _fileName, string memory _fileHash) public {
        files[msg.sender].push(File(_fileName, _fileHash, block.timestamp));
        emit FileUploaded(msg.sender, _fileName, _fileHash, block.timestamp);
    }

    function getFiles() public view returns (File[] memory) {
        return files[msg.sender];
    }
}
