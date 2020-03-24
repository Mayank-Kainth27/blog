import React from 'react';
import { connect } from 'react-redux';
import formFields from './blogformFields';
import _ from 'lodash';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';


const BlogReview = ({ onCancel, formValues, submitBlog, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        )
    })

    return (
        <div>
            <h5>please conform your entries</h5>
            {reviewFields}
            <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>
                Back
            </button>
            <button
                onClick={() => submitBlog(formValues, history)}
                className="green white-text  btn-flat right"
            >
                Finish
                <i className="material-icons right">done</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
  //console.log(state);
    return {
        formValues: state.form.blogForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(BlogReview));