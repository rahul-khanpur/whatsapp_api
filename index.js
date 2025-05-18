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

// The URL you want to call
const url_test_msg = 'https://whatsapp-api-nz96.onrender.com/send-message?message=Server_Ok&number=6297890236';

// Function to make the HTTP request
const sendTestMsg = async () => {
  try {
    const response = await axios.get(url_test_msg);
    console.log(`Successfully called the URL: ${response.status}`);
  } catch (error) {
    console.error('Error calling the URL:', error.message);
  }
};

callUrl();
sendTestMsg();

setInterval(callUrl, 600000);
setInterval(sendTestMsg, 3600000);
