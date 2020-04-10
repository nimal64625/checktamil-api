const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var whitelist = ['http://localhost:3000', 'http://tamilbot.com', 'https://reverent-swartz-7dbd1e.netlify.com']
var corsOptions = {
  origin: function (origin, callback) {
    console.log('origin:'+ origin);
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      //callback(new Error('Not allowed by CORS'))
      callback(null, true)
    }
  }
}

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

  require("./app/routes/quizResults.route")(app);
  require("./app/routes/quiz.route")(app);

// set port, listen for requests
const PORT = process.env.OPENSHIFT_NODEJS_PORT ||process.env.PORT || 8080;
const IP = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '0.0.0.0';
app.listen(PORT, IP, () => {
  console.log(`Server is running on ${IP} and port ${PORT}.`);
});