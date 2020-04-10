module.exports = app => {
    const quiz = require("../controllers/quiz.controller.js");
  
    var router = require("express").Router();
  
    
    // Retrieve active quiz info
    router.get("/active", quiz.findActiveQuiz);
  
    // Retriev quiz details
    router.get("/", quiz.getQuiz);

    // Retriev quiz details
    router.get("/all", quiz.getAllQuiz);

    // Create a new Quiz
    router.post("/", quiz.create);
    
    //Return archive quiz list
    router.get("/archive", quiz.findArchiveQuizList);

    // Update a quiz  with id
    router.put("/:id", quiz.update);
  
    app.use('/api/quiz', router);
  };