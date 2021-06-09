const ROUTERNEW = require("express").Router();
const RELEASE = require("./models/newreleases")

// get all
ROUTERNEW.get("/newreleases", async (req, res) => {
    await RELEASE.find((err, rel) => {
        if (err) {
            console.error("Error occured: ", err);
            res.send(err.stack);
        } else {
            console.log("Releases")
            res.send(rel).status(200);
        }
    });
});

//create spacejam movie (http://localhost:5000/createjam) on postman to create
ROUTERNEW.post('/createjam', async (req, res) => {
    const REL = new RELEASE({
        id: 1,
        title: "Space Jam: A New Legacy",
        director: "Malcolm D. Lee",
        genre: "Animation",
        mainactors: "Lebron James, Don Cheadle, Sonequa Martin-Green, Cedric Joe",
        actors: "Chiney Ogwumike, Kyrie Irving, Jeff Bergman, Zendaya",
        releasedate: "16 July 2021",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/SpaceJamANewLegacyTeaser.jpg/220px-SpaceJamANewLegacyTeaser.jpg",
        story: "NBA superstar LeBron James teams up with Bugs Bunny and the rest of the Looney Tunes for this long-awaited sequel.",
        web:"https://www.spacejam.com/",
        budget:"150"
    });
    await REL.save();
    res.send(REL);
    console.log("Space Jam movie created");
})


//create 007 movie (http://localhost:5000/create007) on postman to create
ROUTERNEW.post('/create007', async (req, res) => {
    const REL = new RELEASE({
        id: 2,
        title: "No Time To Die (007)",
        director: "Cary Joji Fukunaga",
        genre: "Action",
        mainactors: "Daniel Craig, Rami Malek, Léa Seydoux, Lashana Lynch",
        actors: "Ben Whishaw, Naomie Harris, Jeffrey Wright, Christoph Waltz",
        releasedate: "30 September 2021",
        poster: "https://upload.wikimedia.org/wikipedia/en/f/fe/No_Time_to_Die_poster.jpg",
        story: "In No Time To Die, James Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
        web:"https://www.007.com/no-time-to-die/",
        budget:"200"
    });
    await REL.save();
    res.send(REL);
    console.log("007 movie created");
})


//create spiderman movie
ROUTERNEW.post('/createspiderman', async (req, res) => {
    const REL = new RELEASE({
        id: 3,
        title: "Spider-Man: No Way Home",
        director: "Jon Watts",
        genre: "Action",
        mainactors: "Angourie Rice, Tom Holland, Zendaya, Marisa Tomei",
        actors: "Benedict Cumberbatch, J.K. Simmons, Jamie Foxx, Alfred Molina",
        releasedate: "17 December 2021",
        poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/sn_lob_crd_01.jpg",
        story: "A continuation of Spider-Man: Far From Home.",
        web:"https://www.marvel.com/movies/spider-man-no-way-home",
        budget:"180"
    });
    await REL.save();
    res.send(REL);
    console.log("Spiderman movie created");
})

//create candyman movie
ROUTERNEW.post('/createcandyman', async (req, res) => {
    const REL = new RELEASE({
        id: 4,
        title: "Candyman",
        director: "Nia DaCosta",
        genre: "Horror",
        mainactors: "Yahya Abdul-Mateen II, Teyonah Parris, Nathan Stewart-Jarrett, Colman Domingo ",
        actors: "Tony Todd, Vanessa Estelle Williams, Rebecca Spence, Cassie Kramer",
        releasedate: "27 August 2021",
        poster: "https://upload.wikimedia.org/wikipedia/en/4/45/Candyman_%282020_film%29.png",
        story: "A spiritual sequel to the horror film Candyman (1992) that returns to the now-gentrified Chicago neighborhood where the legend began.",
        web:"https://www.candymanmovie.com/",
        budget:"30"
    });
    await REL.save();
    res.send(REL);
    console.log("Candyman movie created");
})

//delete by _id 
ROUTERNEW.delete("/delById/:id", async (req, res) => {
    try {
        const REL = await RELEASE.findByIdAndDelete(req.params.id).exec();
        res.send(REL);
        console.log("Item deleted");
    } catch {
        res.status(500).send("item has not been deleted");
    }
})

module.exports = ROUTERNEW;