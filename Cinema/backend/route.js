const ROUTER = require("express").Router();
const MOVIE = require("./models/movie");
const TOPIC = require("./models/Topics");


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

// get all topics
ROUTER.get("/topics", async (req, res) => {
    const TOP = await TOPIC.find((err, top) => {
        if (err) {
            console.error("Error occured: ", err);
            res.send(err.stack);
        } else {
            console.log("Topics");
            res.send(top)
        }
    })
})

// get one topic by title
ROUTER.get("/topics/:title", async (req, res) => {
    const TOP = await TOPIC.findOne({ title: req.params.title }, (err, top) => {
        if (err) {
            console.error("Error occured: ", err);
            res.send(err.stack);
        } else {
            try {
                res.send(top);
                console.log("topic found")
            } catch (e) {
                const myNotFoundError = new Error(`No topic with the title "${req.params.title}" found in the database`)
                next(myNotFoundError);
            };
        };
    })
});


// get one movie by id
ROUTER.get("/movies/find/:id", async (req, res, next) => {
    const ID = req.params.id;
    const MOV = await MOVIE.findOne({ id: parseInt(req.params.id) },
        (err, mov) => {
            if (err) {
                console.error("Error occured: ", err);
                res.send(err.stack);
            } else {
                try {
                    res.send(mov);
                    console.log("Movie found");
                } catch (e) {
                    const myNotFoundError = new Error(`No movie with the id "${ID}" found in the database`)
                    next(myNotFoundError);
                };
            };

        }
    )
});




// edit movie (add comment)
ROUTER.patch("/movies/review/:id", async (req, res, next) => {
    const MOV = await MOVIE.findOneAndUpdate({ id: parseInt(req.params.id) },
        { $push: { reviews: { critic: req.body.critic, stars: parseInt(req.body.stars), review: req.body.review} } },
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

//create topic
ROUTER.post("/movies/topics/create", async (req, res) => {
    const TOP = new TOPIC({
        username: req.body.username,
        body: req.body.body,
        title: req.body.title,
        comments: []
    });
    await TOP.save();
    console.log("done");
    res.send(TOP);
})


module.exports = ROUTER;