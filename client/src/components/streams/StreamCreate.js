import React from 'react';
import { Field, formValues, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className=''>
                    <div className="ui basic purple pointing prompt label transition visible">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        return (
            <div className='field'>
                <label>{label}</label>
                <div className='input'>
                    <input {...input} autoComplete='off' />
                    {this.renderError(meta)}
                </div>
            </div>
        )
    }

    onSubmit(formValues) {

    }

    render() {
        return (
            <div className='createStream'>
                <form className='ui form error'
                    onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name='title' component={this.renderInput} label='Enter Title' />
                    <Field name='description' component={this.renderInput} label='Enter Description' />
                </form>
                <div className='submit'>
                    <button className='ui purple  basic button'>Submit</button>
                </div>
            </div>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title'
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description'
    }
    return errors
}

export default reduxForm({
    form: 'StreamCreate',
    validate
})(StreamCreate);
