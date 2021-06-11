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
    console.log(`${req.body.title} created`);
})

ROUTER.post("/setup/initialreleases1", async (req, res) => {
    const DS = new MOVIE({
        id: 0,
        title: "Demon Slayer",
        director: "Gotouge",
        genre: "Quest",
        year: 2021,
        actors: [{ name: "Tanjiro" }, { name: "Inosuke" }, { name: "Zenitsu" }],
        poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQbYpI4mYx8iImEc1TVNqY5iJFREmo7-sGK7PdtBztb2qtS0Pzb",
        reviews: [],
        showtimes:
            [
                {
                    day: "Sunday", times: [
                        { time: "11:30",  screen: "Screen 1" },
                        { time: "13:00", screen: "Screen 3" },
                        { time: "15:40", screen: "Screen 3" },
                        { time: "16:30", screen: "Screen 1" },
                        { time: "18:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Monday", times: [
                        { time: "10:00", screen: "Screen 1" },
                        { time: "12:00", screen: "Screen 1" },
                        { time: "14:00", screen: "Screen 3" },
                        { time: "16:00", screen: "Screen 1" },
                        { time: "18:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Tuesday", times: [
                        { time: "10:00", screen: "Screen 1" },
                        { time: "12:00", screen: "Screen 1" },
                        { time: "14:00", screen: "Screen 3" },
                        { time: "16:00", screen: "Screen 1" },
                        { time: "18:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Wednesday", times: [
                        { time: "11:00", screen: "Screen 1" },
                        { time: "13:00", screen: "Screen 2" },
                        { time: "15:00", screen: "Screen 1" },
                        { time: "17:00", screen: "Screen 3" },
                        { time: "19:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Thursday", times: [
                        { time: "9:00", screen: "Screen 1" },
                        { time: "11:00", screen: "Screen 3" },
                        { time: "15:00", screen: "Screen 3" },
                        { time: "16:00", screen: "Screen 1" },
                        { time: "19:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Friday", times: [
                        { time: "10:30", screen: "Screen 2" },
                        { time: "12:15", screen: "Screen 2" },
                        { time: "14:00", screen: "Screen 3" },
                        { time: "15:50", screen: "Screen 1" },
                        { time: "18:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Saturday", times: [
                        { time: "12:00", screen: "Screen 3" },
                        { time: "13:50", screen: "Screen 2" },
                        { time: "14:30", screen: "Screen 3" },
                        { time: "16:00", screen: "Screen 1" },
                        { time: "18:00", screen: "Screen 1" }
                    ]
                }
            ],
        synopsis: "A boy raised by boars who wears a boar's head and another boy who reveals his true power when he sleeps, board the Infinity Train on a new mission with the Flame Pillar. Their mission is to defeat a demon who has been tormenting people and killing the demon slayers who oppose it."
    });

    await DS.save();
    res.send(DS);
    console.log("Complete")
})

ROUTER.post("/setup/initialreleases2", async (req, res) => {
    const CRU = new MOVIE({
        id: 1,
        title: "Cruella",
        director: "Craig Gillespie",
        genre: "Crime/Comedy",
        year: 2021,
        actors: [{ name: "Emma Stone" }, { name: "Emma Thompson" }, { name: "Emily Beecham" }, { name: "Kirby Howell-Baptiste" }],
        poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQTY8XcRK2qKQRYzRcBf_tEnrecd991e9Brr7vGPGfLCQqwIWCZ",
        reviews: [],
        showtimes:
            [
                {
                    day: "Sunday", times: [
                        { time: "11:30", screen: "Screen 1" },
                        { time: "13:00", screen: "Screen 3" },
                        { time: "15:40", screen: "Screen 3" },
                        { time: "16:30", screen: "Screen 1" },
                        { time: "18:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Monday", times: [
                        { time: "10:00", screen: "Screen 1" },
                        { time: "12:00", screen: "Screen 1" },
                        { time: "14:00", screen: "Screen 3" },
                        { time: "16:00", screen: "Screen 1" },
                        { time: "18:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Tuesday", times: [
                        { time: "10:00", screen: "Screen 1" },
                        { time: "12:00", screen: "Screen 1" },
                        { time: "14:00", screen: "Screen 3" },
                        { time: "16:00", screen: "Screen 1" },
                        { time: "18:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Wednesday", times: [
                        { time: "11:00", screen: "Screen 1" },
                        { time: "13:00", screen: "Screen 2" },
                        { time: "15:00", screen: "Screen 1" },
                        { time: "17:00", screen: "Screen 3" },
                        { time: "19:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Thursday", times: [
                        { time: "9:00", screen: "Screen 1" },
                        { time: "11:00", screen: "Screen 3" },
                        { time: "15:00", screen: "Screen 3" },
                        { time: "16:00", screen: "Screen 1" },
                        { time: "19:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Friday", times: [
                        { time: "10:30", screen: "Screen 2" },
                        { time: "12:15", screen: "Screen 2" },
                        { time: "14:00", screen: "Screen 3" },
                        { time: "15:50", screen: "Screen 1" },
                        { time: "18:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Saturday", times: [
                        { time: "12:00", screen: "Screen 3" },
                        { time: "13:50", screen: "Screen 2" },
                        { time: "14:30", screen: "Screen 3" },
                        { time: "16:00", screen: "Screen 1" },
                        { time: "18:00", screen: "Screen 1" }
                    ]
                }
            ],
        synopsis: "Estella is a young and clever grifter who's determined to make a name for herself in the fashion world. She soon meets a pair of thieves who appreciate her appetite for mischief, and together they build a life for themselves on the streets of London. However, when Estella befriends fashion legend Baroness von Hellman, she embraces her wicked side to become the raucous and revenge-bent Cruella."
    });

    await CRU.save();
    res.send(CRU);
    console.log("Complete")
})

ROUTER.post("/setup/initialreleases3", async (req, res) => {
    const QP2 = new MOVIE({
        id: 2,
        title: "A Quiet Place Part II",
        director: "John Krasinski",
        genre: "Horror/Thriller",
        year: 2021,
        actors: [{ name: "Cillian Murphy" }, { name: "John Krasinski" }, { name: "Emily Blunt" }, { name: "Noah Jupe" }],
        poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJtOdYj8qC2PoVr9sMvmbdqn0YVFtMvckRwD1Ohicz4x-gGf19",
        reviews: [],
        showtimes:
            [
                {
                    day: "Sunday", times: [
                        { time: "11:30", screen: "Screen 1" },
                        { time: "13:00", screen: "Screen 3" },
                        { time: "15:40", screen: "Screen 3" },
                        { time: "16:30", screen: "Screen 1" },
                        { time: "18:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Monday", times: [
                        { time: "10:00", screen: "Screen 1" },
                        { time: "12:00", screen: "Screen 1" },
                        { time: "14:00", screen: "Screen 3" },
                        { time: "16:00", screen: "Screen 1" },
                        { time: "18:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Tuesday", times: [
                        { time: "10:00", screen: "Screen 1" },
                        { time: "12:00", screen: "Screen 1" },
                        { time: "14:00", screen: "Screen 3" },
                        { time: "16:00", screen: "Screen 1" },
                        { time: "18:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Wednesday", times: [
                        { time: "11:00", screen: "Screen 1" },
                        { time: "13:00", screen: "Screen 2" },
                        { time: "15:00", screen: "Screen 1" },
                        { time: "17:00", screen: "Screen 3" },
                        { time: "19:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Thursday", times: [
                        { time: "9:00", screen: "Screen 1" },
                        { time: "11:00", screen: "Screen 3" },
                        { time: "15:00", screen: "Screen 3" },
                        { time: "16:00", screen: "Screen 1" },
                        { time: "19:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Friday", times: [
                        { time: "10:30", screen: "Screen 2" },
                        { time: "12:15", screen: "Screen 2" },
                        { time: "14:00", screen: "Screen 3" },
                        { time: "15:50", screen: "Screen 1" },
                        { time: "18:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Saturday", times: [
                        { time: "12:00", screen: "Screen 3" },
                        { time: "13:50", screen: "Screen 2" },
                        { time: "14:30", screen: "Screen 3" },
                        { time: "16:00", screen: "Screen 1" },
                        { time: "18:00", screen: "Screen 1" }
                    ]
                }
            ],
        synopsis: "Following the deadly events at home, the Abbott family must now face the terrors of the outside world as they continue their fight for survival in silence. Forced to venture into the unknown, they quickly realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path."
    });

    await QP2.save();
    res.send(QP2);
    console.log("Complete")
})

ROUTER.post("/setup/initialreleases4", async (req, res) => {

    const PR2 = new MOVIE({
        id: 3,
        title: "Peter Rabbit 2: The Runaway",
        director: "Will Gluck",
        genre: "Family/Comedy",
        year: 2021,
        actors: [{ name: "Daisy Ridley" }, { name: "Doomhnall Gleeson" }, { name: "Rose Byrne" }, { name: "James Corden" }],
        poster: "data:image/jpeg;base64,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",
        reviews: [],
        showtimes:
            [
                {
                    day: "Sunday", times: [
                        { time: "11:30", screen: "Screen 1" },
                        { time: "13:00", screen: "Screen 3" },
                        { time: "15:40", screen: "Screen 3" },
                        { time: "16:30", screen: "Screen 1" },
                        { time: "18:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Monday", times: [
                        { time: "10:00", screen: "Screen 1" },
                        { time: "12:00", screen: "Screen 1" },
                        { time: "14:00", screen: "Screen 3" },
                        { time: "16:00", screen: "Screen 1" },
                        { time: "18:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Tuesday", times: [
                        { time: "10:00", screen: "Screen 1" },
                        { time: "12:00", screen: "Screen 1" },
                        { time: "14:00", screen: "Screen 3" },
                        { time: "16:00", screen: "Screen 1" },
                        { time: "18:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Wednesday", times: [
                        { time: "11:00", screen: "Screen 1" },
                        { time: "13:00", screen: "Screen 2" },
                        { time: "15:00", screen: "Screen 1" },
                        { time: "17:00", screen: "Screen 3" },
                        { time: "19:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Thursday", times: [
                        { time: "9:00", screen: "Screen 1" },
                        { time: "11:00", screen: "Screen 3" },
                        { time: "15:00", screen: "Screen 3" },
                        { time: "16:00", screen: "Screen 1" },
                        { time: "19:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Friday", times: [
                        { time: "10:30", screen: "Screen 2" },
                        { time: "12:15", screen: "Screen 2" },
                        { time: "14:00", screen: "Screen 3" },
                        { time: "15:50", screen: "Screen 1" },
                        { time: "18:00", screen: "Screen 2" }
                    ]
                },
                {
                    day: "Saturday", times: [
                        { time: "12:00", screen: "Screen 3" },
                        { time: "13:50", screen: "Screen 2" },
                        { time: "14:30", screen: "Screen 3" },
                        { time: "16:00", screen: "Screen 1" },
                        { time: "18:00", screen: "Screen 1" }
                    ]
                }
            ],
        synopsis: "Despite his efforts, Peter can't seem to shake his reputation for mischief among the other rabbits. Once he adventures out of the garden Peter finds himself in a world where mischief is appreciated, but soon his family come to bring him home."
    });

    await PR2.save();
    res.send(PR2);
    console.log("Complete")

})

// ROUTER.post("/setup/do", (req, res) => {

//     const DS = new MOVIE({
//         id: 0,
//         title: "Demon Slayer",
//         director: "Gotouge",
//         genre: "Quest",
//         year: 2021,
//         actors: [{ name: "Tanjiro" }, { name: "Inosuke" }, { name: "Zenitsu" }],
//         poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQbYpI4mYx8iImEc1TVNqY5iJFREmo7-sGK7PdtBztb2qtS0Pzb",
//         reviews: [],
//         showtimes:
//             [
//                 {
//                     day: "Sunday", times: [
//                         { time: "11:30", screen: "Screen 1" },
//                         { time: "13:00", screen: "Screen 3" },
//                         { time: "15:40", screen: "Screen 3" },
//                         { time: "16:30", screen: "Screen 1" },
//                         { time: "18:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Monday", times: [
//                         { time: "10:00", screen: "Screen 1" },
//                         { time: "12:00", screen: "Screen 1" },
//                         { time: "14:00", screen: "Screen 3" },
//                         { time: "16:00", screen: "Screen 1" },
//                         { time: "18:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Tuesday", times: [
//                         { time: "10:00", screen: "Screen 1" },
//                         { time: "12:00", screen: "Screen 1" },
//                         { time: "14:00", screen: "Screen 3" },
//                         { time: "16:00", screen: "Screen 1" },
//                         { time: "18:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Wednesday", times: [
//                         { time: "11:00", screen: "Screen 1" },
//                         { time: "13:00", screen: "Screen 2" },
//                         { time: "15:00", screen: "Screen 1" },
//                         { time: "17:00", screen: "Screen 3" },
//                         { time: "19:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Thursday", times: [
//                         { time: "9:00", screen: "Screen 1" },
//                         { time: "11:00", screen: "Screen 3" },
//                         { time: "15:00", screen: "Screen 3" },
//                         { time: "16:00", screen: "Screen 1" },
//                         { time: "19:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Friday", times: [
//                         { time: "10:30", screen: "Screen 2" },
//                         { time: "12:15", screen: "Screen 2" },
//                         { time: "14:00", screen: "Screen 3" },
//                         { time: "15:50", screen: "Screen 1" },
//                         { time: "18:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Saturday", times: [
//                         { time: "12:00", screen: "Screen 3" },
//                         { time: "13:50", screen: "Screen 2" },
//                         { time: "14:30", screen: "Screen 3" },
//                         { time: "16:00", screen: "Screen 1" },
//                         { time: "18:00", screen: "Screen 1" }
//                     ]
//                 }
//             ],
//         synopsis: "A boy raised by boars who wears a boar's head and another boy who reveals his true power when he sleeps, board the Infinity Train on a new mission with the Flame Pillar. Their mission is to defeat a demon who has been tormenting people and killing the demon slayers who oppose it."
//     });
//     const CRU = new MOVIE({
//         id: 1,
//         title: "Cruella",
//         director: "Craig Gillespie",
//         genre: "Crime/Comedy",
//         year: 2021,
//         actors: [{ name: "Emma Stone" }, { name: "Emma Thompson" }, { name: "Emily Beecham" }, { name: "Kirby Howell-Baptiste" }],
//         poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQTY8XcRK2qKQRYzRcBf_tEnrecd991e9Brr7vGPGfLCQqwIWCZ",
//         reviews: [],
//         showtimes:
//             [
//                 {
//                     day: "Sunday", times: [
//                         { time: "11:30", screen: "Screen 1" },
//                         { time: "13:00", screen: "Screen 3" },
//                         { time: "15:40", screen: "Screen 3" },
//                         { time: "16:30", screen: "Screen 1" },
//                         { time: "18:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Monday", times: [
//                         { time: "10:00", screen: "Screen 1" },
//                         { time: "12:00", screen: "Screen 1" },
//                         { time: "14:00", screen: "Screen 3" },
//                         { time: "16:00", screen: "Screen 1" },
//                         { time: "18:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Tuesday", times: [
//                         { time: "10:00", screen: "Screen 1" },
//                         { time: "12:00", screen: "Screen 1" },
//                         { time: "14:00", screen: "Screen 3" },
//                         { time: "16:00", screen: "Screen 1" },
//                         { time: "18:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Wednesday", times: [
//                         { time: "11:00", screen: "Screen 1" },
//                         { time: "13:00", screen: "Screen 2" },
//                         { time: "15:00", screen: "Screen 1" },
//                         { time: "17:00", screen: "Screen 3" },
//                         { time: "19:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Thursday", times: [
//                         { time: "9:00", screen: "Screen 1" },
//                         { time: "11:00", screen: "Screen 3" },
//                         { time: "15:00", screen: "Screen 3" },
//                         { time: "16:00", screen: "Screen 1" },
//                         { time: "19:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Friday", times: [
//                         { time: "10:30", screen: "Screen 2" },
//                         { time: "12:15", screen: "Screen 2" },
//                         { time: "14:00", screen: "Screen 3" },
//                         { time: "15:50", screen: "Screen 1" },
//                         { time: "18:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Saturday", times: [
//                         { time: "12:00", screen: "Screen 3" },
//                         { time: "13:50", screen: "Screen 2" },
//                         { time: "14:30", screen: "Screen 3" },
//                         { time: "16:00", screen: "Screen 1" },
//                         { time: "18:00", screen: "Screen 1" }
//                     ]
//                 }
//             ],
//         synopsis: "Estella is a young and clever grifter who's determined to make a name for herself in the fashion world. She soon meets a pair of thieves who appreciate her appetite for mischief, and together they build a life for themselves on the streets of London. However, when Estella befriends fashion legend Baroness von Hellman, she embraces her wicked side to become the raucous and revenge-bent Cruella."
//     });

//     const QP2 = new MOVIE({
//         id: 2,
//         title: "A Quiet Place Part II",
//         director: "John Krasinski",
//         genre: "Horror/Thriller",
//         year: 2021,
//         actors: [{ name: "Cillian Murphy" }, { name: "John Krasinski" }, { name: "Emily Blunt" }, { name: "Noah Jupe" }],
//         poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJtOdYj8qC2PoVr9sMvmbdqn0YVFtMvckRwD1Ohicz4x-gGf19",
//         reviews: [],
//         showtimes:
//             [
//                 {
//                     day: "Sunday", times: [
//                         { time: "11:30", screen: "Screen 1" },
//                         { time: "13:00", screen: "Screen 3" },
//                         { time: "15:40", screen: "Screen 3" },
//                         { time: "16:30", screen: "Screen 1" },
//                         { time: "18:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Monday", times: [
//                         { time: "10:00", screen: "Screen 1" },
//                         { time: "12:00", screen: "Screen 1" },
//                         { time: "14:00", screen: "Screen 3" },
//                         { time: "16:00", screen: "Screen 1" },
//                         { time: "18:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Tuesday", times: [
//                         { time: "10:00", screen: "Screen 1" },
//                         { time: "12:00", screen: "Screen 1" },
//                         { time: "14:00", screen: "Screen 3" },
//                         { time: "16:00", screen: "Screen 1" },
//                         { time: "18:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Wednesday", times: [
//                         { time: "11:00", screen: "Screen 1" },
//                         { time: "13:00", screen: "Screen 2" },
//                         { time: "15:00", screen: "Screen 1" },
//                         { time: "17:00", screen: "Screen 3" },
//                         { time: "19:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Thursday", times: [
//                         { time: "9:00", screen: "Screen 1" },
//                         { time: "11:00", screen: "Screen 3" },
//                         { time: "15:00", screen: "Screen 3" },
//                         { time: "16:00", screen: "Screen 1" },
//                         { time: "19:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Friday", times: [
//                         { time: "10:30", screen: "Screen 2" },
//                         { time: "12:15", screen: "Screen 2" },
//                         { time: "14:00", screen: "Screen 3" },
//                         { time: "15:50", screen: "Screen 1" },
//                         { time: "18:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Saturday", times: [
//                         { time: "12:00", screen: "Screen 3" },
//                         { time: "13:50", screen: "Screen 2" },
//                         { time: "14:30", screen: "Screen 3" },
//                         { time: "16:00", screen: "Screen 1" },
//                         { time: "18:00", screen: "Screen 1" }
//                     ]
//                 }
//             ],
//         synopsis: "Following the deadly events at home, the Abbott family must now face the terrors of the outside world as they continue their fight for survival in silence. Forced to venture into the unknown, they quickly realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path."
//     });

//     const PR2 = new MOVIE({
//         id: 3,
//         title: "Peter Rabbit 2: The Runaway",
//         director: "Will Gluck",
//         genre: "Family/Comedy",
//         year: 2021,
//         actors: [{ name: "Daisy Ridley" }, { name: "Doomhnall Gleeson" }, { name: "Rose Byrne" }, { name: "James Corden" }],
//         poster: "data:image/jpeg;base64,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",
//         reviews: [],
//         showtimes:
//             [
//                 {
//                     day: "Sunday", times: [
//                         { time: "11:30", screen: "Screen 1" },
//                         { time: "13:00", screen: "Screen 3" },
//                         { time: "15:40", screen: "Screen 3" },
//                         { time: "16:30", screen: "Screen 1" },
//                         { time: "18:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Monday", times: [
//                         { time: "10:00", screen: "Screen 1" },
//                         { time: "12:00", screen: "Screen 1" },
//                         { time: "14:00", screen: "Screen 3" },
//                         { time: "16:00", screen: "Screen 1" },
//                         { time: "18:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Tuesday", times: [
//                         { time: "10:00", screen: "Screen 1" },
//                         { time: "12:00", screen: "Screen 1" },
//                         { time: "14:00", screen: "Screen 3" },
//                         { time: "16:00", screen: "Screen 1" },
//                         { time: "18:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Wednesday", times: [
//                         { time: "11:00", screen: "Screen 1" },
//                         { time: "13:00", screen: "Screen 2" },
//                         { time: "15:00", screen: "Screen 1" },
//                         { time: "17:00", screen: "Screen 3" },
//                         { time: "19:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Thursday", times: [
//                         { time: "9:00", screen: "Screen 1" },
//                         { time: "11:00", screen: "Screen 3" },
//                         { time: "15:00", screen: "Screen 3" },
//                         { time: "16:00", screen: "Screen 1" },
//                         { time: "19:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Friday", times: [
//                         { time: "10:30", screen: "Screen 2" },
//                         { time: "12:15", screen: "Screen 2" },
//                         { time: "14:00", screen: "Screen 3" },
//                         { time: "15:50", screen: "Screen 1" },
//                         { time: "18:00", screen: "Screen 2" }
//                     ]
//                 },
//                 {
//                     day: "Saturday", times: [
//                         { time: "12:00", screen: "Screen 3" },
//                         { time: "13:50", screen: "Screen 2" },
//                         { time: "14:30", screen: "Screen 3" },
//                         { time: "16:00", screen: "Screen 1" },
//                         { time: "18:00", screen: "Screen 1" }
//                     ]
//                 }
//             ],
//         synopsis: "Despite his efforts, Peter can't seem to shake his reputation for mischief among the other rabbits. Once he adventures out of the garden Peter finds himself in a world where mischief is appreciated, but soon his family come to bring him home."
//     });

//     PR2.save();
//     QP2.save();
//     CRU.save();
//     DS.save();
//     console.log("Complete");

// })


module.exports = ROUTER;