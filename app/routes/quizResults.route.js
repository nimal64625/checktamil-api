module.exports = app => {
    const quizResults = require("../controllers/quizResults.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", quizResults.create);
  
    // Retrieve all Tutorials
    router.get("/", quizResults.findAll);
  
    // Retrieve all published Tutorials
    router.get("/topRanked", quizResults.findAllTopRanked);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", quizResults.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", quizResults.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", quizResults.delete);
  
    // Create a new Tutorial
    router.delete("/", quizResults.deleteAll);
  
    app.use('/api/quizResults', router);
  };