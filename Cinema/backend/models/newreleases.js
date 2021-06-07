"use strict"
const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const releaseSchema = new SCHEMA({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true,
        minlength: 5
    },
    director: {
        type: String,
        required: true,
        minlength: 5
    },
    genre: {
        type: String,
        required: true
    },
    releasedate: {
        type: String,
        required: true
    },
    mainactors: {
        type: String,
        required: [true, "Actor must have a name"],
        minlength: 2
    },
    actors: {
        type: String,
        required: [true, "Actors must have a name"],
        minlength: 2
    },
    poster: {
        type: String
    },
    story: {
        type: String,
        minlength: 20
    },
    web: {
        type: String
    },
    budget: {
        type: Number
    }
});

module.exports = MONGOOSE.model("newrelease", releaseSchema);