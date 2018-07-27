import {FETCH_POSTS} from '../actions';
import _ from 'lodash';
//
// const INITIAL_STATE={all:[], post: null};

export default function (state={},action){
  switch(action.type){
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
        return state;
  }
}
