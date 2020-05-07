module.exports = mongoose => {

    var schema = mongoose.Schema(
        {
            quizId: String,
            isActive: Boolean,
            quizDate: Date,
            isComplete: Boolean,
            softDelete: Boolean,
            isSurveyEnabled: { type: Boolean, default: false },
            questions: [
              {
                text: String,
                responses: [
                  {
                    text: String,
                    correct: Boolean
                  }
                ]
              }
            ]
        },
        { timestamps: true }
      );
    
      schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });
    
      const Quiz = mongoose.model("quiz", schema);
      return Quiz;
  };