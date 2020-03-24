import axios from 'axios';
import { FETCH_USER, FETCH_BLOGS } from './types';
import { FETCH_SURVEYS } from './types';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data })
};


export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data });
}
//  values out our form 
export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });    
};


export const fetchSurveys = () => async dispatch => {
    const res = await axios.get('/api/surveys');

    dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const submitBlog = (values, history) => async dispatch => {
    const res = await axios.post(`/api/blogs`, values);
    //console.log(values);
    history.push('/blogs');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchBlogs = () => async dispatch => {
    const res = await axios.get('/api/blogs');
    //console.log(res.data);
    dispatch({ type: FETCH_BLOGS, payload: res.data });
};

export const deleteBlog = (value,history) => async dispatch => {
    //console.log(value);
    const res = await axios.delete(`/api/blogs/delete/${value}`);
    history.push('/blogs/new');
    dispatch({ type: FETCH_BLOGS, payload: res.data });
}

export const fetchOneBlog = (value) => async dispatch => {
    const res = await axios.get(`/api/blogs/${value}`);
    dispatch({ type: FETCH_BLOGS, payload: res.data });
}