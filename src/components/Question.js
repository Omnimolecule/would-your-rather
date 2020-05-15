import React from 'react';
import { connect } from 'react-redux';
import AnswerStatistics from './AnswerStatistics';
import { handleAnswerQuestion } from '../actions/shared';
import User from './User';

class Question extends React.Component {

    handleOptionSelected = (answer) => {
        const { dispatch, questionId } = this.props;
        dispatch(handleAnswerQuestion(questionId, answer));
    }

    render() {
        const { author, question, answered } = this.props
        return (
            <div className='questionbox'>
                <User avatarURL={author.avatarURL} name={author.name}/>
                <div className='info-column'>
                    <span>Would you rather...?</span>
                    {answered
                        ? (
                            <div>
                                <AnswerStatistics questionId={question.id} />
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
        );
    }
}

function mapStateToProps({ users, authedUser, questions }, { questionId }) {
    const question = questions[questionId];
    const author = users[question.author];
    const answered = users[authedUser].answers.hasOwnProperty(questionId)

    return {
        question,
        author,
        answered
    };

}

export default connect(mapStateToProps)(Question)