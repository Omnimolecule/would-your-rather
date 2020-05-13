import { getInitialData, saveQuestion } from "../utils/api"
import { receiveUsers, addQuestionToUser } from "./users";
import { receiveQuestions, addQuestion } from "./questions";

export function handleInitialData() {
    return ((dispatch) => {
        getInitialData().then(({ users, questions }) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
        });
    });
}

export function handleAddQuestion(optionOne, optionTwo) {
    return ((dispatch, getState) => {
        const { authedUser } = getState();
        saveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser
        }).then((question) => {
            dispatch(addQuestion(question));
            dispatch(addQuestionToUser(question));
        })
    })
}