export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';
export const REMOVE_ANSWER_FROM_QUESTION = 'REMOVE_ANSWER_FROM_QUESTION';


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function addAnswerToQuestion(authedUser, questionId, answer) {
    return {
        type: ADD_ANSWER_TO_QUESTION,
        authedUser,
        questionId,
        answer
    }
}

export function removeAnswerToQuestion(authedUser, questionId, answer) {
    return {
        type: REMOVE_ANSWER_FROM_QUESTION,
        authedUser,
        questionId,
        answer
    }
}
