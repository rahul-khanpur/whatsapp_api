const fs = require("fs");

// ============= GLOBAL SETTING ============ //
global.port = "5001"; // Port Api / Browser
global.countrycode = "ID"; // Country Code - https://countrycode.org/ (ISO CODES)
global.countrycodephone = "91"; // Country Phone - https://countrycode.org/ (COUNTRY CODE)
global.timezone = "Asia/Kolkata"; // Time Zone
global.usePairingNumber = false; // true = Pairing Code / false = QRCode
global.pairingNumber = ""; // whatsapp number used as a bot, for pairing number
//========================================================

global.pp_bot = fs.readFileSync("./image/logo.png"); // location and name of the logo
global.use_pp = false; // use a logo?

//========================================================

global.kontakadmin = ["91983144799"]; // admin whatsapp number
global.kirimkontak_admin = false; // true = automatically send admin contact

//========================================================

global.sessionName = "session"; // session name
//========================================================
