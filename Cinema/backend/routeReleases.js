const ROUTERNEW = require("express").Router();
const RELEASE = require("./models/newreleases")

// get all
ROUTERNEW.get("/newreleases", async (req, res) => {
    const REL = await RELEASE.find((err, rel) => {
        if (err) {
            console.error("Error occured: ", err);
            res.send(err.stack);
        } else {
            console.log("Releases")
            res.send(rel);
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
        actors: " LeBron James",
        releasedate: "July 16, 2021",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/SpaceJamANewLegacyTeaser.jpg/220px-SpaceJamANewLegacyTeaser.jpg",
        story: "NBA superstar LeBron James teams up with Bugs Bunny and the rest of the Looney Tunes for this long-awaited sequel."
    });
    await REL.save();
    res.send(REL);
})


//create 007 movie (http://localhost:5000/create007) on postman to create
ROUTERNEW.post('/create007', async (req, res) => {
    const REL = new RELEASE({
        id: 2,
        title: "No Time To Die (007)",
        director: "Cary Joji Fukunaga",
        genre: "Action",
        actors: "Daniel Craig",
        releasedate: "21 September 2021",
        poster: "https://upload.wikimedia.org/wikipedia/en/f/fe/No_Time_to_Die_poster.jpg",
        story: "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology."
    });
    await REL.save();
    res.send(REL);
})


//create spiderman movie
ROUTERNEW.post('/createspiderman', async (req, res) => {
    const REL = new RELEASE({
        id: 3,
        title: "Spider-Man: No Way Home",
        director: "Jon Watts",
        genre: "Action",
        actors: " Angourie Rice",
        releasedate: "December 17, 2021",
        poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/sn_lob_crd_01.jpg",
        story: "A continuation of Spider-Man: Far From Home."
    });
    await REL.save();
    res.send(REL);
})

//create candyman movie
ROUTERNEW.post('/createcandyman', async (req, res) => {
    const REL = new RELEASE({
        id: 4,
        title: "Candyman",
        director: "Nia DaCosta",
        genre: "Horror",
        actors: "Yahya Abdul-Mateen II",
        releasedate: "August 27, 2021",
        poster: "https://upload.wikimedia.org/wikipedia/en/4/45/Candyman_%282020_film%29.png",
        story: "A spiritual sequel to the horror film Candyman (1992) that returns to the now-gentrified Chicago neighborhood where the legend began."
    });
    await REL.save();
    res.send(REL);
})


module.exports = ROUTERNEW;