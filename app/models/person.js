'use strict'
// requiring the mongoose library
const mongoose = require('mongoose')

// Create schema contstructor
const Schema = mongoose.Schema

const personSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		dob: {
			type: Date,
			required: true,
		},
		height: {
			type: Number,
			required: true,
			min: 0,
		},
		weight: {
			type: Number,
			required: true,
			min: 0,
		},
	},
	{
		timestamps: true,
		toObject: { virtuals: true },
		toJSON: { virtuals: true },
	}
)
// vituals allow us to create an additional property
// on our documents, by reading the existing info
// this one adds a 'fullName' property, which is a combo of
// first and last name
personSchema.virtual('fullName').get(function () {
	return this.firstName + ' ' + this.lastName
})

const Person = mongoose.model('Person', personSchema)

module.exports = Person