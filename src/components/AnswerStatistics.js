import React from 'react';
import { connect } from 'react-redux';

class AnswerStatistics extends React.Component {
    render() {
        const { question, numOptionOne, numOptionTwo, percentOptionOne, percentOptionTwo, answer } = this.props
        return (
            <div>
                <div className={answer==='optionOne'?'option-active':'option-inactive'}>
                    <span><b>{question.optionOne.text}</b></span><br />
                    <span>Number of People: {numOptionOne}</span><br />
                    <span>Percentage: {percentOptionOne}</span>
                </div>
                <div className={answer==='optionTwo'?'option-active':'option-inactive'}>
                    <span><b>{question.optionTwo.text}</b></span><br />
                    <span>Number of People: {numOptionTwo}</span><br />
                    <span>Percentage: {percentOptionTwo}</span>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ questions }, { questionId, answer }) {
    const question = questions[questionId];
    const numOptionOne = question.optionOne.votes.length;
    const numOptionTwo = question.optionTwo.votes.length;
    const total = numOptionOne + numOptionTwo;
    const percentOptionOne = numOptionOne / total * 100;
    const percentOptionTwo = numOptionTwo / total * 100;

    return {
        question,
        numOptionOne,
        numOptionTwo,
        percentOptionOne,
        percentOptionTwo,
        answer
    }
}

export default connect(mapStateToProps)(AnswerStatistics)