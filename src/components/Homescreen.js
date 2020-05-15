import React from 'react';
import { connect } from "react-redux";
import QuestionOverview from './QuestionOverview';


class Homescreen extends React.Component {
    state = {
        showUnanswered: true
    }

    toggleQuestions = () => {
        this.setState((prevState) => ({
            showUnanswered: !prevState.showUnanswered
        }));
    }

    render() {
        const { showUnanswered } = this.state;
        const { unansweredQuestions, answeredQuestions, user } = this.props;
        return (
            <div>
                <h1 className='center'>Hello {user.name}</h1>
                <button onClick={this.toggleQuestions}>Show {showUnanswered ? 'answered' : 'unanswered'} questions</button>
                <ul>
                    {this.state.showUnanswered
                        ? unansweredQuestions.map((question) => (
                            <li key={question}>
                                <QuestionOverview questionId={question} />
                            </li>
                        ))
                        : answeredQuestions.map((question) => (
                            <li key={question}>
                                <QuestionOverview questionId={question} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ authedUser, users, questions }) {
    let user = users[authedUser];
    let answeredQuestions = Object.keys(user.answers)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
    let unansweredQuestions = Object.keys(questions)
        .filter((qId) => !answeredQuestions.includes(qId))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    return {
        user,
        answeredQuestions,
        unansweredQuestions
    }
}

export default connect(mapStateToProps)(Homescreen)