import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderInput({ input, label }) {
        return (
            <div className='field'>
                <label>{label}</label>
                <div className='input'>
                    <input {...input} />
                </div>
            </div>
        )
    }

    onSubmit(formValues){

    }

    render() {
        return (
            <div>
                <form className='ui form' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name='title' component={this.renderInput} label='Enter Title' />
                    <Field name='description' component={this.renderInput} label='Enter Description' />
                </form>
                <button className='ui purple  basic button'>Submit</button>
            </div>
        )
    }
}
export default reduxForm({
    form: 'StreamCreate'
})(StreamCreate);
