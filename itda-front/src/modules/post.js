import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api/posts';

const INITPOST = 'post/INITPOST';
const READ_POST = 'post/READ_POST';
const READ_POST_SUCCESS = 'post/READ_POST_SUCCESS';
const READ_POST_FAILURE = 'post/READ_POST_FAILURE';

const DELETE_POST = 'post/DELETE_POST';
const DELETE_POST_SUCCESS = 'post/DELETE_POST_SUCCESS';
const DELETE_POST_FAILURE = 'post/DELETE_POST_FAILURE';

export const initPost = createAction(INITPOST);

export const getPost = (id) => async (dispatch) => {
  // console.log(id);
  dispatch({ type: READ_POST });
  try {
    const response = await api.getPost(id);
    // console.log(response);
    dispatch({
      type: READ_POST_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: READ_POST_FAILURE,
      payload: err,
      error: true,
    });
    throw err;
  }
};

export const deletePost = (id) => async (dispatch) => {
  dispatch({ type: DELETE_POST });
  try {
    const response = await api.deletePost(id);
    dispatch({ type: DELETE_POST_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: DELETE_POST_FAILURE, payload: err, error: true });
    throw err;
  }
};

const initialState = {
  post: null,
  error: null,
  removeSuccess: false,
};

const post = handleActions(
  {
    [INITPOST]: (state) => initialState,
    [READ_POST]: (state) => initialState,
    [READ_POST_SUCCESS]: (state, { payload: { post } }) => ({
      ...state,
      post,
    }),
    [READ_POST_FAILURE]: (state, { payload: { err } }) => ({
      ...state,
      error: err,
    }),
    [DELETE_POST]: (state) => state,
    [DELETE_POST_SUCCESS]: (state, { payload: removeSuccess }) => ({
      ...state,
      removeSuccess,
    }),
    [DELETE_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default post;
