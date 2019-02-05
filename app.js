'use strict';

require('dotenv').config();

const PORT = process.env.PORT || 3000;

require('./config/mongodb/mongoose');

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

app.set('view engine', 'pug');
app.use(cookieParser());
app.use(express.urlencoded());

app.use(express.static('public'));

const indexRoutes = require('./routes/index');
app.use(indexRoutes);

app.listen(PORT, () => console.log('Server is running on port: ' + PORT));