import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class QuestionOverview extends React.Component {
    render() {
        const { author, question } = this.props;
        return (
            <Link to={`/question/${question.id}`} className='questionbox'>
                <div className='question-avatar'>
                    <img
                        src={author.avatarURL}
                        alt={`Avatar of ${author.name}`}
                        className='avatar' />
                    <span>{author.name}</span>
                </div>
                <div className='questionbox-info'>
                    <span>Would you rather {question.optionOne.text} or ...?</span>
                </div>
            </Link>
        );
    }
}

function mapStateToProps({ questions, users }, { questionId }) {
    let question = questions[questionId];
    let author = users[question.author];

    return {
        question,
        author
    }
}

export default connect(mapStateToProps)(QuestionOverview)