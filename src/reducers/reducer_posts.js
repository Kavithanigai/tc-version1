import { FETCH_POSTS, FETCH_POST, DELETE_POST, UPDATE_POST } from '../actions';
import _ from 'lodash';
//
// const INITIAL_STATE={all:[], post: null};

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case UPDATE_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      // console.log( "reducer_posts fn FETCH_POSTS");
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
