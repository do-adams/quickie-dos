'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
	text: String
}, {
	timestamps: true
});

const todoSchema = new Schema({
	user: { 
		type: Schema.Types.ObjectId, 
		ref: 'User' 
	},
	title: String,
	priority: {
		type: String,
		enum: ['soon', 'later']
	},
	description: String,
	notes: [noteSchema],
	isCompleted: Boolean,
}, {
	timestamps: true
});

module.exports = mongoose.model('Todo', todoSchema);