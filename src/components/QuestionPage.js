import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import QuestionNotFound from './QuestionNotFound';

class QuestionPage extends React.Component {

    render() {
        const { questionId, questionAvailable } = this.props;

        if (!questionAvailable) {
            return <QuestionNotFound />
        }

        return (
            <div>
                <Question questionId={questionId} />
            </div>
        );
    }
}

function mapStateToProps({ questions }, { match }) {
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