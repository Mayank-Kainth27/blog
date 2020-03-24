import React, { Component } from 'react';
import blogFeilds from './blogformFields';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { fetchOneBlog } from '../../actions';

class SendMail extends Component{
    componentDidMount() {
        fetchOneBlog();
    }

    renderContent() {
        return _.map(blogFeilds, ({ name, label }) => {
            return (<div key={name}>
                <label>{label}</label>
                <div>
                    <input />
                </div>
            </div>)
        })
    }

    render() {
        return (
            <div>
                {this.renderContent()}
                <Link to="/blogs" className="red btn-flat white-text">
                    Cancel
                        <i className="material-icons right">block</i>
                </Link>
                <button type="submit" className="teal btn-flat right white-text">
                    Next
                        <i className="material-icons right">done</i>
                </button>
            </div>
        )
    }
}

export default SendMail;