"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitQuizAttemptService = void 0;
exports.createQuizAttempt = createQuizAttempt;
const quiz_model_1 = __importDefault(require("../../../../models/quiz.model"));
const quizAttempt_model_1 = __importDefault(require("../../../../models/quizAttempt.model"));
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}
async function createQuizAttempt(userId, quizId) {
    const quiz = await quiz_model_1.default.findById(quizId).exec();
    if (!quiz) {
        throw new Error("Quiz not found");
    }
    const randomizedQuestions = shuffleArray(quiz.questions || []);
    const questionAttempts = randomizedQuestions.map((question, index) => {
        const originalOptions = question.options;
        const shuffledOptionIndices = shuffleArray(originalOptions.map((_, idx) => idx));
        const shuffledOptions = shuffledOptionIndices.map((idx) => {
            const option = originalOptions[idx];
            if (option === undefined) {
                throw new Error(`Option at index ${idx} is undefined for question ${question._id}`);
            }
            return option;
        });
        const originalCorrectIndex = parseInt(question.correctAns, 10);
        const newCorrectIndex = shuffledOptionIndices.indexOf(originalCorrectIndex);
        return {
            questionId: question._id,
            presentedQuestion: question.question,
            presentedOptions: shuffledOptions,
            selectedOption: null,
            isCorrect: false,
            order: index,
        };
    });
    const quizAttempt = new quizAttempt_model_1.default({
        user: userId,
        quiz: quizId,
        questionAttempts,
        totalQuestions: randomizedQuestions.length,
        score: 0,
        startedAt: new Date(),
        isCompleted: false,
        timeTaken: null,
    });
    await quizAttempt.save();
    return quizAttempt;
}
const submitQuizAttemptService = async (quizAttemptId, userId, answers, submittedAt = new Date(), session) => {
    const quizAttempt = await quizAttempt_model_1.default.findOne({
        _id: quizAttemptId,
        user: userId,
    })
        .populate("quiz")
        .session(session)
        .exec();
    if (!quizAttempt) {
        throw new Error("Quiz attempt not found");
    }
    if (!quizAttempt.quiz) {
        throw new Error("Associated quiz not found");
    }
    if (quizAttempt.isCompleted) {
        throw new Error("Quiz attempt is already completed");
    }
    const quizQuestionsMap = new Map((quizAttempt.quiz.questions || []).map((q) => {
        if (!q._id) {
            throw new Error(`Question ID is missing for question: ${q.question}`);
        }
        return [q._id.toString(), q];
    }));
    let score = 0;
    const updatedQuestionAttempts = quizAttempt.questionAttempts.map((questionAttempt) => {
        const answer = answers.find((a) => a.questionId.equals(questionAttempt.questionId));
        if (!answer) {
            return {
                ...questionAttempt.toObject(),
                selectedOption: null,
                isCorrect: false,
            };
        }
        const originalQuestion = quizQuestionsMap.get(questionAttempt.questionId.toString());
        if (!originalQuestion) {
            throw new Error(`Original question not found for questionId ${questionAttempt.questionId}`);
        }
        const isCorrect = originalQuestion.correctAns === answer.selectedOption;
        if (isCorrect) {
            score += 1;
        }
        return {
            ...questionAttempt.toObject(),
            selectedOption: answer.selectedOption,
            isCorrect,
        };
    });
    const timeTaken = Math.round((submittedAt.getTime() - quizAttempt.startedAt.getTime()) / 1000);
    console.log(updatedQuestionAttempts);
    quizAttempt.questionAttempts = updatedQuestionAttempts;
    quizAttempt.score = score;
    quizAttempt.isCompleted = true;
    quizAttempt.completedAt = submittedAt;
    quizAttempt.timeTaken = timeTaken;
    await quizAttempt.save({ session });
    return quizAttempt;
};
exports.submitQuizAttemptService = submitQuizAttemptService;
//# sourceMappingURL=quizAttempt.service.js.map