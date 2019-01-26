'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

const indexRoutes = require('./routes/index');
app.use(indexRoutes);

app.listen(PORT, () => console.log('Server is running on port: ' + PORT));