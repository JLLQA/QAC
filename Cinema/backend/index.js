const MONGOOSE = require("mongoose");
const EXPRESS = require("express");
const cors = require('cors');
let app = EXPRESS();

app.use(EXPRESS.json())
app.use(cors());
app.options("*", cors());

const routes = require("./route");
const newroutes = require("./routeReleases");
const topicroutes = require("./routeTopics");


// setup mongoose
MONGOOSE.connect("mongodb://localhost/QACinema", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => {
        app.use(routes, newroutes, topicroutes);
        app.listen(5000, () => {
            console.log("Server has started");
        })
    })