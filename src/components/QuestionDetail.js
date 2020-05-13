import React from 'react';
import { connect } from 'react-redux';

class QuestionDetail extends React.Component {
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
                                    {answer}
                                </div>
                            )
                            : (
                                <div>
                                    <button>{question.optionOne.text}</button>
                                    <button>{question.optionTwo.text}</button>
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