"use strict";
const MONGOOSE = require("mongoose");
const SCHEMA = MONGOOSE.Schema;


const reviewSchema = new SCHEMA({
    critic: {
        type: String,
        required: [true, "Review must have a Critic"]
    },
    stars: {
        type: Number,
        required: [true, "Review must have a star rating"],
        max: [5, "Max is 5 stars"],
        min: [0, "Min is 0 stars"]
    },
    review: {
        type: String
    }
});

const actorSchema = new SCHEMA({
    name: {
        type: String,
        required: [true, "Actor must have a name"],
        minlength: 2
    }
})

const timeSchema = new SCHEMA({
    time: {
        type: String,
        required: [true]
    },
    screen: {
        type: "String",
        enum: [
            "Screen 1",
            "Screen 2",
            "Screen 3",
            null
        ]
    }
})

const dateSchema = new SCHEMA({
    day: {
        type: String
    },
    times: [timeSchema]
})



const movieSchema = new SCHEMA({
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
    actors: [actorSchema],
    poster: {
        type: String,
        required: [true]
    },
    synopsis: {
        type: String,
        required: [true]
    },
    reviews: [reviewSchema],
    showtimes: [dateSchema]

});

module.exports = MONGOOSE.model("movie", movieSchema);