import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../actions/shared';

class AddQuestion extends React.Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    changeOptionOne = (event) => {
        const optionOne = event.target.value;
        this.setState(() => ({
            optionOne
        }));
    }

    changeOptionTwo = (event) => {
        const optionTwo = event.target.value;
        this.setState(() => ({
            optionTwo
        }));
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { dispatch } = this.props;
        const { optionOne, optionTwo } = this.state;
        dispatch(handleAddQuestion(optionOne, optionTwo));

        this.setState(() => ({
            toHome: true
        }));
    }

    render() {

        if (this.state.toHome === true) {
            return <Redirect to='/' />
        }

        return (
            <div>
                <h1 className='center'>Add Question</h1>
                <h3 className='center'>Would you rather ...?</h3>
                <span>(Please fill in two different options for your friends to pick)</span>

                <form onSubmit={this.handleSubmit} className='question-form'>
                    <input value={this.state.optionOne} placeholder='Option One' onChange={this.changeOptionOne} />
                    <span>or</span>
                    <input value={this.state.optionTwo} placeholder='Option Two' onChange={this.changeOptionTwo} />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default connect()(AddQuestion)