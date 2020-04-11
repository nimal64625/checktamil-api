const db = require("../models");
const QuizResults = db.quizResults;

// Create and Save a new QuizResult
exports.create = (req, res) => {
  // Validate request
  if (!req.body.quizId && !req.body.userName) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const quizResult = new QuizResults({
    quizId: req.body.quizId,
    userName: req.body.userName,
    score: req.body.score,
    submitTime: req.body.submitTime
  });

  // Save Tutorial in the database
  quizResult
    .save(quizResult)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while posting the result."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const quizId = req.query.quizId;

  QuizResults.find({quizId: quizId})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving results."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllTopRanked = (req, res) => {
  const quizId = req.query.quizId;

  QuizResults.find({quizId: quizId}).sort({score:-1}).limit(10)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving results."
      });
    });

};
