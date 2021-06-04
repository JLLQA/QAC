"use strict";
const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;


const reviewSchema = new SCHEMA({
    critic: {
        type: String,
        required: [true, "Review must have a Critic"],
        minlength: 5
    },
    stars: {
        type: Number,
        required: [true, "Review must have a star rating"],
        max: [5, "Max is 5 stars"],
        min: [0, "Min is 0 stars"]
    }
});

const commentSchema = new SCHEMA({
    username: {
        type: String
    },
    body: {
        type: String,
        required: [true, "Need comment to discuss"],
        max: [255, "Character limit reached"]
    }
})
const topicSchema = new SCHEMA({
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
    comments: [commentSchema]
})


const actorSchema = new SCHEMA({
    name: {
        type: String,
        required: [true, "Actor must have a name"],
        minlength: 2
    },
    age: {
        type: Number,
        min: [1, "Age must be above 1"],
    }
});

const movieSchema = new SCHEMA({
    title: {
        type: String,
        required: true,
        minlength: 5
    },
    genre: {
        type: String,
        enum: [
            "Overcoming the monster",
            "Rags to riches",
            "Quest",
            "Voyage and return",
            "Comedy",
            "Tragedy",
            "Rebirth",
            null
        ]
    },
    year: {
        type: Number,
        max: [2021, "Maximum is 2021"],
        min: [2000, "Minimum is 2000"]
    },
    reviews: [{
        critic: {
            type: String,
            required: [true, "Review must have a Critic"],
            minlength: 5
        },
        stars: {
            type: Number,
            required: [true, "Review must have a star rating"],
            max: [5, "Max is 5 stars"],
            min: [0, "Min is 0 stars"]
        }
    }],
    actors: [{
        name: {
            type: String,
            required: [true, "Actor must have a name"],
            minlength: 2
        },
        age: {
            type: Number,
            min: [1, "Age must be above 1"],
        }
    }],
    image: {
        type: String
    }
});

module.exports = MONGOOSE.model("movie", movieSchema);