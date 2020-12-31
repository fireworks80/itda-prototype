import { combineReducers } from 'redux';
import auth from './auth';
import write from './write';
import posts from './posts';
import post from './post';

const rootReducers = combineReducers({ auth, write, posts, post });

export default rootReducers;
