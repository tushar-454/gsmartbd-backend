const mongoose = require('mongoose');

let connectionURI = process.env.DB_CONNECTION_URI;
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;
connectionURI = connectionURI.replace('<username>', db_username);
connectionURI = connectionURI.replace('<db_password>', db_password);

const connectDB = async () => {
  await mongoose.connect(connectionURI);
  console.log('Pinged your deployment. You successfully connected to MongoDB!');
};

module.exports = connectDB;
