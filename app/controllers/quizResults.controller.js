const db = require("../models");
const QuizResults = db.quizResults;
const QuizSurvey = db.quizSurvey;

// Create and Save a new QuizResult
exports.create = (req, res) => {
  // Validate request
  if (!req.body.quizId && !req.body.userName) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a quiz result
  const quizResult = new QuizResults({
    quizId: req.body.quizId,
    userName: req.body.userName,
    score: req.body.score,
    submitTime: req.body.submitTime,
    userResponses: req.body.userResponses
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

// Create and Save a new QuizResult
exports.submitSurvey = (req, res) => {
  // Validate request
  if (!req.body.userName) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a quiz result
  const quizSurvey = new QuizSurvey({
    userName: req.body.userName,
    quizId: req.body.quizId,
      rating: req.body.surveyResponses.rating,
      isRecommendParents: req.body.surveyResponses.isRecommendParents,
      isRecommendKids: req.body.surveyResponses.isRecommendKids,
      isRecommendFriends: req.body.surveyResponses.isRecommendFriends,
      isRecommendColleagues: req.body.surveyResponses.isRecommendColleagues,
      isRecommendYesNo: req.body.surveyResponses.isRecommendYesNo,
      isVolunteer: req.body.surveyResponses.isVolunteer,
      volunteerPhone: req.body.surveyResponses.volunteerPhone,
    submitTime: req.body.submitTime    
  });

  // console.log('req.body.surveyResponses:' + JSON.stringify(req.body.surveyResponses));
  // console.log('req.body.surveyResponses.rating:' + JSON.stringify(req.body.surveyResponses.rating));
  // console.log('req.body.surveyResponses.isRecommendYesNo:' + JSON.stringify(req.body.surveyResponses.isRecommendYesNo));
  // console.log('quizSurvey:' + quizSurvey);
  // Save Tutorial in the database
  quizSurvey
    .save(quizSurvey)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while posting the survey."
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

// Retrieve all Surveys from the database.
exports.findAllSurvey = (req, res) => {
  
  QuizSurvey.find()
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
