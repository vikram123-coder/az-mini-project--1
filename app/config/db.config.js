const envPath = __dirname + '/../../.env';

//check if env file exist
const fs = require('fs');
if (!fs.existsSync(envPath)) {
  throw ("Env file not found. Plesae rename .env.example to .env.");
}
// load env config file
const dotenv = require('dotenv').config({path: envPath});

module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_DATABASE_NAME
};

// module.exports = {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "123456",
//   DB: "testdb"
// };
