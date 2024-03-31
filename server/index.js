// eslint-disable-next-line no-unused-vars
const dotenv=require('dotenv')
dotenv.config();
const mongoose = require('./config/mongoose.connect.js')

const cors = require('cors');
const bodyParser = require('body-parser')
const express=require('express')
const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use("/", require('./routes'));
server.listen("8000", () => {
  console.log(`server is running up on port 8000`);
});
