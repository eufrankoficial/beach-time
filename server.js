const express = require('express');
const connectToDatabase = require('./src/config/database');
const app = express();

connectToDatabase;

app.use(express.json());
app.use('/api', require('./src/routes'));

app.listen(3001);