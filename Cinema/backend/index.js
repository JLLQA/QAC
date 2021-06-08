const MONGOOSE = require("mongoose");
const express = require("express");
const cors = require('cors');
let app = express();

app.use(express.json())
app.use(cors());
app.options("*", cors());

const routes = require("./route");
const newroutes = require("./routeReleases")


// setup mongoose
MONGOOSE.connect("mongodb://localhost/QACinema", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false
    })
    .then(() => {
        app.use(routes, newroutes);
        app.listen(5000, () => {
            console.log("Server has started");
        })
    })