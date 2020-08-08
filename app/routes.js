require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

mongoose.Promise = global.Promise; 
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

app.get('/api/event', require('../controllers/eventHandler').getEvents);
app.post('/api/event', require('../controllers/eventHandler').createEvent);
// app.put('/api/product/:id', require('../controllers/eventHandler').updateProduct);
// app.delete('/api/product/:id', require('../controllers/eventHandler').deleteProduct);

app.use(express.static('client/build'));
app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))

module.exports = app;