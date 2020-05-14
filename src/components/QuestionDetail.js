import React from 'react';
import { connect } from 'react-redux';
import AnswerStatistics from './AnswerStatistics';
import { handleAnswerQuestion } from '../actions/shared';

class QuestionDetail extends React.Component {

    handleOptionSelected = (answer) => {
        const { dispatch, question } = this.props;
        dispatch(handleAnswerQuestion(question.id, answer));
    }


    render() {
        const { question, author, answer } = this.props;
        if (!question) {
            return <h1>404</h1>
        }


        return (
            <div>
                <h1>Question Detail</h1>
                <div className='questionbox'>
                    <div className='question-avatar'>
                        <img
                            src={author.avatarURL}
                            alt={`Avatar of ${author.name}`}
                            className='avatar' />
                        <span>{author.name}</span>
                    </div>
                    <div className='question-info'>
                        <span>Would you rather...?</span>
                        {answer
                            ? (
                                <div>
                                    <AnswerStatistics questionId={question.id} answer={answer} />
                                </div>
                            )
                            : (
                                <div>
                                    <button onClick={() => this.handleOptionSelected('optionOne')}>{question.optionOne.text}</button>
                                    <button onClick={() => this.handleOptionSelected('optionTwo')}>{question.optionTwo.text}</button>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        );
    }
}

function getAnswer(question, userId) {
    let answer = null;
    if (question) {
        if (question.optionOne.votes.includes(userId)) {
            answer = 'optionOne';
        } else if (question.optionTwo.votes.includes(userId)) {
            answer = 'optionTwo';
        }
    }
    return answer;
}

function mapStateToProps({ questions, users, authedUser }, { match }) {
    const { id } = match.params;
    const question = questions[id];
    const author = users[question.author];
    const answer = getAnswer(question, authedUser);

    return {
        question,
        author,
        answer
    }
}

export default connect(mapStateToProps)(QuestionDetail)