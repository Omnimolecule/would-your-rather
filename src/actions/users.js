export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
export const REMOVE_ANSWER_FROM_USER = 'REMOVE_ANSWER_FROM_USER';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function addQuestionToUser(question) {
    return {
        type: ADD_QUESTION_TO_USER,
        question
    }
}

export function addAnswerToUser(authedUser, questionId, answer) {
    return {
        type: ADD_ANSWER_TO_USER,
        authedUser,
        questionId,
        answer
    }
}

export function removeAnswerFromUser(authedUser, questionId, answer) {
    return {
        type: REMOVE_ANSWER_FROM_USER,
        authedUser,
        questionId,
        answer
    }
}