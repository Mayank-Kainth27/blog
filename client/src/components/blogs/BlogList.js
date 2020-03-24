import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs , deleteBlog} from '../../actions';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.css';

class BlogList extends Component {
    componentDidMount() {
        this.props.fetchBlogs();
    }

    componentDidUpdate() {
        this.props.fetchBlogs();
    }

    renderBlogs() {
        return this.props.blogs.reverse().map(blog => {
            return (
                <div className="card darken-1" key={blog._id}>
                    <div className="card-content">
                        <span className="card-title">
                            {blog.title}
                            <button className="btn-flat right" onClick={() => this.props.deleteBlog(blog._id, this.props.history)}>
                                <i className="material-icons">
                                    delete
                            </i>
                            </button>
                            <Link to='/blogSend' className="btn-flat right">
                                <i className="material-icons">mail</i>
                            </Link>
                            <button class="btn-flat right" onClick={()=> this.props.updateBlog(blog._id, this.props.history)}>
                                <i className="material-icons">create</i>
                            </button>
                        </span>
                            <p>
                                {blog.body}
                            </p>
                        <p className="right 10em" style={{paddingTop: "1px"}}>
                            Created On: {new Date(blog.dateCreated).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderBlogs()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return { blogs: state.blogs }
}

export default connect(mapStateToProps, { fetchBlogs, deleteBlog, updateBlog })(withRouter(BlogList));