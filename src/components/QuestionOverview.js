import React from 'react';
import { connect } from 'react-redux';

class QuestionOverview extends React.Component {
    render() {
        return (
            <div className='questionbox'>
                <div>
                    <img
                        src={this.props.author.avatarURL}
                        alt={`Avatar of ${this.props.author.name}`}
                        className='avatar' />
                    <span>{this.props.author.name}</span>
                </div>
                <hr />
                <span>Would you rather..?</span><br />
                <span>... {this.props.question.optionOne.text} or ...</span>
            </div>
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