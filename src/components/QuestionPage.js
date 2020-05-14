import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class QuestionPage extends React.Component {

    render() {
        const { questionId, questionAvailable } = this.props;

        if (!questionAvailable) {
            return <h1>404</h1>
        }

        return (
            <div>
                <h1>Question Detail</h1>
                <Question questionId={questionId}/>
            </div>
        );
    }
}

function mapStateToProps({ questions}, { match }) {
    const { id } = match.params;
    
    let questionAvailable = true;
    
    if (!questions.hasOwnProperty(id)) {
        questionAvailable = false;
    }

    return {
        questionId: id,
        questionAvailable
    }
}

export default connect(mapStateToProps)(QuestionPage)