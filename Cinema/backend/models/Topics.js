"use strict";
const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;

const COMMENT = new SCHEMA({
    username: {
        type: String
    },
    body: {
        type: String,
        required: [true, "Need comment to discuss"],
        max: [255, "Character limit reached"]
    }
})

const TOPICSCHEMA = new SCHEMA({
    username: {
        type: String
    },
    body: {
        type: String,
        required: [true, "Need comment to discuss"],
        max: [255, "Character limit reached"]
    },
    title: {
        type: String,
        required: [true, "Topic needs a title"],
        max: [255, "Character limit reached"]
    },
    comments: [COMMENT]
})


module.exports = MONGOOSE.model("topic", TOPICSCHEMA);