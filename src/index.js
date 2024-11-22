require('dotenv').config();
const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

const main = async () => {
  try {
    await connectDB();
    server.listen(PORT, () => {
      console.log(`Server is running on  http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log('Database Error', error);
  }
};

main();
