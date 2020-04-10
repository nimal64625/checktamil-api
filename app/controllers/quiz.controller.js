const db = require("../models");
const Quiz = db.quiz;

//Create and Save a new QuizResult
exports.create = (req, res) => {
  // Validate request
  if (!req.body.quizId) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Quiz
  const quiz = new Quiz({
    quizId: req.body.quizId,
    isActive: req.body.isActive,
    isComplete: req.body.isComplete,
    questions: req.body.questions
  });

  // Save Quiz in the database
  quiz
    .save(quiz)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while posting the quiz."
      });
    });
};

// Retrieve "active" Quiz from the database.
exports.findActiveQuiz = (req, res) => {
  
  Quiz.find({isActive: true}, {'quizId':1}).limit(1)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving active quiz."
      });
    });
};

// get Quiz details for the given quizId 
exports.getQuiz = (req, res) => {
  const quizId = req.query.quizId;

  Quiz.find({quizId: quizId})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving quiz details."
      });
    });

};

// get Quiz details for the given quizId 
exports.getAllQuiz = (req, res) => {
  
  Quiz.find({softDelete: false})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving quiz details."
      });
    });

};

// Retrieve all completed Quiz from the database.
exports.findArchiveQuizList = (req, res) => {
  
  Quiz.find({isComplete: true}, {'quizId':1, 'quizDate':1})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving archive quiz."
      });
    });
};

// Find a single Quiz with an id
exports.findOne = (req, res) => {
  
};

// Update a Quiz by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Quiz.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Quiz with id=${id}. Maybe Quiz was not found!`
        });
      } else res.send({ message: "Quiz was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Quiz with id=" + id + "error:" + err
      });
    });
};

// Delete a Quiz with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Quizs from the database.
exports.deleteAll = (req, res) => {
  
};


