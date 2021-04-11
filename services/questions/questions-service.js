const questions = require('./questions.json');

const createQuestion = () => {}
const createQuestionForQuiz = () => {}

const findAllQuestions = () => {
    return  questions;
}
const findQuestionsForQuiz = (quizId ) => {
    return questions.filter((question) => {
        return question.quizId === quizId ;
    })
}

const findQuestionById = (questionId) => {
    return questions.find((question) => {
        return question._id === questionId;
    });
}

const updateQuestion = () => {}
const deleteQuestion = () => {}

module.exports = {
    createQuestion, findQuestionsForQuiz,
    findAllQuestions, findQuestionById,
    updateQuestion, deleteQuestion
}