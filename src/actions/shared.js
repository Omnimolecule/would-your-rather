import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api"
import { receiveUsers, addQuestionToUser, addAnswerToUser, removeAnswerFromUser } from "./users";
import { receiveQuestions, addQuestion, addAnswerToQuestion, removeAnswerToQuestion } from "./questions";
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
    return ((dispatch) => {
        dispatch(showLoading());
        getInitialData().then(({ users, questions }) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());
        });
    });
}

export function handleAddQuestion(optionOne, optionTwo) {
    return ((dispatch, getState) => {
        dispatch(showLoading());
        const { authedUser } = getState();
        saveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser
        }).then((question) => {
            dispatch(addQuestion(question));
            dispatch(addQuestionToUser(question));
            dispatch(hideLoading());
        })
    });
}

export function handleAnswerQuestion(questionId, answer) {
    return ((dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(addAnswerToUser(authedUser, questionId, answer));
        dispatch(addAnswerToQuestion(authedUser, questionId, answer));

        return saveQuestionAnswer({
            authedUser,
            qid: questionId,
            answer
        }).catch((e) => {
            console.warn('Error in handleAnswerQuestion: ', e);
            dispatch(removeAnswerFromUser(authedUser, questionId, answer));
            dispatch(removeAnswerToQuestion(authedUser, questionId, answer));
            alert('There was an error voting for the poll. Try again.');
        })
    });
}