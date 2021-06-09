const ROUTERTOPIC = require("express").Router();
const TOPIC = require("./models/Topics");
const MOVIE = require("./models/movie");

// get all topics
ROUTERTOPIC.get("/topics", async (req, res) => {
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
ROUTERTOPIC.get("/topics/:title", async (req, res) => {
    const TOP = await TOPIC.findOne({ title: req.params.title }, (err, top) => {
        if (err) {
            console.error("Error occured: ", err);
            res.status(404).send(err.stack);
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

//create comment
ROUTERTOPIC.patch("/movies/topics/comment/:title", async (req, res, next) => {
    const TOP = await TOPIC.findOneAndUpdate({ title: req.params.title },
        { $push: { comments: { username: req.body.username, body: req.body.body } } },
        (err, top) => {
            if (err) {
                console.log("ERROR ", err);
                res.status(404).send(err.stack);
            } else {
                try {
                    console.log("nice");
                    res.status(202).send(`${top} has been updated`);
                } catch (error) {
                    const myNotFoundError = new Error(`No ${req.params.title} found in the database`);
                    next(myNotFoundError);
                }
            }
        }
    )
})

//create topic
ROUTERTOPIC.post("/movies/topics/create", async (req, res) => {
    const TOP = new TOPIC({
        username: req.body.username,
        body: req.body.body,
        title: req.body.title,
        comments: []
    });
    await TOP.save();
    console.log("done");
    res.send(TOP);
});

//fail update (try using a random title)

module.exports = ROUTERTOPIC;