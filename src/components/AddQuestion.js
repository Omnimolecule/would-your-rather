import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class AddQuestion extends React.Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    changeOptionOne = (event) => {
        const optionOne = event.target.value
        this.setState(() => ({
            optionOne 
        }))
    }

    changeOptionTwo = (event) => {
        const optionTwo = event.target.value
        this.setState(() => ({
            optionTwo 
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("add new Question");
        this.setState(() => ({
            toHome: true
        }))
    }

    render() {

        if (this.state.toHome === true){
            return <Redirect to='/' />
        }

        return(
            <div>
                <h1>Add Question</h1>
                <h3>Would you rather ...?</h3>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.optionOne} placeholder='Option One' onChange={this.changeOptionOne} />
                    or
                    <input value={this.state.optionTWo} placeholder='Option Two' onChange={this.changeOptionTwo} />

                    <button>Add</button>
                </form>
            </div>       
        );
    }
}

export default connect()(AddQuestion)