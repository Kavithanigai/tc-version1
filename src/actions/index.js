import {AUTH_USER,AUTH_ERROR} from './types';
import axios from 'axios';

export const signup = (formProps,callback) => async dispatch => {
  try{
  const response = await axios.post('http://localhost:3090/signup',formProps);

  dispatch({type: AUTH_USER, payload: response.data.token});
  localStorage.setItem('token', response.data.token);
  callback();

}catch(error){
  dispatch({type: AUTH_ERROR, payload: "Email in use or passwords don't match" });
}
};

export const signin = (formProps,callback) => async dispatch => {
  try{
  const response = await axios.post('http://localhost:3090/signin',formProps);

  dispatch({type: AUTH_USER, payload: response.data.token});
  localStorage.setItem('token', response.data.token);
  callback();

}catch(e){
  dispatch({type: AUTH_ERROR, payload: "Invalid Login Credentials"});
}
};


export const signout = () => {
  localStorage.removeItem('token');
  return{
    type: AUTH_USER,
    payload: ''
  };
};

export const FETCH_POSTS = 'fetch_posts';
const ROOT_URL = "http://localhost:3090/userplans";
export const fetchPosts = () => async dispatch => {
  try{
  const request = await axios.get(`${ROOT_URL}`);

  // localStorage.getItem('token', request.data.token);
  dispatch({type: AUTH_USER, payload: ''});
  dispatch({type: FETCH_POSTS, payload: request});

  }catch(e){
  dispatch({type: AUTH_ERROR, payload: "Invalid Credentials"});
}
};
