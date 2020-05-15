import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_ANSWER_TO_QUESTION, REMOVE_ANSWER_FROM_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case ADD_ANSWER_TO_QUESTION:
            if (action.answer === 'optionOne') {
                return {
                    ...state,
                    [action.questionId]: {
                        ...state[action.questionId],
                        optionOne: {
                            ...state[action.questionId].optionOne,
                            votes: [
                                ...state[action.questionId].optionOne.votes,
                                action.authedUser
                            ]
                        }
                    }
                }
            } else {
                return {
                    ...state,
                    [action.questionId]: {
                        ...state[action.questionId],
                        optionTwo: {
                            ...state[action.questionId].optionTwo,
                            votes: [
                                ...state[action.questionId].optionTwo.votes,
                                action.authedUser
                            ]
                        }
                    }
                }
            }
        case REMOVE_ANSWER_FROM_QUESTION:
            if (action.answer === 'optionOne') {
                return {
                    ...state,
                    [action.questionId]: {
                        ...state[action.questionId],
                        optionOne: {
                            ...state[action.questionId].optionOne,
                            votes: state[action.questionId].optionOne.votes.filter((user) => user !== action.authedUser)
                        }
                    }
                }
            } else {
                return {
                    ...state,
                    [action.questionId]: {
                        ...state[action.questionId],
                        optionTwo: {
                            ...state[action.questionId].optionTwo,
                            votes: state[action.questionId].optionTwo.votes.filter((user) => user !== action.authedUser)
                        }
                    }
                }
            }
        default:
            return state;
    }
}