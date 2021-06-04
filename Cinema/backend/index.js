const MONGOOSE = require("mongoose");
const EXPRESS = require("express");
const CORS = require('cors')
let APP = EXPRESS();

APP.use(CORS())
const routes = require("./route");


// setup mongoose
MONGOOSE.connect("mongodb://localhost/QACinema", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        APP = EXPRESS();
        APP.use(routes);
        APP.listen(5000, () => {
            console.log("Server has started");
        })
    })