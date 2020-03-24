//SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import BlogField from './BlogFields';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import formFields from './blogformFields';



class BlogForm extends Component {
    renderFields() {
        /*return (
            <div>
                <Field label="Survey Title" type="text" name="title" component={SurveyField} />
                <Field label="Subject Line" type="text" name="subject" component={SurveyField} />
                <Field label="Email body" type="text" name="body" component={SurveyField} />
                <Field label="Recipients" type="text" name="recipients" component={SurveyField} />
            </div>
        );*/ //this static way
        return _.map(formFields, ({ label, name }) => {
            return (
                <Field
                    key={name}
                    component={BlogField}
                    type="text"
                    label={label}
                    name={name}
                />)
        });

    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onBlogSubmit)} >
                    {this.renderFields()}
                    <Link to="/blogs" className="red btn-flat white-text">
                        Cancel
                        <i className="material-icons right">block</i>
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const error = {};
    /*if (!values.title) {
        error.title = '*you must provide a title';
    }
    if (!values.subject) {
        error.subject = '*you must provide a subject';
    }
    if (!values.body) {
        error.body = '*you must provide a body';
    }*/

    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            //console.log(name);
            error[name] = `*you must provide a value to ${name}`;
            // you can customise it by adding a noValueError field 
            //in array fornFields and passing it with name property and 
            //assigning it to the error msg
        }
    });



    return error;
}

export default reduxForm({
    validate: validate,
    form: 'blogForm',
    destroyOnUnmount: false
})(BlogForm);