import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import surveyNew from './surveys/surveyNew';
import Dashboard from './Dashboard';
import blogNew from './blogs/blogNew';
import SendMail from './blogs/SendMail';


class App extends Component{
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <div className="container">
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/blogs" component={Dashboard} />
                        <Route path="/surveys/new" component={surveyNew} />
                        <Route path="/blogs/new" component={blogNew} />
                        <Route path="/blogSend" component={SendMail} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);