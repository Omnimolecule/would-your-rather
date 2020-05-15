import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import User from './User';

class QuestionOverview extends React.Component {
    render() {
        const { author, question } = this.props;
        return (
            <Link to={`/question/${question.id}`} className='questionbox'>
                <User avatarURL={author.avatarURL} name={author.name} />
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