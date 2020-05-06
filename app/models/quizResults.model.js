module.exports = mongoose => {

    var schema = mongoose.Schema(
        {
            quizId: String,
            userName: String,
            score: Number,
            submitTime: Date,
            userResponses: []
        },
        { timestamps: true }
      );
    
      schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });
    
      const QuizResults = mongoose.model("quizResults", schema);
      return QuizResults;
  };