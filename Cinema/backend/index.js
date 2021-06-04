const MONGOOSE = require("mongoose");
const EXPRESS = require("express");
let APP = EXPRESS();

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