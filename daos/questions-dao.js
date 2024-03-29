const questionsModel = require('../models/questions/questions-model')

const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qid) => questionsModel.findById(qid)

const findQuestionsForQuiz = (qzid) => {
    return questionsModel.find({quizId: qzid})
}
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }