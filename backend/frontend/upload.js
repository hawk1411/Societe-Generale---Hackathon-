// upload.js
document.getElementById('uploadForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  const responseDiv = document.getElementById('response');
  const errorDiv = document.getElementById('error');
  
  responseDiv.innerText = '';
  errorDiv.innerText = '';

  if (!file) {
    errorDiv.innerText = '⚠️ Please select a file.';
    return;
  }

  const formData = new FormData();
  formData.append('file', file);

  try {
    const res = await fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData
    });

    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }

    const result = await res.json();

    // Show result
    responseDiv.innerHTML = `
      ✅ <strong>File Hash:</strong> ${result.fileHash}<br>
      🔗 <strong>Transaction Hash:</strong> <a href="https://sepolia.etherscan.io/tx/${result.transactionHash}" target="_blank" class="underline text-blue-400">${result.transactionHash}</a>
    `;
  } catch (err) {
    errorDiv.innerText = `❌ Error: ${err.message}`;
  }
});
