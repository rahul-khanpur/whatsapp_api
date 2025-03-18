const { spawn } = require("child_process");
const path = require("path");
const axios = require('axios');

function start() {
  let args = [path.join(__dirname, "rtaserver.js"), ...process.argv.slice(2)];
  console.log([process.argv[0], ...args].join("\n"));
  let p = spawn(process.argv[0], args, {
    stdio: ["inherit", "inherit", "inherit", "ipc"],
  })
    .on("message", (data) => {
      if (data == "reset") {
        console.log("Restarting Bot...");
        p.kill();
        start();
        delete p;
      }
    })
    .on("exit", (code) => {
      console.error("Exited with code:", code);
      if (code == "." || code == 1 || code == 0) start();
    });
}
start();

// The URL you want to call
const url = 'https://whatsapp-api-nz96.onrender.com/';

// Function to make the HTTP request
const callUrl = async () => {
  try {
    const response = await axios.get(url);
    console.log(`Successfully called the URL: ${response.status}`);
  } catch (error) {
    console.error('Error calling the URL:', error.message);
  }
};

// Call the URL immediately and then every 10 minutes (600,000 ms = 10 minutes)
callUrl();
setInterval(callUrl, 600000); // 600,000 ms = 10 minutes
