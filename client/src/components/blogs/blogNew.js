// SurveyNew shows SurveyForm And SurveyVeiw
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import BlogForm from './BlogForm';
import BlogFormReview from './BlogFormReview';

class BlogNew extends Component {
    /*constructor(props) {
        super(props);
        this.state = { new: true };
    }*/
    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return <BlogFormReview
                onCancel={() => this.setState({ showFormReview: false })}
            />;
        }
        return (
            <BlogForm
                onBlogSubmit={() => this.setState({ showFormReview: true })}
            />
        );
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'blogForm'
})(BlogNew);