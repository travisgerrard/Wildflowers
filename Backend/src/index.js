require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
// const db = require('./db');

// const express = require('express');
// const router = express.Router();

const server = createServer();

// start it
server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is now running on port http://localhost${deets.port}`);
  }
);
