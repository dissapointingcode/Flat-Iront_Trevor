const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const userdata = require('.../models/user')
const user = require('.../controllers/usercontroller')
const userroute = require('.../router/routes')

const app = express();

const server = http.createServer(app)
const port = 5000

console.log('Connecting to Local Database.');
mongoose.connect('mongodb://localhost/newDB', { useNewUrlParser: true })

server.listen(port)
console.log(`NodeJS Server running on port ${port}.`);