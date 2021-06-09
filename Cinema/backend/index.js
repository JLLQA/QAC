require("dotenv").config();
const MONGOOSE = require("mongoose");
const EXPRESS = require("express");
const cors = require('cors');
let app = EXPRESS();

app.use(EXPRESS.json())
app.use(cors());
app.options("*", cors());

const PORT = process.env.PORT;
const env = process.env.NODE_ENV;

//Access different MongoDB Collections for tests and developement
if (env === 'test') {
  process.env.REACT_APP_DOMAIN = 'mongodb://localhost/QACinema-test'
} else {
  process.env.REACT_APP_DOMAIN = 'mongodb://localhost/QACinema'
}

const routes = require("./route");
const newroutes = require("./routeReleases")

// setup mongoose
MONGOOSE.connect(process.env.REACT_APP_DOMAIN, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    app.use(routes, newroutes);
    app.listen(PORT, () => {
      console.log("Server has started on port:" + PORT);
    })
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: " + error)
  });


MONGOOSE.connection.once('open', () => console.log('Connected succesfully to MongoDB'));

module.exports = app;