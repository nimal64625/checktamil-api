module.exports = mongoose => {

    var schema = mongoose.Schema(
        {
            userName: String,
            quizId: String,
            rating: Number,
            isRecommendParents: Boolean,
            isRecommendKids: Boolean,
            isRecommendFriends: Boolean,
            isRecommendColleagues: Boolean,
            isRecommendYesNo: Boolean,
            isVolunteer: Boolean,
            volunteerPhone: Number,
            submitTime: { type: Date, default: Date.now },
        },
        { timestamps: true }
      );
    
      schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });
    
      const QuizSurvey = mongoose.model("quizSurvey", schema);
      return QuizSurvey;
  };