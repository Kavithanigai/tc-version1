import { AUTH_USER, AUTH_ERROR } from './types';
import axios from 'axios';
import { API_BASE_URL } from '../config';
const url = `${API_BASE_URL}`;

export const signup = (formProps, callback) => async dispatch => {
  try {
    // const url = `${API_BASE_URL}`;
    console.log('url=' + url);
    const response = await axios.post(`${url}/signup`, formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Email in use.'
    });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(`${url}/signin`, formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid Login Credentials' });
  }
};

export const signout = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: ''
  };
};

export const FETCH_POSTS = 'fetch_posts';
const ROOT_URL = `${url}/userplans`;
export const fetchPosts = () => async dispatch => {
  try {
    console.log('In fetchPosts1');
    // dispatch({type: AUTH_USER, payload: token});

    const request = await axios.get(`${ROOT_URL}`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });
    dispatch({ type: FETCH_POSTS, payload: request });
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid Credentials' });
  }
};

export const CREATE_POST = 'create_post';
export const createPost = (values, callback) => async dispatch => {
  try {
    const request = await axios.post(`${ROOT_URL}/add`, values, {
      headers: { Authorization: localStorage.getItem('token') }
    });
    dispatch({ type: CREATE_POST, payload: request });
    callback();
  } catch (e) {
    // console.log( "In fetchPosts error");
    dispatch({ type: AUTH_ERROR, payload: 'Invalid Credentials' });
  }
};

export const UPDATE_POST = 'update_post';
export const updatePost = (id, values, callback) => async dispatch => {
  try {
    const request = await axios.put(`${ROOT_URL}/${id}`, values, {
      headers: { Authorization: localStorage.getItem('token') }
    });
    //  console.log( "In fetchPosts2");
    dispatch({ type: UPDATE_POST, payload: request });
    callback();
  } catch (e) {
    // console.log( "In fetchPosts error");
    dispatch({ type: AUTH_ERROR, payload: 'Invalid Credentials' });
  }
};

export const FETCH_POST = 'fetch_post';
export const fetchPost = id => async dispatch => {
  try {
    const request = await axios.get(`${ROOT_URL}/${id}`, {
      headers: { Authorization: localStorage.getItem('token') }
    });
    //  console.log( "In fetchPosts2");
    dispatch({ type: FETCH_POST, payload: request });
    // callback();
  } catch (e) {
    // console.log( "In fetchPosts error");
    dispatch({ type: AUTH_ERROR, payload: 'Invalid Credentials' });
  }
};

export const DELETE_POST = 'delete_post';
export const deletePost = (id, callback) => async dispatch => {
  try {
    const request = await axios.delete(`${ROOT_URL}/${id}`, {
      headers: { Authorization: localStorage.getItem('token') }
    });
    //  console.log( "In fetchPosts2");
    dispatch({ type: DELETE_POST, payload: id });
    callback();
  } catch (e) {
    // console.log( "In fetchPosts error");
    dispatch({ type: AUTH_ERROR, payload: 'Invalid Credentials' });
  }
};

//Fetch Weather
const API_KEY1 = '62d077d3d898080d05249ba550fa1b45';
const WEATHER_ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY1}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = city => async dispatch => {
  try {
    const request = axios.get(`${WEATHER_ROOT_URL}&q=${city},us`);

    dispatch({
      type: FETCH_WEATHER,
      payload: request
    });
  } catch (e) {
    console.log(e);
  }
};
