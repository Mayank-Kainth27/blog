import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import Payments from './Payments';

class Header extends Component{
    renderContent(){
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login with Google</a></li>
                );
            default:
                console.log(this.props.auth);
                return (
                    /*<li key="1"><Payments /></li>
                        <li key="3" style={{ margin: '0 10px' }}>
                            Credits: {this.props.auth.credits}
                        </li> */
                    <div>
                        <li key="1"><a>{this.props.auth.firstName}</a></li>
                        <li key="2"><a href="/api/logout">Logout</a></li>
                   </div>
                );
        }
    }
    
    render() {
        return (
            <nav >
                <div className="container nav-wrapper">
                    <Link
                        to={this.props.auth ? '/blogs' : '/'}
                        className="left brand-logo"
                    >
                        The Blog
                    </Link>
                <ul className="right">
                    {this.renderContent()}
                </ul>
            </div>
            </nav >
        )
    }
}

function mapStateToProps(state) {
    return {auth : state.auth}
}


export default connect(mapStateToProps)(Header);