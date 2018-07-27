import {combineReducers} from 'redux';
import {reducer as FormReducer} from 'redux-form';
import auth from './auth';
import PostsReducer from './reducer_posts';

export default combineReducers({
  form: FormReducer,
  userplans: PostsReducer,
  auth
});