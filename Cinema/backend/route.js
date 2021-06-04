const ROUTER = require("express").Router();
const MOVIE = require("./models/movie")


// get all
ROUTER.get("/movies", async (req, res) => {
    const MOV = await MOVIE.find((err,mov) =>{
        if(err) {
            console.error("Error occured: ",err);
            res.send(err.stack);
        } else {
            console.log("Movies")
            res.send(mov);
        }
    });
});


// get one
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
)});


// edit
ROUTER.patch("/movies/topics/:id/:username/:body", async (req, res, next) => {
    console.log(parseInt(req.params.id))
    const MOV = await MOVIE.findOne({ id: parseInt(req.params.id) },
        (err, mov) => {
            if (err) {
                console.log("ERROR", err);
                res.status(404).send(err.stack);
            } else {
                try{
                    let reviews = mov.reviews;
                    let review = {critic:req.params.username,stars:2};
                    reviews.push(review);
                    mov.save();
                    res.status(202).send(`${mov} has been updated`);
                } catch(error){
                    const myNotFoundError = new Error(`No ${req.params.id} found in the database`);
                    next(myNotFoundError);
                }
            }
        }
        )});




module.exports = ROUTER;