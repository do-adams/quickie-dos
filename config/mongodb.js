'use strict';

const mongoose = require('mongoose');

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/quickie_dos';

mongoose.connect(DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', function(err) {
	console.error(err.message);
	process.exit(1);
});

db.once('open', function() {
	console.log('Connected to the MongoDb database');
});