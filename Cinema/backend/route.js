const ROUTER = require("express").Router();
const MOVIE = require("./models/movie");



// get all
ROUTER.get("/movies", async (req, res) => {
    const MOV = await MOVIE.find((err, mov) => {
        if (err) {
            console.error("Error occured: ", err);
            res.send(err.stack);
        } else {
            console.log("Movies")
            res.send(mov);
        }
    });
});


// get one movie by id
ROUTER.get("/movies/find/:id", (req, res, next) => {
    MOVIE.findOne({ id: parseInt(req.params.id) },
        (err, mov) => {
            if (err) {
                console.error("Error occured: ", err);
                res.send(err.stack);
            } else {
                try {
                    res.send(mov);
                    console.log("Movie found");
                } catch (e) {
                    const myNotFoundError = new Error(`No movie with the id "${req.params.id}" found in the database`)
                    next(myNotFoundError);
                };
            };

        }
    )
});

ROUTER.patch("/movies/review/:id", async (req, res, next) => {
    const MOV = await MOVIE.findOneAndUpdate({ id: parseInt(req.params.id) },
        { $push: { reviews: { critic: req.body.critic, stars: parseInt(req.body.stars), review: req.body.review } } },
        (err, mov) => {
            if (err) {
                console.log("ERROR ", err);
                res.status(404).send(err.stack);
            } else {
                try {
                    console.log("update success");
                    res.status(202).send(`${mov} has been updated`);
                } catch (error) {
                    const myNotFoundError = new Error(`No ${req.params.id} found in the database`);
                    next(myNotFoundError);
                }
            }
        }
    )
})

ROUTER.post("/movies/create", (req, res) => {
    const MOV = new MOVIE({
        id: req.body.id,
        title: req.body.title,
        director: req.body.director,
        genre: req.body.genre,
        year: req.body.year,
        actors: req.body.actors,
        poster: req.body.poster,
        reviews: req.body.reviews,
        showtimes: req.body.showtimes,
        synopsis: req.body.synopsis
    });
    MOV.save();
    res.send(MOV);
    console.log(`${req.body.title} created`)
})


module.exports = ROUTER;