import { RECEIVE_USERS, ADD_QUESTION_TO_USER, ADD_ANSWER_TO_USER, REMOVE_ANSWER_FROM_USER } from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION_TO_USER:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: [
                        ...state[action.question.author].questions,
                        action.question.id
                    ]
                }
            }
        case ADD_ANSWER_TO_USER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.questionId]: action.answer
                    }
                }
            }
        case REMOVE_ANSWER_FROM_USER:
            let clone = { ...state[action.authedUser].answers };
            delete clone[action.questionId];
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: clone
                }
            }
        default:
            return state;
    }
}
