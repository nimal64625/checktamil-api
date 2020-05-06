const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.quizResults = require("./quizResults.model.js")(mongoose);
db.quizSurvey = require("./quizSurvey.model.js")(mongoose);
db.quiz = require("./quiz.model.js")(mongoose);

module.exports = db;