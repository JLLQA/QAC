const MONGOOSE = require("mongoose");
const EXPRESS = require("express");
const cors = require('cors');
let app = EXPRESS();

app.use(EXPRESS.json())
app.use(cors());
app.options("*",cors());

const routes = require("./route");
const newroutes = require("./routeReleases")


// setup mongoose
MONGOOSE.connect("mongodb://localhost/QACinema", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.use(routes, newroutes);
        app.listen(5000, () => {
            console.log("Server has started");
        })
    })