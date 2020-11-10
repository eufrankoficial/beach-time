const express = require('express');
const requireDir = require('require-dir');

const connectToDatabase = require('./src/config/database');

const app = express();

connectToDatabase;
requireDir('./src/app/models');

app.use(express.json());
app.use('/api', require('./src/routes'));

app.listen(3001);